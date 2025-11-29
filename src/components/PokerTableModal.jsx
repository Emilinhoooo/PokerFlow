import { useState } from 'react'
import { X } from 'lucide-react'
import { playerTypes } from '../data/puzzles'

export default function PokerTableModal({ puzzle, isOpen, onClose }) {
  if (!isOpen || !puzzle) return null

  const { scenario, villainInfo, street } = puzzle
  
  // Parse board cards from action text
  const boardCards = parseBoardCards(scenario.action)
  
  // Parse pot size from action text  
  const potSize = parsePotSize(scenario.action)
  
  // Determine hero position
  const heroPosition = parsePosition(scenario.position)
  
  // Determine villain position
  const villainPosition = puzzle.villainPosition || 'unknown'
  
  // Get action sequence
  const actions = parseActions(scenario.action)

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-felt-900 border border-white/20 rounded-2xl max-w-lg w-full overflow-hidden animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="font-display text-xl text-white">Table View</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Table Visualization */}
        <div className="p-4">
          <div className="relative aspect-[4/3] bg-gradient-to-br from-felt-700 to-felt-800 rounded-[100px] border-8 border-felt-950 shadow-2xl">
            {/* Table felt texture */}
            <div className="absolute inset-0 rounded-[92px] opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-felt-500 to-transparent" />
            
            {/* Pot in center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              {/* Board cards */}
              {boardCards.length > 0 && (
                <div className="flex gap-1 justify-center mb-2">
                  {boardCards.map((card, i) => (
                    <div 
                      key={i} 
                      className="w-8 h-11 bg-white rounded shadow-md flex items-center justify-center text-xs font-bold"
                      style={{ color: isRedSuit(card) ? '#dc2626' : '#1f2937' }}
                    >
                      {card}
                    </div>
                  ))}
                </div>
              )}
              
              {/* Pot size */}
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-amber-400 font-mono text-sm font-bold">
                  Pot: {potSize}
                </span>
              </div>
            </div>

            {/* Seats - 6 max layout */}
            <Seat 
              position="bb" 
              label="BB" 
              top="10%" 
              left="65%"
              isHero={heroPosition === 'bb'}
              isVillain={villainPosition === 'bb'}
              heroCards={heroPosition === 'bb' ? scenario.hand : null}
              villainInfo={villainPosition === 'bb' ? villainInfo : null}
              action={getActionForPosition('bb', actions)}
            />
            
            <Seat 
              position="sb" 
              label="SB" 
              top="10%" 
              left="35%"
              isHero={heroPosition === 'sb'}
              isVillain={villainPosition === 'sb'}
              heroCards={heroPosition === 'sb' ? scenario.hand : null}
              villainInfo={villainPosition === 'sb' ? villainInfo : null}
              action={getActionForPosition('sb', actions)}
            />
            
            <Seat 
              position="button" 
              label="BTN" 
              top="45%" 
              left="5%"
              isHero={heroPosition === 'button'}
              isVillain={villainPosition === 'button'}
              heroCards={heroPosition === 'button' ? scenario.hand : null}
              villainInfo={villainPosition === 'button' ? villainInfo : null}
              showDealerButton={true}
              action={getActionForPosition('button', actions)}
            />
            
            <Seat 
              position="late" 
              label="CO" 
              top="75%" 
              left="20%"
              isHero={heroPosition === 'late' || heroPosition === 'cutoff'}
              isVillain={villainPosition === 'late' || villainPosition === 'cutoff'}
              heroCards={(heroPosition === 'late' || heroPosition === 'cutoff') ? scenario.hand : null}
              villainInfo={(villainPosition === 'late' || villainPosition === 'cutoff') ? villainInfo : null}
              action={getActionForPosition('co', actions)}
            />
            
            <Seat 
              position="middle" 
              label="MP" 
              top="75%" 
              left="80%"
              isHero={heroPosition === 'middle'}
              isVillain={villainPosition === 'middle'}
              heroCards={heroPosition === 'middle' ? scenario.hand : null}
              villainInfo={villainPosition === 'middle' ? villainInfo : null}
              action={getActionForPosition('mp', actions)}
            />
            
            <Seat 
              position="early" 
              label="UTG" 
              top="45%" 
              left="95%"
              isHero={heroPosition === 'early'}
              isVillain={villainPosition === 'early'}
              heroCards={heroPosition === 'early' ? scenario.hand : null}
              villainInfo={villainPosition === 'early' ? villainInfo : null}
              action={getActionForPosition('utg', actions)}
            />
          </div>
        </div>

        {/* Action Summary */}
        <div className="px-4 pb-4">
          <div className="bg-black/30 rounded-lg p-3">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Action</h4>
            <p className="text-sm text-white">{scenario.action}</p>
          </div>
        </div>

        {/* Legend */}
        <div className="px-4 pb-4 flex flex-wrap gap-3 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-amber-400 ring-2 ring-amber-400/50" />
            <span>Hero</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-400 ring-2 ring-red-400/50" />
            <span>Villain</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-white" />
            <span>Dealer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Individual seat component
