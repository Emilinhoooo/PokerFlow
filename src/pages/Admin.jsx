import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Plus, Save, Trash2, Copy, CheckCircle } from 'lucide-react'

export default function Admin() {
  const navigate = useNavigate()
  const [puzzle, setPuzzle] = useState({
    id: Date.now(),
    title: '',
    difficulty: 'beginner',
    elo: 1100,
    scenario: {
      position: '',
      stackSize: '100 BB',
      blinds: '$1/$2',
      action: '',
      hand: '',
      context: ''
    },
    options: [
      { id: 'A', text: '', quality: 'best', explanation: '' },
      { id: 'B', text: '', quality: 'good', explanation: '' },
      { id: 'C', text: '', quality: 'bad', explanation: '' },
      { id: 'D', text: '', quality: 'worst', explanation: '' }
    ],
    tags: []
  })
  const [generatedJSON, setGeneratedJSON] = useState('')
  const [copied, setCopied] = useState(false)

  const handleScenarioChange = (field, value) => {
    setPuzzle({
      ...puzzle,
      scenario: { ...puzzle.scenario, [field]: value }
    })
  }

  const handleOptionChange = (index, field, value) => {
    const newOptions = [...puzzle.options]
    newOptions[index] = { ...newOptions[index], [field]: value }
    setPuzzle({ ...puzzle, options: newOptions })
  }

  const generateJSON = () => {
    const json = JSON.stringify(puzzle, null, 2)
    setGeneratedJSON(json)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedJSON)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const resetForm = () => {
    setPuzzle({
      id: Date.now(),
      title: '',
      difficulty: 'beginner',
      elo: 1100,
      scenario: {
        position: '',
        stackSize: '100 BB',
        blinds: '$1/$2',
        action: '',
        hand: '',
        context: ''
      },
      options: [
        { id: 'A', text: '', quality: 'best', explanation: '' },
        { id: 'B', text: '', quality: 'good', explanation: '' },
        { id: 'C', text: '', quality: 'bad', explanation: '' },
        { id: 'D', text: '', quality: 'worst', explanation: '' }
      ],
      tags: []
    })
    setGeneratedJSON('')
  }

  return (
    <div className="min-h-screen pb-24 md:pt-20">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>
          <h1 className="font-display text-2xl tracking-wider text-white">Admin - Add Puzzle</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Form */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="card-container space-y-4">
              <h2 className="font-display text-lg tracking-wider text-amber-400">Basic Info</h2>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Title</label>
                <input
                  type="text"
                  value={puzzle.title}
                  onChange={(e) => setPuzzle({ ...puzzle, title: e.target.value })}
                  placeholder="e.g., Opening Range - UTG"
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Difficulty</label>
                  <select
                    value={puzzle.difficulty}
                    onChange={(e) => setPuzzle({ ...puzzle, difficulty: e.target.value })}
                    className="input-field"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">ELO</label>
                  <input
                    type="number"
                    value={puzzle.elo}
                    onChange={(e) => setPuzzle({ ...puzzle, elo: parseInt(e.target.value) })}
                    className="input-field"
                    min={800}
                    max={2000}
                  />
                </div>
              </div>
            </div>

            {/* Scenario */}
            <div className="card-container space-y-4">
              <h2 className="font-display text-lg tracking-wider text-amber-400">Scenario</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Position</label>
                  <input
                    type="text"
                    value={puzzle.scenario.position}
                    onChange={(e) => handleScenarioChange('position', e.target.value)}
                    placeholder="e.g., UTG, Button, BB"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Stack Size</label>
                  <input
                    type="text"
                    value={puzzle.scenario.stackSize}
                    onChange={(e) => handleScenarioChange('stackSize', e.target.value)}
                    placeholder="e.g., 100 BB"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Blinds</label>
                  <input
                    type="text"
                    value={puzzle.scenario.blinds}
                    onChange={(e) => handleScenarioChange('blinds', e.target.value)}
                    placeholder="e.g., $1/$2"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Hand</label>
                  <input
                    type="text"
                    value={puzzle.scenario.hand}
                    onChange={(e) => handleScenarioChange('hand', e.target.value)}
                    placeholder="e.g., A♠ K♦"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Action/Situation</label>
                <textarea
                  value={puzzle.scenario.action}
                  onChange={(e) => handleScenarioChange('action', e.target.value)}
                  placeholder="Describe the game state and action..."
                  className="input-field min-h-[80px]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Context (Optional)</label>
                <textarea
                  value={puzzle.scenario.context}
                  onChange={(e) => handleScenarioChange('context', e.target.value)}
                  placeholder="Additional context about opponents, reads, etc."
                  className="input-field min-h-[60px]"
                />
              </div>
            </div>

            {/* Options */}
            <div className="card-container space-y-4">
              <h2 className="font-display text-lg tracking-wider text-amber-400">Answer Options</h2>
              
              {puzzle.options.map((option, index) => (
                <div key={option.id} className="p-4 bg-black/20 rounded-lg space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold">
                      {option.id}
                    </span>
                    <select
                      value={option.quality}
                      onChange={(e) => handleOptionChange(index, 'quality', e.target.value)}
                      className="input-field w-auto"
                    >
                      <option value="best">Best</option>
                      <option value="good">Good</option>
                      <option value="bad">Bad</option>
                      <option value="worst">Worst</option>
                    </select>
                  </div>
                  
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) => handleOptionChange(index, 'text', e.target.value)}
                    placeholder="Option text (e.g., 'Raise to 2.5 BB')"
                    className="input-field"
                  />
                  
                  <textarea
                    value={option.explanation}
                    onChange={(e) => handleOptionChange(index, 'explanation', e.target.value)}
                    placeholder="Explanation for this choice..."
                    className="input-field min-h-[60px]"
                  />
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={generateJSON}
                className="btn-primary flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Generate JSON
              </button>
              <button
                onClick={resetForm}
                className="btn-secondary flex items-center gap-2"
              >
                <Trash2 className="w-5 h-5" />
                Reset
              </button>
            </div>
          </div>

          {/* JSON Output */}
          <div className="card-container">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg tracking-wider text-amber-400">JSON Output</h2>
              {generatedJSON && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>
            
            {generatedJSON ? (
              <pre className="bg-black/30 rounded-lg p-4 overflow-x-auto text-sm font-mono text-gray-300 max-h-[600px] overflow-y-auto">
                {generatedJSON}
              </pre>
            ) : (
              <div className="bg-black/30 rounded-lg p-8 text-center text-gray-500">
                <p>Fill out the form and click "Generate JSON" to see the puzzle data.</p>
                <p className="text-sm mt-2">Copy the JSON and add it to src/data/puzzles.js</p>
              </div>
            )}

            {generatedJSON && (
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 text-sm">
                  <strong>To add this puzzle:</strong> Copy the JSON above and add it to the puzzles array in 
                  <code className="ml-1 px-1 py-0.5 bg-black/30 rounded">src/data/puzzles.js</code>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
