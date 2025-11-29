import { useState } from 'react'
import { X } from 'lucide-react'
import { Hand } from './PlayingCard'
import { playerTypes } from '../data/puzzles'

export default function HandVsOpponents({ heroHand, opponents = [], size = 'lg' }) {
  const [activeOpponent, setActiveOpponent] = useState(null)
  
  // If no opponents array provided but we have a single opponent, convert
  const opponentList = Array.isArray(opponents) ? opponents : (opponents ? [opponents] : [])
  
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-400 mb-2">Your Hand:</p>
        
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {/* Hero's cards */}
          <Hand cards={heroHand} size={size} />
          
          {/* VS + Opponents */}
          {opponentList.length > 0 && (
            <>
              {opponentList.map((opp, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-gray-500 font-bold text-sm">vs</span>
                  <OpponentBadge 
                    opponent={opp} 
                    onClick={() => setActiveOpponent(opp)}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Opponent Detail Modal */}
      {activeOpponent && (
        <OpponentModal 
          opponent={activeOpponent} 
          onClose={() => setActiveOpponent(null)} 
        />
      )}
    </>
  )
}

// Clickable opponent badge
function OpponentBadge({ opponent, onClick }) {
  const typeInfo = playerTypes[opponent.type] || playerTypes.unknown
  
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-amber-400/10 hover:border-amber-400/30 transition-all group"
    >
      <span className="text-xl">{typeInfo.icon}</span>
      <div className="text-left">
        <span className="text-sm font-semibold text-white block leading-tight">
          {typeInfo.name}
        </span>
        {opponent.position && (
          <span className="text-xs text-gray-500">{opponent.position}</span>
        )}
      </div>
      <span className="text-xs text-gray-500 group-hover:text-amber-400 transition-colors ml-1">
        ⓘ
      </span>
    </button>
  )
}

// Modal showing opponent details and strategy
function OpponentModal({ opponent, onClose }) {
  const typeInfo = playerTypes[opponent.type] || playerTypes.unknown
  const category = getOpponentCategory(opponent.type)
  
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-felt-900 border border-white/10 rounded-xl max-w-sm w-full overflow-hidden animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{typeInfo.icon}</span>
            <div>
              <h3 className="font-display text-xl text-white">{typeInfo.name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${category.color}`}>
                {category.label}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Section */}
        <div className="p-4 border-b border-white/10">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Player Profile
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">{typeInfo.description}</p>
        </div>

        {/* Tendencies Section */}
        <div className="p-4 border-b border-white/10">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Key Tendencies
          </h4>
          <div className="space-y-2">
            {getTendencies(opponent.type).map((tendency, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-amber-400">•</span>
                <span className="text-gray-300">{tendency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy Section */}
        <div className="p-4 bg-amber-400/10">
          <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            💡 Your Strategy
          </h4>
          <p className="text-white text-sm leading-relaxed">{typeInfo.strategy}</p>
        </div>

        {/* Position info if available */}
        {opponent.position && (
          <div className="px-4 py-3 bg-black/30 text-center">
            <span className="text-xs text-gray-500">
              This opponent is in <span className="text-white font-semibold">{opponent.position}</span> position
            </span>
          </div>
        )}

        {/* Close button */}
        <div className="p-4">
          <button
            onClick={onClose}
            className="w-full py-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}

// Get opponent category (exploitable, tough, unknown)
function getOpponentCategory(type) {
  const exploitable = ['fish', 'calling_station', 'maniac', 'nit', 'weak_tight']
  const tough = ['tag', 'lag', 'solid_reg']
  
  if (exploitable.includes(type)) {
    return { label: 'Exploitable', color: 'bg-green-500/20 text-green-400' }
  }
  if (tough.includes(type)) {
    return { label: 'Tough Opponent', color: 'bg-red-500/20 text-red-400' }
  }
  return { label: 'No Read', color: 'bg-gray-500/20 text-gray-400' }
}

// Get tendencies list for each player type
function getTendencies(type) {
  const tendencies = {
    fish: [
      'Plays too many hands preflop',
      'Calls with weak hands postflop',
      'Doesn\'t understand pot odds',
      'Makes random bluffs',
      'Overvalues weak pairs'
    ],
    calling_station: [
      'Calls with any piece of the board',
      'Rarely folds to bets',
      'Almost never bluffs',
      'Will call river with bottom pair',
      'Doesn\'t raise enough with strong hands'
    ],
    maniac: [
      'Raises and re-raises constantly',
      'Bluffs way too often',
      'Plays almost any two cards',
      'Hard to put on a hand',
      'Will stack off light'
    ],
    nit: [
      'Only plays premium hands',
      'Folds to most aggression',
      'Easy to bluff postflop',
      'When they bet big, they have it',
      'Predictable and exploitable'
    ],
    weak_tight: [
      'Plays tight preflop',
      'Folds too much to pressure',
      'Scared of big pots',
      'Won\'t call without the nuts',
      'Easy to push off hands'
    ],
    tag: [
      'Plays a solid range',
      'Aggressive with strong hands',
      'Capable of well-timed bluffs',
      'Respects position',
      'Hard to extract value from'
    ],
    lag: [
      'Plays wide but with logic',
      'Applies constant pressure',
      'Can have anything',
      'Mixes bluffs and value well',
      'Will fight for pots'
    ],
    solid_reg: [
      'Thinks in ranges',
      'Balanced between value and bluffs',
      'Adjusts to opponents',
      'Makes few mistakes',
      'Hard to exploit'
    ],
    unknown: [
      'No information yet',
      'Assume competent until proven otherwise',
      'Watch for patterns',
      'Play solid fundamentals',
      'Gather reads for later'
    ]
  }
  
  return tendencies[type] || tendencies.unknown
}
