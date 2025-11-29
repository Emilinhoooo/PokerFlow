import { Link } from 'react-router-dom'
import { Play, Trophy, Flame, Target, Zap, Settings, Filter } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import ELODisplay from '../components/ELODisplay'
import { getRankTitle } from '../lib/elo'

export default function Home() {
  const { user, profile, loading, isOfflineMode } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-400/30 border-t-amber-400 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-lg mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 mb-4 shadow-glow">
            <span className="font-display text-3xl text-felt-950">PF</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl tracking-wider text-white mb-2">
            POKERFLOW
          </h1>
          <p className="text-gray-400">Master poker decisions through puzzles</p>
          
          {isOfflineMode && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm">
              <Zap className="w-4 h-4" />
              Demo Mode
            </div>
          )}
        </div>

        {/* User stats */}
        {profile && (
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <ELODisplay profile={profile} />
          </div>
        )}

        {/* Main CTA */}
        <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link
            to="/play"
            className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-lg"
          >
            <Play className="w-6 h-6" />
            <span>Start Training</span>
          </Link>

          <Link
            to="/settings"
            className="btn-secondary w-full flex items-center justify-center gap-3 py-3"
          >
            <Filter className="w-5 h-5" />
            <span>Customize Training</span>
          </Link>

          {!user && (
            <Link
              to="/login"
              className="btn-secondary w-full flex items-center justify-center gap-3 py-3"
            >
              <span>Sign In to Save Progress</span>
            </Link>
          )}
        </div>

        {/* Features section */}
        <div className="mt-10 grid gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="font-display text-xl tracking-wider text-gray-400 text-center">
            How It Works
          </h2>
          
          <FeatureCard
            icon={Target}
            title="Solve Puzzles"
            description="Choose the best action from 4 options in real poker scenarios"
            color="text-blue-400"
          />
          
          <FeatureCard
            icon={Trophy}
            title="Track Your ELO"
            description="Your rating adjusts based on puzzle difficulty and performance"
            color="text-amber-400"
          />
          
          <FeatureCard
            icon={Flame}
            title="Build Streaks"
            description="Maintain your streak by solving puzzles correctly each day"
            color="text-orange-400"
          />
        </div>

        {/* Progress teaser */}
        {profile && profile.puzzles_solved > 0 && (
          <div className="mt-8 text-center text-gray-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm">
              You've solved <span className="text-white font-bold">{profile.puzzles_solved}</span> puzzles 
              and reached <span className="text-amber-400 font-bold">{getRankTitle(profile.elo)}</span> rank!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description, color }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
      <div className={`p-2 rounded-lg bg-black/30 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}
