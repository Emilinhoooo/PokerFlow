import { CheckCircle, XCircle, AlertCircle, TrendingUp, TrendingDown, ArrowRight, Lightbulb } from 'lucide-react'
import { playerTypes } from '../data/puzzles'

export default function FeedbackPanel({ 
  selectedOption, 
  bestOption,
  eloChange, 
  onNext,
  playerType
}) {
  const isCorrect = selectedOption.quality === 'best'
  const isGood = selectedOption.quality === 'good'
  
  const getHeaderContent = () => {
    if (isCorrect) {
      return {
        icon: CheckCircle,
        title: 'Excellent!',
        subtitle: 'You found the optimal play',
        bgClass: 'bg-green-500/20 border-green-500/30',
        iconClass: 'text-green-400'
      }
    }
    
    if (isGood) {
      return {
        icon: AlertCircle,
        title: 'Good, but not optimal',
        subtitle: 'There was a better line available',
        bgClass: 'bg-amber-500/20 border-amber-500/30',
        iconClass: 'text-amber-400'
      }
    }
    
    return {
      icon: XCircle,
      title: 'Not quite',
      subtitle: 'Let\'s review the better play',
      bgClass: 'bg-red-500/20 border-red-500/30',
      iconClass: 'text-red-400'
    }
  }
  
  const header = getHeaderContent()
  const Icon = header.icon
  const playerTypeInfo = playerType ? playerTypes[playerType] : null

  return (
    <div className="card-container animate-slide-up space-y-4">
      {/* Result header */}
      <div className={`flex items-center gap-4 p-4 rounded-lg border ${header.bgClass}`}>
        <Icon className={`w-10 h-10 ${header.iconClass}`} />
        <div>
          <h3 className="font-display text-2xl text-white">{header.title}</h3>
          <p className="text-gray-400">{header.subtitle}</p>
        </div>
      </div>

      {/* ELO change */}
      <div className={`flex items-center justify-center gap-2 py-3 rounded-lg ${
        eloChange >= 0 ? 'bg-green-500/10' : 'bg-red-500/10'
      }`}>
        {eloChange >= 0 ? (
          <TrendingUp className="w-5 h-5 text-green-400" />
        ) : (
          <TrendingDown className="w-5 h-5 text-red-400" />
        )}
        <span className={`font-mono text-xl font-bold ${
          eloChange >= 0 ? 'text-green-400' : 'text-red-400'
        }`}>
          {eloChange >= 0 ? '+' : ''}{eloChange} ELO
        </span>
      </div>

      {/* Your answer explanation */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Your Answer: {selectedOption.text}
        </h4>
        <p className="text-white leading-relaxed">{selectedOption.explanation}</p>
      </div>

      {/* Best answer (if different) */}
      {!isCorrect && bestOption && (
        <div className="space-y-2 pt-4 border-t border-white/10">
          <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Optimal Play: {bestOption.text}
          </h4>
          <p className="text-white leading-relaxed">{bestOption.explanation}</p>
        </div>
      )}

      {/* Player Type Tip */}
      {playerTypeInfo && (
        <div className="p-3 bg-amber-400/10 border border-amber-400/30 rounded-lg">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                vs {playerTypeInfo.icon} {playerTypeInfo.name}
              </span>
              <p className="text-sm text-white mt-1">{playerTypeInfo.strategy}</p>
            </div>
          </div>
        </div>
      )}

      {/* Next puzzle button */}
      <button
        onClick={onNext}
        className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
      >
        <span>Next Puzzle</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
