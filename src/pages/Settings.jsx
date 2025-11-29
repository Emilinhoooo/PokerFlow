import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Save, RotateCcw, Check } from 'lucide-react'

// Default settings
const defaultSettings = {
  gameType: 'cash',
  stakes: 'all',
  tournamentStage: 'all',
  streets: ['all'],
  positions: ['all'],
  playerTypes: ['all'],
  scenarioTypes: ['all']
}

// Options for each filter
const stakesOptions = [
  { value: 'all', label: 'All Stakes' },
  { value: 'micro', label: 'Micro ($0.25/$0.50)' },
  { value: 'small', label: 'Small ($1/$2, $1/$3)' },
  { value: 'mid', label: 'Mid ($2/$5)' },
  { value: 'high', label: 'High ($5/$10)' },
  { value: 'nosebleed', label: 'Nosebleed ($10/$25+)' }
]

const tournamentStageOptions = [
  { value: 'all', label: 'All Stages' },
  { value: 'early', label: 'Early (100BB+)' },
  { value: 'middle', label: 'Middle (30-50BB)' },
  { value: 'late', label: 'Late (15-30BB)' },
  { value: 'final_table', label: 'Final Table (10-20BB)' },
  { value: 'short_stack', label: 'Short Stack (<10BB)' }
]

const streetOptions = [
  { value: 'all', label: 'All Streets', icon: '🎯' },
  { value: 'preflop', label: 'Preflop', icon: '🃏' },
  { value: 'flop', label: 'Flop', icon: '3️⃣' },
  { value: 'turn', label: 'Turn', icon: '4️⃣' },
  { value: 'river', label: 'River', icon: '5️⃣' },
  { value: 'multi_street', label: 'Multi-street', icon: '🔄' }
]

const positionOptions = [
  { value: 'all', label: 'All Positions', icon: '🎯' },
  { value: 'early', label: 'Early Position (UTG, UTG+1)', icon: '1️⃣' },
  { value: 'middle', label: 'Middle Position (MP, LJ)', icon: '2️⃣' },
  { value: 'late', label: 'Late Position (HJ, CO)', icon: '3️⃣' },
  { value: 'button', label: 'Button', icon: '🔘' },
  { value: 'sb', label: 'Small Blind', icon: '🅢' },
  { value: 'bb', label: 'Big Blind', icon: '🅑' }
]

const playerTypeOptions = [
  { value: 'all', label: 'All Player Types', icon: '🎯', description: 'Practice against all opponent types' },
  { value: 'fish', label: 'Fish', icon: '🐟', description: 'Recreational, fundamental mistakes' },
  { value: 'calling_station', label: 'Calling Station', icon: '📞', description: 'Loose-passive, calls too much' },
  { value: 'maniac', label: 'Maniac', icon: '🔥', description: 'Extremely loose-aggressive, chaotic' },
  { value: 'nit', label: 'Nit', icon: '🐢', description: 'Ultra-tight, only premiums' },
  { value: 'weak_tight', label: 'Weak-Tight', icon: '😰', description: 'Tight but scared money' },
  { value: 'tag', label: 'TAG', icon: '💼', description: 'Tight-aggressive, solid fundamentals' },
  { value: 'lag', label: 'LAG', icon: '⚡', description: 'Loose-aggressive with logic' },
  { value: 'solid_reg', label: 'Solid Reg', icon: '🎯', description: 'Balanced, competent player' },
  { value: 'unknown', label: 'Unknown', icon: '❓', description: 'No read available' }
]

const scenarioTypeOptions = [
  { value: 'all', label: 'All Scenarios', icon: '🎯' },
  { value: 'opening', label: 'Opening Action', icon: '🚀' },
  { value: 'facing_raise', label: 'Facing Raise', icon: '⬆️' },
  { value: 'facing_3bet', label: 'Facing 3-Bet', icon: '🔺' },
  { value: 'facing_allin', label: 'Facing All-In', icon: '💰' },
  { value: 'multiway', label: 'Multiway Pots', icon: '👥' },
  { value: 'headsup', label: 'Heads-Up', icon: '🆚' }
]

