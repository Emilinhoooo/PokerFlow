// PlayingCard component for displaying cards in poker scenarios

const suitSymbols = {
  '♠': { symbol: '♠', color: 'text-gray-900', name: 'spades' },
  '♥': { symbol: '♥', color: 'text-red-600', name: 'hearts' },
  '♦': { symbol: '♦', color: 'text-red-600', name: 'diamonds' },
  '♣': { symbol: '♣', color: 'text-gray-900', name: 'clubs' },
  's': { symbol: '♠', color: 'text-gray-900', name: 'spades' },
  'h': { symbol: '♥', color: 'text-red-600', name: 'hearts' },
  'd': { symbol: '♦', color: 'text-red-600', name: 'diamonds' },
  'c': { symbol: '♣', color: 'text-gray-900', name: 'clubs' },
}

export function parseCard(cardStr) {
  // Handle formats like "A♠", "Kh", "10♦"
  const match = cardStr.match(/^(\d{1,2}|[AKQJT])([♠♥♦♣shdc])$/i)
  if (!match) return null
  
  let rank = match[1].toUpperCase()
  if (rank === '10') rank = 'T'
  
  const suitKey = match[2].toLowerCase()
  const suit = suitSymbols[suitKey] || suitSymbols[match[2]]
  
  return { rank, suit }
}

export function PlayingCard({ card, size = 'md' }) {
  const parsed = typeof card === 'string' ? parseCard(card) : card
  
  if (!parsed) {
    return (
      <div className={`playing-card ${getSizeClass(size)} bg-gray-700 text-gray-500`}>
        ?
      </div>
    )
  }
  
  const { rank, suit } = parsed
  
  return (
    <div className={`playing-card ${getSizeClass(size)} ${suit.color}`}>
      <span className="flex flex-col items-center leading-none">
        <span className="font-bold">{rank}</span>
        <span className="text-xs">{suit.symbol}</span>
      </span>
    </div>
  )
}

function getSizeClass(size) {
  switch (size) {
    case 'sm':
      return 'w-8 h-11 text-sm'
    case 'lg':
      return 'w-12 h-16 text-lg'
    case 'xl':
      return 'w-14 h-20 text-xl'
    default:
      return 'w-10 h-14 text-base'
  }
}

// Component to display a hand (multiple cards)
export function Hand({ cards, size = 'md' }) {
  // Parse hand string like "A♠ K♦" or "AKs"
  const cardStrings = cards.split(/\s+/).filter(Boolean)
  
  return (
    <div className="flex gap-1.5">
      {cardStrings.map((card, i) => (
        <PlayingCard key={i} card={card} size={size} />
      ))}
    </div>
  )
}

export default PlayingCard
