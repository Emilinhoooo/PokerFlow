import { useState } from 'react'
import { CircleDollarSign, Users, MapPin, PlayCircle, Eye } from 'lucide-react'
import HandVsOpponents from './HandVsOpponents'
import PokerTableModal from './PokerTableModal'

export default function PuzzleCard({ puzzle }) {
  const { scenario } = puzzle
  const [showTableModal, setShowTableModal] = useState(false)
  
  // Build opponents array from puzzle data
  const opponents = []
  if (puzzle.villainInfo) {
    opponents.push({
      type: puzzle.villainInfo.type,
      position: puzzle.villainPosition ? positionLabel(puzzle.villainPosition) : null
    })
  }
  // Support for additional villains in multiway pots
  if (puzzle.villains) {
    puzzle.villains.forEach(v => {
      opponents.push({
        type: v.type,
        position: v.position ? positionLabel(v.position) : null
      })
    })
  }
  
  return (
    <>
      <div className="card-container animate-slide-up">
        {/* Puzzle title and difficulty */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl md:text-2xl tracking-wide text-white">
            {puzzle.title}
          </h2>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${getDifficultyColor(puzzle.difficulty)}`}>
            {puzzle.difficulty}
          </span>
        </div>

        {/* Scenario info grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {/* Position - Clickable to open table view */}
          <button 
            onClick={() => setShowTableModal(true)}
            className="flex items-center gap-2 bg-black/20 rounded-lg p-2 hover:bg-amber-400/10 hover:ring-1 hover:ring-amber-400/50 transition-all text-left group"
          >
            <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-xs text-gray-500 truncate flex items-center gap-1">
                Position 
                <Eye className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
              <p className="text-sm text-white font-medium truncate">{scenario.position}</p>
            </div>
          </button>
          
          <InfoBadge 
            icon={CircleDollarSign} 
            label="Stack" 
            value={scenario.stackSize} 
          />
          <InfoBadge 
            icon={Users} 
            label="Blinds" 
            value={scenario.blinds} 
          />
          <InfoBadge 
            icon={PlayCircle} 
            label="Puzzle ELO" 
            value={puzzle.elo} 
          />
        </div>

        {/* Action description */}
        <div className="bg-black/30 rounded-lg p-4 mb-5">
          <p className="text-sm text-gray-400 mb-1">Action:</p>
          <p className="text-white">{scenario.action}</p>
        </div>

        {/* Your hand VS Opponents - New layout */}
        <HandVsOpponents 
          heroHand={scenario.hand} 
          opponents={opponents}
          size="lg"
        />

        {/* Context if provided */}
        {scenario.context && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-sm text-gray-400 italic">{scenario.context}</p>
          </div>
        )}
        
        {/* Tap hint for table view */}
        <div className="mt-3 text-center">
          <button 
            onClick={() => setShowTableModal(true)}
            className="text-xs text-gray-500 hover:text-amber-400 transition-colors"
          >
            👆 Tap Position to see table view
          </button>
        </div>
      </div>

      {/* Table Modal */}
      <PokerTableModal 
        puzzle={puzzle}
        isOpen={showTableModal}
        onClose={() => setShowTableModal(false)}
      />
    </>
  )
}

function InfoBadge({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2 bg-black/20 rounded-lg p-2">
      <Icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
      <div className="min-w-0">
        <p className="text-xs text-gray-500 truncate">{label}</p>
        <p className="text-sm text-white font-medium truncate">{value}</p>
      </div>
    </div>
  )
}

function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-500/20 text-green-400 border border-green-500/30'
    case 'intermediate':
      return 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
    case 'advanced':
      return 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
    case 'expert':
      return 'bg-red-500/20 text-red-400 border border-red-500/30'
    default:
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
  }
}

function positionLabel(pos) {
  const labels = {
    'early': 'UTG',
    'middle': 'MP',
    'late': 'CO',
    'cutoff': 'CO',
    'hijack': 'HJ',
    'button': 'BTN',
    'sb': 'SB',
    'bb': 'BB'
  }
  return labels[pos] || pos.toUpperCase()
}
