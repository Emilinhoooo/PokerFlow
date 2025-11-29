import { Check, X, Star } from 'lucide-react'

export default function OptionButton({ 
  option, 
  index, 
  selected, 
  revealed, 
  onSelect,
  disabled 
}) {
  const letters = ['A', 'B', 'C', 'D']
  const letter = letters[index]
  
  const getStateClass = () => {
    if (!revealed) {
      return selected ? 'selected' : ''
    }
    
    if (option.quality === 'best') {
      return 'best'
    }
    
    if (selected) {
      return option.quality === 'best' || option.quality === 'good' 
        ? 'correct' 
        : 'incorrect'
    }
    
    return ''
  }
  
  const getIcon = () => {
    if (!revealed) return null
    
    if (option.quality === 'best') {
      return <Star className="w-5 h-5 text-green-400 fill-green-400" />
    }
    
    if (selected) {
      if (option.quality === 'good') {
        return <Check className="w-5 h-5 text-amber-400" />
      }
      return <X className="w-5 h-5 text-red-400" />
    }
    
    return null
  }

  return (
    <button
      className={`option-btn ${getStateClass()}`}
      onClick={() => onSelect(option)}
      disabled={disabled || revealed}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <span className={`option-letter ${selected ? 'bg-amber-400/30' : ''}`}>
        {letter}
      </span>
      <span className="flex-1">{option.text}</span>
      {getIcon()}
    </button>
  )
}