export default function Settings() {
  const navigate = useNavigate()
  const [settings, setSettings] = useState(defaultSettings)
  const [saved, setSaved] = useState(false)

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('pokerflow_settings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
  }, [])

  const handleGameTypeChange = (type) => {
    setSettings({ ...settings, gameType: type })
  }

  const handleStakesChange = (value) => {
    setSettings({ ...settings, stakes: value })
  }

  const handleTournamentStageChange = (value) => {
    setSettings({ ...settings, tournamentStage: value })
  }

  const toggleMultiSelect = (category, value) => {
    setSettings(prev => {
      const current = prev[category]
      
      // If clicking "all", reset to just "all"
      if (value === 'all') {
        return { ...prev, [category]: ['all'] }
      }
      
      // Remove "all" if it's there and we're selecting something specific
      let updated = current.filter(v => v !== 'all')
      
      // Toggle the value
      if (updated.includes(value)) {
        updated = updated.filter(v => v !== value)
      } else {
        updated = [...updated, value]
      }
      
      // If nothing selected, default back to "all"
      if (updated.length === 0) {
        updated = ['all']
      }
      
      return { ...prev, [category]: updated }
    })
  }

  const saveSettings = () => {
    localStorage.setItem('pokerflow_settings', JSON.stringify(settings))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
    localStorage.setItem('pokerflow_settings', JSON.stringify(defaultSettings))
  }

  const isSelected = (category, value) => {
    return settings[category].includes(value)
  }

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </button>
            <h1 className="font-display text-2xl tracking-wider text-white">Settings</h1>
          </div>
          <button
            onClick={resetSettings}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        {/* Game Type */}
        <section className="card-container mb-6">
          <h2 className="font-display text-lg tracking-wider text-amber-400 mb-4">Game Type</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleGameTypeChange('cash')}
              className={`p-4 rounded-lg border-2 transition-all ${
                settings.gameType === 'cash'
                  ? 'border-amber-400 bg-amber-400/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <span className="text-2xl mb-2 block">💵</span>
              <span className="font-semibold text-white">Cash Game</span>
            </button>
            <button
              onClick={() => handleGameTypeChange('tournament')}
              className={`p-4 rounded-lg border-2 transition-all ${
                settings.gameType === 'tournament'
                  ? 'border-amber-400 bg-amber-400/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <span className="text-2xl mb-2 block">🏆</span>
              <span className="font-semibold text-white">Tournament</span>
            </button>
          </div>
        </section>

        {/* Stakes / Tournament Stage */}
        <section className="card-container mb-6">
          <h2 className="font-display text-lg tracking-wider text-amber-400 mb-4">
            {settings.gameType === 'cash' ? 'Stakes' : 'Tournament Stage'}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {(settings.gameType === 'cash' ? stakesOptions : tournamentStageOptions).map(option => (
              <button
                key={option.value}
                onClick={() => settings.gameType === 'cash' 
                  ? handleStakesChange(option.value)
                  : handleTournamentStageChange(option.value)
                }
                className={`p-3 rounded-lg border transition-all text-left ${
                  (settings.gameType === 'cash' ? settings.stakes : settings.tournamentStage) === option.value
                    ? 'border-amber-400 bg-amber-400/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-sm text-white">{option.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Street Filter */}
        <section className="card-container mb-6">
          <h2 className="font-display text-lg tracking-wider text-amber-400 mb-2">Street</h2>
          <p className="text-gray-500 text-sm mb-4">Select which streets to practice</p>
          <div className="grid grid-cols-2 gap-2">
            {streetOptions.map(option => (
              <button
                key={option.value}
                onClick={() => toggleMultiSelect('streets', option.value)}
                className={`p-3 rounded-lg border transition-all text-left flex items-center gap-3 ${
                  isSelected('streets', option.value)
                    ? 'border-amber-400 bg-amber-400/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-lg">{option.icon}</span>
                <span className="text-sm text-white">{option.label}</span>
                {isSelected('streets', option.value) && (
                  <Check className="w-4 h-4 text-amber-400 ml-auto" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Position Filter */}
        <section className="card-container mb-6">
          <h2 className="font-display text-lg tracking-wider text-amber-400 mb-2">Position</h2>
          <p className="text-gray-500 text-sm mb-4">Select which positions to practice</p>
          <div className="grid grid-cols-2 gap-2">
            {positionOptions.map(option => (
              <button
                key={option.value}
                onClick={() => toggleMultiSelect('positions', option.value)}
                className={`p-3 rounded-lg border transition-all text-left flex items-center gap-3 ${
                  isSelected('positions', option.value)
                    ? 'border-amber-400 bg-amber-400/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-lg">{option.icon}</span>
                <span className="text-sm text-white">{option.label}</span>
                {isSelected('positions', option.value) && (
                  <Check className="w-4 h-4 text-amber-400 ml-auto" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Player Type Filter */}
        <section className="card-container mb-6">
          <h2 className="font-display text-lg tracking-wider text-amber-400 mb-2">Opponent Type</h2>
          <p className="text-gray-500 text-sm mb-4">Practice against specific player types</p>
          <div className="space-y-2">
            {playerTypeOptions.map(option => (
              <button
                key={option.value}
                onClick={() => toggleMultiSelect('playerTypes', option.value)}
                className={`w-full p-3 rounded-lg border transition-all text-left flex items-center gap-3 ${
                  isSelected('playerTypes', option.value)
                    ? 'border-amber-400 bg-amber-400/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-xl">{option.icon}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-white block">{option.label}</span>
                  <span className="text-xs text-gray-500 truncate block">{option.description}</span>
                </div>
                {isSelected('playerTypes', option.value) && (
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Scenario Type Filter */}
        <section className="card-container mb-6">
          <h2 className="font-display text-lg tracking-wider text-amber-400 mb-2">Scenario Type</h2>
          <p className="text-gray-500 text-sm mb-4">Filter by specific situations</p>
          <div className="grid grid-cols-2 gap-2">
            {scenarioTypeOptions.map(option => (
              <button
                key={option.value}
                onClick={() => toggleMultiSelect('scenarioTypes', option.value)}
                className={`p-3 rounded-lg border transition-all text-left flex items-center gap-3 ${
                  isSelected('scenarioTypes', option.value)
                    ? 'border-amber-400 bg-amber-400/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-lg">{option.icon}</span>
                <span className="text-sm text-white">{option.label}</span>
                {isSelected('scenarioTypes', option.value) && (
                  <Check className="w-4 h-4 text-amber-400 ml-auto" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Save Button */}
        <button
          onClick={saveSettings}
          className={`btn-primary w-full flex items-center justify-center gap-2 ${
            saved ? 'bg-green-500' : ''
          }`}
        >
          {saved ? (
            <>
              <Check className="w-5 h-5" />
              <span>Saved!</span>
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              <span>Save Settings</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
