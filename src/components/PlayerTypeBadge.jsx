import { useState } from 'react'
import { X } from 'lucide-react'
import { playerTypes } from '../data/puzzles'

export default function PlayerTypeBadge({ type, showStrategy = false }) {
  const [showTooltip, setShowTooltip] = useState(false)
  
  const playerType = playerTypes[type]
  
  if (!playerType) return null
  
  return (
    <>
      {/* Badge */}
      <button
        onClick={() => setShowTooltip(true)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
      >
        <span className="text-xl">{playerType.icon}</span>
        <div className="text-left">
          <span className="text-sm font-semibold text-white block">vs {playerType.name}</span>
          <span className="text-xs text-gray-500">Tap for strategy</span>
        </div>
      </button>

      {/* Tooltip Modal */}
      {showTooltip && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowTooltip(false)}
        >
          <div 
            className="bg-felt-900 border border-white/10 rounded-xl max-w-sm w-full p-5 animate-slide-up"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{playerType.icon}</span>
                <div>
                  <h3 className="font-display text-xl text-white">{playerType.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(type)}`}>
                    {getCategoryLabel(type)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="p-1 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Profile</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{playerType.description}</p>
            </div>

            {/* Strategy */}
            <div className="p-3 bg-amber-400/10 border border-amber-400/30 rounded-lg">
              <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                💡 Strategy
              </h4>
              <p className="text-white text-sm leading-relaxed">{playerType.strategy}</p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="w-full mt-4 py-2 text-gray-400 hover:text-white text-sm transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function getCategoryLabel(type) {
  const exploitable = ['fish', 'calling_station', 'maniac', 'nit', 'weak_tight']
  const tough = ['tag', 'lag', 'solid_reg']
  
  if (exploitable.includes(type)) return 'Exploitable'
  if (tough.includes(type)) return 'Tough Opponent'
  return 'No Read'
}

function getCategoryColor(type) {
  const exploitable = ['fish', 'calling_station', 'maniac', 'nit', 'weak_tight']
  const tough = ['tag', 'lag', 'solid_reg']
  
  if (exploitable.includes(type)) return 'bg-green-500/20 text-green-400'
  if (tough.includes(type)) return 'bg-red-500/20 text-red-400'
  return 'bg-gray-500/20 text-gray-400'
}
