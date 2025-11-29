import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, Trophy, Target, CheckCircle2, Flame, 
  Award, TrendingUp, Calendar, BarChart3, RefreshCw
} from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { getRankTitle, getEloColor, getDifficultyLabel } from '../lib/elo'

export default function Profile() {
  const navigate = useNavigate()
  const { user, profile, loading, isOfflineMode, updateProfile } = useAuth()
  const [resetting, setResetting] = useState(false)

  const handleResetProgress = async () => {
    if (!confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
      return
    }
    
    setResetting(true)
    await updateProfile({
      elo: 1200,
      puzzles_solved: 0,
      correct_answers: 0,
      current_streak: 0,
      best_streak: 0,
      solved_puzzle_ids: []
    })
    setResetting(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-amber-400/30 border-t-amber-400 rounded-full animate-spin" />
      </div>
    )
  }

  const winRate = profile?.puzzles_solved > 0 
    ? Math.round((profile.correct_answers / profile.puzzles_solved) * 100) 
    : 0

  const avgEloPerPuzzle = profile?.puzzles_solved > 0
    ? Math.round((profile.elo - 1200) / profile.puzzles_solved * 10) / 10
    : 0

  return (
    <div className="min-h-screen pb-24 md:pt-20">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>
          <h1 className="font-display text-2xl tracking-wider text-white">Profile</h1>
        </div>

        {/* User info */}
        <div className="card-container mb-6 animate-slide-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="font-display text-2xl text-felt-950">
                {user?.email?.[0]?.toUpperCase() || 'P'}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                {user?.email?.split('@')[0] || 'Player'}
              </h2>
              <p className="text-gray-400 text-sm">{user?.email}</p>
              {isOfflineMode && (
                <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 bg-amber-500/20 rounded text-amber-400 text-xs">
                  Demo Mode
                </span>
              )}
            </div>
          </div>

          {/* Main ELO display */}
          <div className="text-center py-6 border-y border-white/10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Trophy className="w-8 h-8 text-amber-400" />
              <span className={`font-mono text-5xl font-bold ${getEloColor(profile?.elo || 1200)}`}>
                {profile?.elo || 1200}
              </span>
            </div>
            <p className="text-gray-400 font-display text-lg tracking-wider">
              {getRankTitle(profile?.elo || 1200)}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {getDifficultyLabel(profile?.elo || 1200)} Level
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatCard
            icon={Target}
            label="Puzzles Solved"
            value={profile?.puzzles_solved || 0}
            color="text-blue-400"
            delay="0.1s"
          />
          <StatCard
            icon={CheckCircle2}
            label="Win Rate"
            value={`${winRate}%`}
            color="text-green-400"
            delay="0.15s"
          />
          <StatCard
            icon={Flame}
            label="Current Streak"
            value={profile?.current_streak || 0}
            color="text-orange-400"
            delay="0.2s"
          />
          <StatCard
            icon={Award}
            label="Best Streak"
            value={profile?.best_streak || 0}
            color="text-purple-400"
            delay="0.25s"
          />
        </div>

        {/* Additional stats */}
        {profile?.puzzles_solved > 0 && (
          <div className="card-container mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-display text-lg tracking-wider text-gray-400 mb-4">
              Performance
            </h3>
            <div className="space-y-3">
              <ProgressStat
                icon={TrendingUp}
                label="Avg ELO per puzzle"
                value={avgEloPerPuzzle > 0 ? `+${avgEloPerPuzzle}` : avgEloPerPuzzle}
                positive={avgEloPerPuzzle >= 0}
              />
              <ProgressStat
                icon={BarChart3}
                label="Correct answers"
                value={`${profile.correct_answers}/${profile.puzzles_solved}`}
                positive={winRate >= 50}
              />
            </div>
          </div>
        )}

        {/* ELO Progress visualization */}
        {profile?.puzzles_solved > 0 && (
          <div className="card-container mb-6 animate-slide-up" style={{ animationDelay: '0.35s' }}>
            <h3 className="font-display text-lg tracking-wider text-gray-400 mb-4">
              Rank Progress
            </h3>
            <RankProgress elo={profile?.elo || 1200} />
          </div>
        )}

        {/* Reset button */}
        <button
          onClick={handleResetProgress}
          disabled={resetting}
          className="w-full flex items-center justify-center gap-2 py-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <RefreshCw className={`w-5 h-5 ${resetting ? 'animate-spin' : ''}`} />
          <span>{resetting ? 'Resetting...' : 'Reset Progress'}</span>
        </button>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, color, delay }) {
  return (
    <div 
      className="card-container text-center animate-slide-up"
      style={{ animationDelay: delay }}
    >
      <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
    </div>
  )
}

function ProgressStat({ icon: Icon, label, value, positive }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-gray-400">
        <Icon className="w-4 h-4" />
        <span className="text-sm">{label}</span>
      </div>
      <span className={`font-mono font-bold ${positive ? 'text-green-400' : 'text-red-400'}`}>
        {value}
      </span>
    </div>
  )
}

function RankProgress({ elo }) {
  const ranks = [
    { name: 'Fish', min: 0, max: 1000 },
    { name: 'Novice', min: 1000, max: 1100 },
    { name: 'Amateur', min: 1100, max: 1200 },
    { name: 'Regular', min: 1200, max: 1300 },
    { name: 'Skilled', min: 1300, max: 1400 },
    { name: 'Veteran', min: 1400, max: 1500 },
    { name: 'Expert', min: 1500, max: 1600 },
    { name: 'Master', min: 1600, max: 1700 },
    { name: 'Grandmaster', min: 1700, max: 1800 },
    { name: 'Legend', min: 1800, max: 2000 },
  ]

  const currentRank = ranks.find(r => elo >= r.min && elo < r.max) || ranks[ranks.length - 1]
  const progress = ((elo - currentRank.min) / (currentRank.max - currentRank.min)) * 100
  const nextRank = ranks[ranks.indexOf(currentRank) + 1]

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-amber-400 font-semibold">{currentRank.name}</span>
        {nextRank && (
          <span className="text-gray-500">{nextRank.name} ({nextRank.min}+)</span>
        )}
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 text-center">
        {nextRank ? `${nextRank.min - elo} ELO to next rank` : 'Max rank achieved!'}
      </p>
    </div>
  )
}
