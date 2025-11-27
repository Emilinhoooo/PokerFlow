import { Trophy, Flame, Target, CheckCircle2 } from 'lucide-react'
import { getRankTitle, getEloColor } from '../lib/elo'

export default function ELODisplay({ profile, compact = false }) {
  if (!profile) return null
  
  const winRate = profile.puzzles_solved > 0 
    ? Math.round((profile.correct_answers / profile.puzzles_solved) * 100) 
    : 0

  if (compact) {
    return (
      <div className="elo-display">
        <Trophy className="w-4 h-4 text-amber-400" />
        <span className={`font-mono font-bold ${getEloColor(profile.elo)}`}>
          {profile.elo}
        </span>
      </div>
    )
  }

  return (
    <div className="card-container">
      {/* Main ELO display */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8 text-amber-400" />
          <span className={`font-mono text-5xl font-bold ${getEloColor(profile.elo)}`}>
            {profile.elo}
          </span>
        </div>
        <p className="text-gray-400 font-display text-lg tracking-wider">
          {getRankTitle(profile.elo)}
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard 
          icon={Target} 
          label="Solved" 
          value={profile.puzzles_solved} 
          color="text-blue-400"
        />
        <StatCard 
          icon={CheckCircle2} 
          label="Win Rate" 
          value={`${winRate}%`} 
          color="text-green-400"
        />
        <StatCard 
          icon={Flame} 
          label="Streak" 
          value={profile.current_streak} 
          color="text-orange-400"
        />
      </div>

      {/* Best streak */}
      {profile.best_streak > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            Best streak: <span className="text-amber-400 font-bold">{profile.best_streak}</span>
          </p>
        </div>
      )}
    </div>
  )
}

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="stat-card">
      <Icon className={`w-5 h-5 ${color} mx-auto mb-1`} />
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
    </div>
  )
}
