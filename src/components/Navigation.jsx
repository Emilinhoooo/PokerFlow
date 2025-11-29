import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, Trophy, Settings, LogOut } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

export default function Navigation() {
  const location = useLocation()
  const { user, profile, signOut } = useAuth()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show nav when scrolling down past 50px
      if (currentScrollY > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/profile', icon: User, label: 'Profile' },
  ]

  const isActive = (path) => location.pathname === path

  // Don't render anything if not visible - this way it doesn't take space
  if (!isVisible) return null

  return (
    <nav className="bg-black/90 backdrop-blur-xl border-t border-white/10 mt-4">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - visible on desktop */}
          <Link to="/" className="hidden md:flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-display text-felt-950 text-sm font-bold">
              PF
            </div>
            <span className="font-display text-xl tracking-wider text-white">POKERFLOW</span>
          </Link>

          {/* ELO Display - center on desktop */}
          {profile && (
            <div className="hidden md:flex elo-display">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-mono">{profile.elo}</span>
            </div>
          )}

          {/* Nav items */}
          <div className="flex items-center justify-around flex-1 md:flex-none md:gap-2">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive(path)
                    ? 'text-amber-400 bg-amber-400/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs md:text-sm">{label}</span>
              </Link>
            ))}

            {user && (
              <button
                onClick={signOut}
                className="flex flex-col md:flex-row items-center gap-1 md:gap-2 px-4 py-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-xs md:text-sm">Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
