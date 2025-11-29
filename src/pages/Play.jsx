import { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Trophy, Loader2, Settings, AlertCircle } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import PuzzleCard from '../components/PuzzleCard'
import OptionButton from '../components/OptionButton'
import FeedbackPanel from '../components/FeedbackPanel'
import { getNextPuzzle } from '../data/puzzles'
import { calculateEloChange } from '../lib/elo'

// Default settings if none saved
const defaultSettings = {
  gameType: 'cash',
  stakes: 'all',
  tournamentStage: 'all',
  streets: ['all'],
  positions: ['all'],
  playerTypes: ['all'],
  scenarioTypes: ['all']
}

export default function Play() {
  const navigate = useNavigate()
  const { profile, recordPuzzleResult, loading } = useAuth()
  
  const [puzzle, setPuzzle] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [eloChange, setEloChange] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [currentElo, setCurrentElo] = useState(null)
  const [settings, setSettings] = useState(defaultSettings)
  const [noMatchingPuzzles, setNoMatchingPuzzles] = useState(false)
  
  const initializedRef = useRef(false)

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('pokerflow_settings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
  }, [])

  // Load initial puzzle only once
  useEffect(() => {
    if (profile && !initializedRef.current) {
      initializedRef.current = true
      loadNextPuzzle()
    }
  }, [profile])

  const loadNextPuzzle = () => {
    const solvedIds = profile?.solved_puzzle_ids || []
    const nextPuzzle = getNextPuzzle(profile?.elo || 1200, solvedIds, settings)
    
    if (!nextPuzzle) {
      setNoMatchingPuzzles(true)
      setPuzzle(null)
    } else {
      setNoMatchingPuzzles(false)
      setPuzzle(nextPuzzle)
    }
    
    setSelectedOption(null)
    setRevealed(false)
    setEloChange(0)
    setCurrentElo(profile?.elo || 1200)
  }

  const handleSelectOption = async (option) => {
    if (revealed || submitting) return
    
    setSelectedOption(option)
    setSubmitting(true)
    
    const isCorrect = option.quality === 'best'
    const puzzlesSolved = profile?.puzzles_solved || 0
    const change = calculateEloChange(
      profile?.elo || 1200,
      puzzle.elo,
      isCorrect,
      option.quality,
      puzzlesSolved
    )
    
    setEloChange(change)
    await recordPuzzleResult(puzzle.id, change, isCorrect)
    
    setRevealed(true)
    setSubmitting(false)
  }

  const handleNext = () => {
    loadNextPuzzle()
  }

  // Get active filter summary
  const getActiveFilters = () => {
    const filters = []
    
    if (!settings.streets.includes('all')) {
      filters.push(...settings.streets.map(s => s.charAt(0).toUpperCase() + s.slice(1)))
    }
    if (!settings.positions.includes('all')) {
      filters.push(...settings.positions.map(p => p.toUpperCase()))
    }
    if (!settings.playerTypes.includes('all')) {
      const typeLabels = {
        fish: '🐟 Fish',
        calling_station: '📞 Station',
        maniac: '🔥 Maniac',
        nit: '🐢 Nit',
        weak_tight: '😰 Weak-Tight',
        tag: '💼 TAG',
        lag: '⚡ LAG',
        solid_reg: '🎯 Reg',
        unknown: '❓ Unknown'
      }
      filters.push(...settings.playerTypes.map(t => typeLabels[t] || t))
    }
    
    return filters
  }

  const activeFilters = getActiveFilters()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-amber-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // No matching puzzles state
  if (noMatchingPuzzles) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="font-display text-2xl text-white mb-2">No Puzzles Found</h2>
          <p className="text-gray-400 mb-6">
            No puzzles match your current filters. Try broadening your selection.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/settings"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Settings className="w-5 h-5" />
              Change Filters
            </Link>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!puzzle) {
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
    <div className="min-h-screen pb-4 md:pt-4">
      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
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

        {/* Active Filters Banner */}
        {activeFilters.length > 0 && (
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-500">🎯 Practicing:</span>
            {activeFilters.slice(0, 3).map((filter, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400">
                {filter}
              </span>
            ))}
            {activeFilters.length > 3 && (
              <span className="text-xs text-gray-500">+{activeFilters.length - 3} more</span>
            )}
            <Link to="/settings" className="text-xs text-gray-500 hover:text-amber-400 ml-auto">
              Change
            </Link>
          </div>
        )}

        {/* Puzzle scenario */}
        <PuzzleCard puzzle={puzzle} />

        {/* Options or Feedback */}
        <div className="mt-4">
          {!revealed ? (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
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
              playerType={puzzle.villainInfo?.type}
            />
          )}
        </div>
      </div>
    </div>
  )
}
