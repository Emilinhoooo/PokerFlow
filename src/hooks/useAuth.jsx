import { createContext, useContext, useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

const AuthContext = createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

// Default user for demo/offline mode
const createDemoUser = () => ({
  id: 'demo-user',
  email: 'demo@pokerflow.app',
  isDemo: true
})

// Default profile for new/demo users
const defaultProfile = {
  elo: 1200,
  puzzles_solved: 0,
  correct_answers: 0,
  current_streak: 0,
  best_streak: 0,
  solved_puzzle_ids: []
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isOfflineMode, setIsOfflineMode] = useState(!isSupabaseConfigured())

  // Load profile from localStorage for offline mode
  const loadOfflineProfile = () => {
    const saved = localStorage.getItem('pokerflow_profile')
    if (saved) {
      return JSON.parse(saved)
    }
    return { ...defaultProfile }
  }

  // Save profile to localStorage for offline mode
  const saveOfflineProfile = (profileData) => {
    localStorage.setItem('pokerflow_profile', JSON.stringify(profileData))
  }

  useEffect(() => {
    if (isOfflineMode) {
      // Demo/offline mode
      setUser(createDemoUser())
      setProfile(loadOfflineProfile())
      setLoading(false)
      return
    }

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchProfile(session.user.id)
      } else {
        setLoading(false)
      }
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchProfile(session.user.id)
      } else {
        setProfile(null)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [isOfflineMode])

  const fetchProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single()

      if (error && error.code !== 'PGRST116') {
        throw error
      }

      if (data) {
        setProfile(data)
      } else {
        // Create new profile
        const newProfile = { ...defaultProfile, user_id: userId }
        const { data: created, error: createError } = await supabase
          .from('profiles')
          .insert([newProfile])
          .select()
          .single()

        if (createError) throw createError
        setProfile(created)
      }
    } catch (err) {
      console.error('Error fetching profile:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email, password, username) => {
    if (isOfflineMode) {
      // In demo mode, just create a local user
      const demoUser = { ...createDemoUser(), email, username }
      setUser(demoUser)
      setProfile(loadOfflineProfile())
      return { user: demoUser, error: null }
    }

    try {
      setLoading(true)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username }
        }
      })

      if (error) throw error
      return { user: data.user, error: null }
    } catch (err) {
      setError(err.message)
      return { user: null, error: err }
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email, password) => {
    if (isOfflineMode) {
      // In demo mode, accept any credentials
      const demoUser = { ...createDemoUser(), email }
      setUser(demoUser)
      setProfile(loadOfflineProfile())
      return { user: demoUser, error: null }
    }

    try {
      setLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error
      return { user: data.user, error: null }
    } catch (err) {
      setError(err.message)
      return { user: null, error: err }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    if (isOfflineMode) {
      setUser(null)
      setProfile(null)
      return
    }

    try {
      await supabase.auth.signOut()
      setUser(null)
      setProfile(null)
    } catch (err) {
      console.error('Error signing out:', err)
    }
  }

  const updateProfile = async (updates) => {
    if (isOfflineMode) {
      const newProfile = { ...profile, ...updates }
      setProfile(newProfile)
      saveOfflineProfile(newProfile)
      return { data: newProfile, error: null }
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single()

      if (error) throw error
      setProfile(data)
      return { data, error: null }
    } catch (err) {
      console.error('Error updating profile:', err)
      return { data: null, error: err }
    }
  }

  // Update ELO and stats after puzzle completion
  const recordPuzzleResult = async (puzzleId, eloChange, wasCorrect) => {
    const newElo = Math.max(100, (profile?.elo || 1200) + eloChange)
    const newStreak = wasCorrect ? (profile?.current_streak || 0) + 1 : 0
    const newBestStreak = Math.max(newStreak, profile?.best_streak || 0)
    const solvedIds = [...(profile?.solved_puzzle_ids || []), puzzleId]
    
    const updates = {
      elo: newElo,
      puzzles_solved: (profile?.puzzles_solved || 0) + 1,
      correct_answers: (profile?.correct_answers || 0) + (wasCorrect ? 1 : 0),
      current_streak: newStreak,
      best_streak: newBestStreak,
      solved_puzzle_ids: solvedIds,
      updated_at: new Date().toISOString()
    }

    return await updateProfile(updates)
  }

  const value = {
    user,
    profile,
    loading,
    error,
    isOfflineMode,
    signUp,
    signIn,
    signOut,
    updateProfile,
    recordPuzzleResult
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