function Seat({ 
  position, 
  label, 
  top, 
  left, 
  isHero, 
  isVillain, 
  heroCards, 
  villainInfo,
  showDealerButton,
  action 
}) {
  const isActive = isHero || isVillain
  
  return (
    <div 
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ top, left }}
    >
      {/* Dealer button */}
      {showDealerButton && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-gray-900 shadow-lg z-10">
          D
        </div>
      )}
      
      {/* Seat circle */}
      <div 
        className={`
          w-12 h-12 rounded-full flex flex-col items-center justify-center text-xs font-bold
          transition-all duration-300
          ${isHero 
            ? 'bg-amber-400 text-felt-900 ring-4 ring-amber-400/50 shadow-lg shadow-amber-400/30' 
            : isVillain 
              ? 'bg-red-500 text-white ring-4 ring-red-400/50 shadow-lg shadow-red-400/30'
              : 'bg-felt-600 text-gray-400 border border-white/10'
          }
        `}
      >
        {isVillain && villainInfo ? (
          <span className="text-lg">{playerTypes[villainInfo.type]?.icon || '?'}</span>
        ) : (
          <span>{label}</span>
        )}
      </div>
      
      {/* Position label */}
      <div className={`text-center mt-1 text-[10px] ${isActive ? 'text-white' : 'text-gray-500'}`}>
        {isHero ? 'HERO' : isVillain ? playerTypes[villainInfo?.type]?.name || label : label}
      </div>
      
      {/* Hero cards */}
      {isHero && heroCards && (
        <div className="flex gap-0.5 justify-center mt-1">
          {heroCards.split(' ').map((card, i) => (
            <div 
              key={i}
              className="w-5 h-7 bg-white rounded text-[8px] font-bold flex items-center justify-center shadow"
              style={{ color: isRedSuit(card) ? '#dc2626' : '#1f2937' }}
            >
              {card.replace('♠', '♠').replace('♥', '♥').replace('♦', '♦').replace('♣', '♣')}
            </div>
          ))}
        </div>
      )}
      
      {/* Villain face-down cards */}
      {isVillain && (
        <div className="flex gap-0.5 justify-center mt-1">
          <div className="w-5 h-7 bg-blue-900 rounded shadow border border-blue-700" />
          <div className="w-5 h-7 bg-blue-900 rounded shadow border border-blue-700" />
        </div>
      )}
      
      {/* Action bubble */}
      {action && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[9px] px-1.5 py-0.5 bg-black/60 rounded text-amber-400">
            {action}
          </span>
        </div>
      )}
    </div>
  )
}

// Helper functions
function parseBoardCards(actionText) {
  // Look for patterns like "Flop: K♥ 7♣ 2♦" or "Board: Q♥ 8♠ 3♣ 4♦ 7♠"
  const boardMatch = actionText.match(/(?:Flop|Board|Turn|River):\s*([^.(]+)/i)
  if (boardMatch) {
    const cardsStr = boardMatch[1].trim()
    // Split by spaces and filter valid cards
    return cardsStr.split(/\s+/).filter(c => c.match(/[AKQJT2-9]/))
  }
  return []
}

function parsePotSize(actionText) {
  const potMatch = actionText.match(/Pot:\s*\$?(\d+)/i)
  if (potMatch) {
    return `$${potMatch[1]}`
  }
  return '$0'
}

function parsePosition(positionStr) {
  const pos = positionStr.toLowerCase()
  if (pos.includes('utg') || pos.includes('under the gun')) return 'early'
  if (pos.includes('mp') || pos.includes('middle')) return 'middle'
  if (pos.includes('co') || pos.includes('cutoff')) return 'late'
  if (pos.includes('btn') || pos.includes('button')) return 'button'
  if (pos.includes('sb') || pos.includes('small blind')) return 'sb'
  if (pos.includes('bb') || pos.includes('big blind')) return 'bb'
  return 'unknown'
}

function parseActions(actionText) {
  // Extract action descriptions
  const actions = []
  
  // Common patterns
  const patterns = [
    /UTG\s+(raises?|bets?|calls?|checks?|folds?)\s*(?:to\s*)?\$?(\d+)?/gi,
    /MP\s+(raises?|bets?|calls?|checks?|folds?)\s*(?:to\s*)?\$?(\d+)?/gi,
    /CO\s+(raises?|bets?|calls?|checks?|folds?)\s*(?:to\s*)?\$?(\d+)?/gi,
    /(?:BTN|Button)\s+(raises?|bets?|calls?|checks?|folds?|3-bets?)\s*(?:to\s*)?\$?(\d+)?/gi,
    /SB\s+(raises?|bets?|calls?|checks?|folds?)\s*(?:to\s*)?\$?(\d+)?/gi,
    /BB\s+(raises?|bets?|calls?|checks?|folds?)\s*(?:to\s*)?\$?(\d+)?/gi,
    /Villain\s+(raises?|bets?|calls?|checks?|folds?)\s*(?:to\s*)?\$?(\d+)?/gi,
  ]
  
  patterns.forEach(pattern => {
    let match
    while ((match = pattern.exec(actionText)) !== null) {
      actions.push({
        position: match[0].split(' ')[0].toLowerCase(),
        action: match[1],
        amount: match[2] || null
      })
    }
  })
  
  return actions
}

function getActionForPosition(pos, actions) {
  const action = actions.find(a => {
    const aPos = a.position.toLowerCase()
    if (pos === 'button' && (aPos === 'btn' || aPos === 'button')) return true
    if (pos === aPos) return true
    return false
  })
  
  if (action) {
    return action.amount ? `${action.action} $${action.amount}` : action.action
  }
  return null
}

function isRedSuit(card) {
  return card.includes('♥') || card.includes('♦') || card.includes('h') || card.includes('d')
}
