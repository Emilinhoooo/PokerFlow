// ELO calculation utilities for PokerFlow

/**
 * Calculate expected score based on ELO difference
 * @param {number} playerElo - Player's current ELO
 * @param {number} puzzleElo - Puzzle's difficulty ELO
 * @returns {number} Expected score (0-1)
 */
export function expectedScore(playerElo, puzzleElo) {
  return 1 / (1 + Math.pow(10, (puzzleElo - playerElo) / 400))
}

/**
 * Calculate ELO change based on result
 * @param {number} playerElo - Player's current ELO
 * @param {number} puzzleElo - Puzzle's difficulty ELO
 * @param {boolean} correct - Whether the answer was correct (best option)
 * @param {string} quality - Answer quality: 'best', 'good', 'bad', 'worst'
 * @returns {number} ELO change (can be positive or negative)
 */
export function calculateEloChange(playerElo, puzzleElo, correct, quality = 'best') {
  const K = 32 // K-factor (how much ELO can change per puzzle)
  const expected = expectedScore(playerElo, puzzleElo)
  
  // Score multipliers based on answer quality
  const scoreMultipliers = {
    best: 1.0,    // Full credit
    good: 0.6,    // Partial credit
    bad: 0.2,     // Small penalty
    worst: 0.0    // Full penalty
  }
  
  const actualScore = scoreMultipliers[quality] || 0
  const change = Math.round(K * (actualScore - expected))
  
  // Clamp the change to reasonable bounds
  const minChange = quality === 'best' ? 5 : -15
  const maxChange = quality === 'best' ? 20 : -3
  
  if (quality === 'best' || quality === 'good') {
    return Math.max(minChange, Math.min(maxChange, change > 0 ? change : 8))
  } else {
    return Math.max(-12, Math.min(-5, change < 0 ? change : -6))
  }
}

/**
 * Get difficulty label based on ELO
 * @param {number} elo - Puzzle ELO
 * @returns {string} Difficulty label
 */
export function getDifficultyLabel(elo) {
  if (elo < 1100) return 'Beginner'
  if (elo < 1300) return 'Intermediate'
  if (elo < 1500) return 'Advanced'
  return 'Expert'
}

/**
 * Get color class based on ELO tier
 * @param {number} elo - ELO rating
 * @returns {string} Tailwind color class
 */
export function getEloColor(elo) {
  if (elo < 1000) return 'text-gray-400'
  if (elo < 1200) return 'text-green-400'
  if (elo < 1400) return 'text-blue-400'
  if (elo < 1600) return 'text-purple-400'
  if (elo < 1800) return 'text-amber-400'
  return 'text-red-400'
}

/**
 * Get rank title based on ELO
 * @param {number} elo - ELO rating
 * @returns {string} Rank title
 */
export function getRankTitle(elo) {
  if (elo < 1000) return 'Fish'
  if (elo < 1100) return 'Novice'
  if (elo < 1200) return 'Amateur'
  if (elo < 1300) return 'Regular'
  if (elo < 1400) return 'Skilled'
  if (elo < 1500) return 'Veteran'
  if (elo < 1600) return 'Expert'
  if (elo < 1700) return 'Master'
  if (elo < 1800) return 'Grandmaster'
  return 'Poker Legend'
}
