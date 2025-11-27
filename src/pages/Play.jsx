import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Trophy, Loader2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import PuzzleCard from '../components/PuzzleCard'
import OptionButton from '../components/OptionButton'
import FeedbackPanel from '../components/FeedbackPanel'
import { getNextPuzzle } from '../data/puzzles'
import { calculateEloChange } from '../lib/elo'

export default function Play() {
  const navigate = useNavigate()
  const { profile, recordPuzzleResult, loading } = useAuth()
  
  const [puzzle, setPuzzle] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [eloChange, setEloChange] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [currentElo, setCurrentElo] = useState(null) // Track ELO at puzzle start
  
  const initializedRef = useRef(false)

  // Load initial puzzle only once
  useEffect(() => {
    if (profile && !initializedRef.current) {
      initializedRef.current = true
      loadNextPuzzle()
    }
  }, [profile])

  const loadNextPuzzle = () => {
    const solvedIds = profile?.solved_puzzle_ids || []
    const nextPuzzle = getNextPuzzle(profile?.elo || 1200, solvedIds)
    setPuzzle(nextPuzzle)
    setSelectedOption(null)
    setRevealed(false)
    setEloChange(0)
    setCurrentElo(profile?.elo || 1200) // Capture ELO at start of puzzle
  }

  const handleSelectOption = async (option) => {
    if (revealed || submitting) return
    
    setSelectedOption(option)
    setSubmitting(true)
    
    // Calculate ELO change
    const isCorrect = option.quality === 'best'
    const change = calculateEloChange(
      profile?.elo || 1200,
      puzzle.elo,
      isCorrect,
      option.quality
    )
    
    setEloChange(change)
    
    // Record result
    await recordPuzzleResult(puzzle.id, change, isCorrect)
    
    setRevealed(true)
    setSubmitting(false)
  }

  const handleNext = () => {
    loadNextPuzzle()
  }

  if (loading || !puzzle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-amber-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading puzzle...</p>
        </div>
      </div>
    )
  }

  const bestOption = puzzle.options.find(o => o.quality === 'best')

  return (
    <div className="min-h-screen pb-24 md:pt-20">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </button>
          
          <div className="elo-display">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-mono font-bold">{currentElo || profile?.elo || 1200}</span>
            {eloChange !== 0 && revealed && (
              <span className={`ml-1 font-mono ${eloChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
                ({eloChange > 0 ? '+' : ''}{eloChange})
              </span>
            )}
          </div>
          
          <div className="text-sm text-gray-500">
            #{profile?.puzzles_solved + 1 || 1}
          </div>
        </div>

        {/* Puzzle scenario */}
        <PuzzleCard puzzle={puzzle} />

        {/* Options or Feedback */}
        <div className="mt-6">
          {!revealed ? (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                What's your play?
              </h3>
              {puzzle.options.map((option, index) => (
                <OptionButton
                  key={option.id}
                  option={option}
                  index={index}
                  selected={selectedOption?.id === option.id}
                  revealed={revealed}
                  onSelect={handleSelectOption}
                  disabled={submitting}
                />
              ))}
              
              {submitting && (
                <div className="flex items-center justify-center gap-2 py-4 text-gray-400">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Calculating...</span>
                </div>
              )}
            </div>
          ) : (
            <FeedbackPanel
              selectedOption={selectedOption}
              bestOption={bestOption}
              eloChange={eloChange}
              onNext={handleNext}
            />
          )}
        </div>
      </div>
    </div>
  )
}
