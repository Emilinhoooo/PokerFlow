// PokerFlow ELO System
// Chess-style rating with K-factor adjustment

// Rank tiers with titles and icons
export const rankTiers = [
  { min: 0, max: 799, title: 'New Player', icon: '🌱', color: 'text-gray-400' },
  { min: 800, max: 999, title: 'Learning', icon: '📚', color: 'text-gray-400' },
  { min: 1000, max: 1199, title: 'Beginner', icon: '🎯', color: 'text-green-400' },
  { min: 1200, max: 1399, title: 'Developing', icon: '📈', color: 'text-green-500' },
  { min: 1400, max: 1599, title: 'Intermediate', icon: '⚡', color: 'text-blue-400' },
  { min: 1600, max: 1799, title: 'Strong', icon: '💪', color: 'text-blue-500' },
  { min: 1800, max: 1999, title: 'Advanced', icon: '🔥', color: 'text-purple-400' },
  { min: 2000, max: 2199, title: 'Expert', icon: '💎', color: 'text-purple-500' },
  { min: 2200, max: 2499, title: 'Master', icon: '👑', color: 'text-amber-400' },
  { min: 2500, max: 2999, title: 'Elite', icon: '🏆', color: 'text-amber-500' },
  { min: 3000, max: Infinity, title: 'World Class', icon: '🌟', color: 'text-red-500' }
]

// Get rank info for a given ELO
export function getRankInfo(elo) {
  const tier = rankTiers.find(t => elo >= t.min && elo <= t.max)
  return tier || rankTiers[0]
}

// Get rank title (for backwards compatibility)
export function getRankTitle(elo) {
  return getRankInfo(elo).title
}

// Get K-factor based on puzzles solved and ELO
// Higher K = more volatile rating (for new players)
// Lower K = more stable rating (for established players)
export function getKFactor(puzzlesSolved, elo) {
  // New players (first 10 puzzles) - placement phase
  if (puzzlesSolved < 10) {
    return 48 // High variance for quick placement
  }
  
  // Developing players (10-50 puzzles)
  if (puzzlesSolved < 50) {
    return 32
  }
  
  // Established players (50+ puzzles)
  if (elo >= 2000) {
    return 12 // High ELO players change slowly
  }
  
  return 20 // Standard K-factor
}

// Calculate expected score based on ELO difference
// Uses standard chess formula
export function getExpectedScore(playerElo, puzzleElo) {
  const exponent = (puzzleElo - playerElo) / 400
  return 1 / (1 + Math.pow(10, exponent))
}

// Convert answer quality to actual score
export function getActualScore(quality) {
  switch (quality) {
    case 'best':
      return 1.0
    case 'good':
      return 0.7
    case 'bad':
      return 0.3
    case 'worst':
      return 0.0
    default:
      return 0.5
  }
}

// Main ELO calculation function
export function calculateEloChange(playerElo, puzzleElo, isCorrect, quality, puzzlesSolved = 50) {
  const K = getKFactor(puzzlesSolved, playerElo)
  const expected = getExpectedScore(playerElo, puzzleElo)
  const actual = getActualScore(quality)
  
  // Calculate raw change
  let change = Math.round(K * (actual - expected))
  
  // Apply minimum/maximum bounds
  // Prevent tiny changes that feel unrewarding
  if (actual >= 0.7 && change < 3) {
    change = 3 // Minimum gain for good/best answers
  }
  
  // Prevent massive swings
  if (change > 50) change = 50
  if (change < -40) change = -40
  
  return change
}

// Calculate new ELO with floor
export function getNewElo(currentElo, change) {
  const newElo = currentElo + change
  return Math.max(100, newElo) // Floor at 100
}

// Get percentile estimate based on ELO
export function getPercentile(elo) {
  if (elo >= 3000) return 99.9
  if (elo >= 2500) return 99
  if (elo >= 2200) return 95
  if (elo >= 2000) return 90
  if (elo >= 1800) return 80
  if (elo >= 1600) return 65
  if (elo >= 1400) return 50
  if (elo >= 1200) return 35
  if (elo >= 1000) return 25
  if (elo >= 800) return 10
  return 5
}

// Get color class based on ELO tier
export function getEloColor(elo) {
  const rank = getRankInfo(elo)
  return rank.color
}

// Get difficulty label based on puzzle ELO
export function getDifficultyLabel(elo) {
  if (elo < 1000) return 'Beginner'
  if (elo < 1200) return 'Beginner'
  if (elo < 1400) return 'Intermediate'
  if (elo < 1600) return 'Intermediate'
  if (elo < 1800) return 'Advanced'
  if (elo < 2000) return 'Advanced'
  return 'Expert'
}

// Legacy export for backwards compatibility
export default {
  calculateEloChange,
  getRankTitle,
  getRankInfo,
  getKFactor,
  getExpectedScore,
  getPercentile,
  getEloColor,
  getDifficultyLabel,
  rankTiers
}
