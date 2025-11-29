// PokerFlow Puzzle Database v2
// 100 puzzles with comprehensive categorization

// Player type definitions with strategies
export const playerTypes = {
  fish: {
    id: 'fish',
    name: 'Fish',
    icon: '🐟',
    description: 'Recreational player. Makes fundamental mistakes. Plays random hands. Unpredictable decisions.',
    strategy: 'Be patient. Value bet heavily. Avoid fancy plays. Never bluff them.'
  },
  calling_station: {
    id: 'calling_station',
    name: 'Calling Station',
    icon: '📞',
    description: 'Loose-passive. Calls too much. Rarely folds. Doesn\'t bluff.',
    strategy: 'Never bluff. Value bet thin. Bet bigger with strong hands. They pay you off.'
  },
  maniac: {
    id: 'maniac',
    name: 'Maniac',
    icon: '🔥',
    description: 'Extremely loose-aggressive. Chaotic. Constant aggression with wide range.',
    strategy: 'Wait for strong hands. Let them hang themselves. Call down lighter. Don\'t try to bluff.'
  },
  nit: {
    id: 'nit',
    name: 'Nit',
    icon: '🐢',
    description: 'Ultra-tight. Only plays premium hands. Very predictable. Folds easily.',
    strategy: 'Steal their blinds relentlessly. Fold when they show aggression. Never pay them off.'
  },
  weak_tight: {
    id: 'weak_tight',
    name: 'Weak-Tight',
    icon: '😰',
    description: 'Tight range but scared money. Folds to pressure. Passive postflop.',
    strategy: 'Apply pressure constantly. Steal pots. They\'ll fold too much. Barrel scare cards.'
  },
  tag: {
    id: 'tag',
    name: 'TAG',
    icon: '💼',
    description: 'Tight-Aggressive. Solid fundamentals. Plays premium hands aggressively.',
    strategy: 'Respect their aggression. Don\'t pay off big bets. Find spots to exploit their tightness.'
  },
  lag: {
    id: 'lag',
    name: 'LAG',
    icon: '⚡',
    description: 'Loose-Aggressive. Wide range but thoughtful. Can have air or monsters.',
    strategy: 'Tread carefully. They can have anything. Call down lighter sometimes. Don\'t over-fold.'
  },
  solid_reg: {
    id: 'solid_reg',
    name: 'Solid Reg',
    icon: '🎯',
    description: 'Balanced, competent player. Thinks in ranges. Hard to exploit.',
    strategy: 'Play solid fundamentals. Avoid fancy plays. Look for small edges. Don\'t try to outplay them.'
  },
  unknown: {
    id: 'unknown',
    name: 'Unknown',
    icon: '❓',
    description: 'No read available yet. Play default strategy.',
    strategy: 'Observe and adjust. Use position. Play fundamentally sound. Gather information.'
  }
}

// Concept explanations for learning
export const concepts = {
  hand_selection: 'Choosing which hands to play based on position, stack depth, and opponents.',
  bet_sizing: 'Selecting optimal bet sizes for value and bluffs based on board texture and ranges.',
  value_betting: 'Betting to get called by worse hands. Maximizing profit from strong holdings.',
  bluffing: 'Betting to make better hands fold. Using fold equity to win pots.',
  pot_control: 'Managing pot size with medium-strength hands to avoid bloating pots you might lose.',
  implied_odds: 'Calling with drawing hands when you can win big if you hit.',
  fold_equity: 'The additional equity you gain from the chance opponents will fold.',
  range_reading: 'Analyzing what hands your opponent could have based on their actions.',
  exploitation: 'Adjusting your strategy to take advantage of specific opponent tendencies.',
  position: 'Using your seat at the table to make better decisions with more information.',
  aggression: 'Taking initiative through betting and raising rather than checking and calling.',
  pot_odds: 'Comparing the size of a call to the potential reward to determine profitability.'
}

export const puzzles = [
  // ============================================
  // BEGINNER PUZZLES (ELO 800-1200)
  // ============================================
  
  // Puzzle 1: Basic Premium Hand
  {
    id: 1,
    title: "Premium in Position",
    difficulty: "beginner",
    elo: 900,
    street: "preflop",
    position: "button",
    villainPosition: null,
    playerType: "unknown",
    scenarioType: "opening",
    gameType: "cash",
    stakes: "small",
    concept: "hand_selection",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Folded to you on the button.",
      hand: "A♠ K♠",
      context: "Standard $1/$2 game. You have the best position with a premium hand."
    },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding AKs on the button? This is one of the best hands in poker in the best position. Never fold here." },
      { id: "B", text: "Limp $2", quality: "bad", explanation: "Limping shows weakness and builds a small pot with a premium hand. You want to raise for value and take initiative." },
      { id: "C", text: "Raise to $5", quality: "best", explanation: "Perfect! Raise to 2.5BB with this premium hand. You build the pot, take initiative, and can win the blinds or play a raised pot in position." },
      { id: "D", text: "Raise to $10", quality: "good", explanation: "Raising is correct but 5BB is too large. You'll only get called by hands that do well against you. Smaller sizing keeps their calling range wider." }
    ],
    tags: ["preflop", "opening", "premium", "position"]
  },

  // Puzzle 2: Basic Fold
  {
    id: 2,
    title: "Trash from Early Position",
    difficulty: "beginner",
    elo: 850,
    street: "preflop",
    position: "early",
    villainPosition: null,
    playerType: "unknown",
    scenarioType: "opening",
    gameType: "cash",
    stakes: "small",
    concept: "hand_selection",
    scenario: {
      position: "UTG (Under the Gun)",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You are first to act.",
      hand: "9♣ 4♦",
      context: "6-max cash game. You're in the worst position with a weak hand."
    },
    options: [
      { id: "A", text: "Fold", quality: "best", explanation: "Correct! 94o is trash. From UTG you need strong hands because 5 players act after you. Fold and wait for a better spot." },
      { id: "B", text: "Limp $2", quality: "worst", explanation: "Limping weak hands from early position is a huge leak. You're out of position with a bad hand - recipe for losing money." },
      { id: "C", text: "Raise to $6", quality: "bad", explanation: "Raising garbage from UTG is burning money. Even if you steal the blinds sometimes, you'll lose more when called." },
      { id: "D", text: "Raise to $4", quality: "bad", explanation: "Smaller raise doesn't make this playable. The hand is too weak regardless of sizing. Position + hand strength matter." }
    ],
    tags: ["preflop", "opening", "fold", "position"]
  },

  // Puzzle 3: C-bet on Dry Board
  {
    id: 3,
    title: "C-Bet on Dry Flop",
    difficulty: "beginner",
    elo: 950,
    street: "flop",
    position: "button",
    villainPosition: "bb",
    playerType: "unknown",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "aggression",
    scenario: {
      position: "Button",
      stackSize: "98 BB",
      blinds: "$1/$2",
      action: "You raised preflop, BB called. Flop: K♦ 7♠ 2♣ (Pot: $13). BB checks.",
      hand: "A♥ Q♥",
      context: "Dry, disconnected flop. You have two overcards and position."
    },
    villainInfo: { type: "unknown", description: "No reads yet" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "Checking gives up the initiative and misses value from worse hands. On dry boards, you should c-bet frequently." },
      { id: "B", text: "Bet $4 (30% pot)", quality: "best", explanation: "Perfect! Small c-bet on a dry board applies pressure cheaply. You have equity if called and can win immediately. This sizing works great on static boards." },
      { id: "C", text: "Bet $10 (75% pot)", quality: "good", explanation: "Betting is right but too large on a dry board. Smaller sizing accomplishes the same goal for less risk." },
      { id: "D", text: "Bet $13 (pot)", quality: "bad", explanation: "Pot-sized overbets with AQ high commits too many chips. Save large bets for value hands or wet boards." }
    ],
    tags: ["postflop", "c-bet", "dry-board", "position"]
  },

  // Puzzle 4: Obvious Value Bet
  {
    id: 4,
    title: "Value Bet the Nuts",
    difficulty: "beginner",
    elo: 900,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "fish",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "value_betting",
    scenario: {
      position: "Button",
      stackSize: "120 BB",
      blinds: "$1/$2",
      action: "Board: A♠ K♣ 7♥ 3♦ 2♠ (Pot: $45). You bet flop and turn, Fish called both. River checks to you.",
      hand: "A♣ A♦",
      context: "You have top set on a dry board. The fish has called twice."
    },
    villainInfo: { type: "fish", description: "Recreational player who calls too much" },
    options: [
      { id: "A", text: "Check back", quality: "worst", explanation: "Checking the nuts against a fish who calls too much? You're leaving money on the table. Always value bet!" },
      { id: "B", text: "Bet $15 (33% pot)", quality: "bad", explanation: "Betting is right but way too small against a fish. They'll call bigger sizes with weak hands. Extract maximum value." },
      { id: "C", text: "Bet $35 (75% pot)", quality: "best", explanation: "Excellent! Big value bet against a fish who calls light. They'll pay off with any ace, any pair, sometimes even king-high. Get paid!" },
      { id: "D", text: "Bet $45 (pot)", quality: "good", explanation: "Pot-sized works too but might be slightly too large. 75% pot balances value extraction with getting called." }
    ],
    tags: ["postflop", "value-betting", "nuts", "fish"]
  },

  // Puzzle 5: Simple Fold to Aggression
  {
    id: 5,
    title: "Fold to Nit's Raise",
    difficulty: "beginner",
    elo: 1000,
    street: "flop",
    position: "middle",
    villainPosition: "early",
    playerType: "nit",
    scenarioType: "facing_raise",
    gameType: "cash",
    stakes: "small",
    concept: "fold_equity",
    scenario: {
      position: "MP",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "Nit UTG raised to $8. You called. Flop: J♠ 8♦ 4♣ (Pot: $19). Nit bets $15, you call. Turn: 2♥ (Pot: $49). Nit bets $40.",
      hand: "T♠ T♣",
      context: "The tightest player at the table is betting big on two streets. You have an underpair to the board."
    },
    villainInfo: { type: "nit", description: "Ultra-tight, only plays premium hands" },
    options: [
      { id: "A", text: "Fold", quality: "best", explanation: "Correct! A nit betting big twice almost always has you crushed - JJ, QQ, KK, AA, or AJ. Your tens are way behind. Save your chips." },
      { id: "B", text: "Call $40", quality: "bad", explanation: "Calling hopes to hit a ten, but you're drawing to 2 outs against a nit's range. Horrible pot odds and reverse implied odds." },
      { id: "C", text: "Raise to $100", quality: "worst", explanation: "Raising turns your hand into a bluff against a nit who never folds overpairs. You'll only get called when crushed." },
      { id: "D", text: "Call and evaluate river", quality: "bad", explanation: "There's no river card that makes TT good here. You're just burning money hoping for a miracle." }
    ],
    tags: ["postflop", "fold", "nit", "overpair"]
  },

  // Puzzle 6: Basic 3-Bet Value
  {
    id: 6,
    title: "3-Bet Your Kings",
    difficulty: "beginner",
    elo: 950,
    street: "preflop",
    position: "button",
    villainPosition: "middle",
    playerType: "unknown",
    scenarioType: "facing_raise",
    gameType: "cash",
    stakes: "small",
    concept: "aggression",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "MP raises to $6. Folded to you on the button.",
      hand: "K♠ K♥",
      context: "You have the second-best starting hand and position against an open."
    },
    villainInfo: { type: "unknown", description: "Standard player, no specific reads" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding kings preflop is never correct unless someone is all-in with aces showing. This is absurd." },
      { id: "B", text: "Call $6", quality: "bad", explanation: "Flat calling with KK is a major leak. You let blinds in cheaply, don't build the pot, and play a guessing game postflop. 3-bet for value!" },
      { id: "C", text: "3-bet to $20", quality: "best", explanation: "Perfect! 3-betting builds the pot with a premium hand, isolates the opener, and takes initiative. This is standard play with KK." },
      { id: "D", text: "3-bet to $35", quality: "good", explanation: "3-betting is correct but this size is too large. It folds out too many hands you beat and only gets action from hands that worry you." }
    ],
    tags: ["preflop", "3-bet", "premium", "value"]
  },

  // Puzzle 7: Don't Bluff the Calling Station
  {
    id: 7,
    title: "No Bluffing Here",
    difficulty: "beginner",
    elo: 1050,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "calling_station",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "exploitation",
    scenario: {
      position: "Button",
      stackSize: "85 BB",
      blinds: "$1/$2",
      action: "Board: Q♠ J♦ 7♣ 4♥ 2♦ (Pot: $38). You c-bet flop with a flush draw, Station called. You barreled turn, Station called. Your draw missed. Station checks river.",
      hand: "A♦ 8♦",
      context: "Your flush draw bricked. Villain is a known calling station who never folds."
    },
    villainInfo: { type: "calling_station", description: "Calls with anything, rarely folds" },
    options: [
      { id: "A", text: "Check back (give up)", quality: "best", explanation: "Correct! Never bluff a calling station. They'll call with any pair, any draw, sometimes ace-high. Your ace-high might even win at showdown!" },
      { id: "B", text: "Bet $15 (small bluff)", quality: "bad", explanation: "Even small bluffs are unprofitable against someone who never folds. Save your chips." },
      { id: "C", text: "Bet $30 (75% pot bluff)", quality: "worst", explanation: "Large bluffs against calling stations are lighting money on fire. They WILL call." },
      { id: "D", text: "Bet $38 (pot bluff)", quality: "worst", explanation: "This is suicide. Pot-sized bluff into someone who calls everything? They'll snap call with jack-high." }
    ],
    tags: ["postflop", "bluffing", "calling-station", "exploitation"]
  },

  // Puzzle 8: Set Mining
  {
    id: 8,
    title: "Set Mine Deep",
    difficulty: "beginner",
    elo: 1000,
    street: "preflop",
    position: "late",
    villainPosition: "early",
    playerType: "nit",
    scenarioType: "facing_raise",
    gameType: "cash",
    stakes: "small",
    concept: "implied_odds",
    scenario: {
      position: "Cutoff",
      stackSize: "150 BB",
      blinds: "$1/$2",
      action: "Nit UTG raises to $8. Folded to you.",
      hand: "4♠ 4♥",
      context: "Deep stacks against a tight player. You have a small pocket pair."
    },
    villainInfo: { type: "nit", description: "Only raises premium hands" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "With 150BB deep, folding 44 passes on profitable implied odds. When you hit a set, you can stack the nit's overpairs." },
      { id: "B", text: "Call $8", quality: "best", explanation: "Perfect set mining spot! You're 150BB deep with great implied odds. When you flop a set (~12% of the time), you can win a huge pot against the nit's overpairs." },
      { id: "C", text: "3-bet to $24", quality: "worst", explanation: "3-betting small pairs against a nit is terrible. They only continue with hands that crush you (QQ+, AK)." },
      { id: "D", text: "Raise all-in", quality: "worst", explanation: "Shoving 150BB with 44 is madness. You're either flipping against AK or crushed by bigger pairs." }
    ],
    tags: ["preflop", "calling", "set-mining", "implied-odds"]
  },

  // Puzzle 9: Basic Protection Bet
  {
    id: 9,
    title: "Protect Your Hand",
    difficulty: "beginner",
    elo: 1100,
    street: "flop",
    position: "early",
    villainPosition: "button",
    playerType: "fish",
    scenarioType: "multiway",
    gameType: "cash",
    stakes: "small",
    concept: "aggression",
    scenario: {
      position: "UTG",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised preflop, Button and BB called. Flop: T♣ 8♥ 6♠ (Pot: $19). BB checks to you.",
      hand: "Q♠ Q♦",
      context: "Coordinated board with two opponents. You have an overpair but it's vulnerable."
    },
    villainInfo: { type: "fish", description: "Fish on button, unknown in BB" },
    options: [
      { id: "A", text: "Check", quality: "bad", explanation: "Checking gives free cards on a draw-heavy board. J, 9, 7, and any heart/spade could hurt you. Bet to protect!" },
      { id: "B", text: "Bet $8 (40% pot)", quality: "good", explanation: "Betting is right but too small multiway. Draws have good odds to call. Go larger to deny equity." },
      { id: "C", text: "Bet $14 (75% pot)", quality: "best", explanation: "Excellent! Protect your overpair with a solid bet. This prices out draws and builds value against worse made hands. Deny their equity!" },
      { id: "D", text: "Bet $19 (pot)", quality: "good", explanation: "Pot-sized works but 75% accomplishes the same thing more efficiently. Both are acceptable protection bets." }
    ],
    tags: ["postflop", "protection", "overpair", "multiway"]
  },

  // Puzzle 10: Basic Position Concept
  {
    id: 10,
    title: "Button Steal",
    difficulty: "beginner",
    elo: 1050,
    street: "preflop",
    position: "button",
    villainPosition: null,
    playerType: "weak_tight",
    scenarioType: "opening",
    gameType: "cash",
    stakes: "small",
    concept: "position",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Folded to you on the button. Both blinds are weak-tight players.",
      hand: "K♦ 7♠",
      context: "Perfect steal spot. Weak-tight blinds fold too much."
    },
    villainInfo: { type: "weak_tight", description: "Tight but folds to pressure" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding K7o on the button against weak-tight blinds misses a very profitable steal opportunity." },
      { id: "B", text: "Limp $2", quality: "worst", explanation: "Limping the button is weak. Raise to attack the tight blinds who will over-fold." },
      { id: "C", text: "Raise to $5", quality: "best", explanation: "Perfect! Steal the blinds with a small raise. Weak-tight players fold way too much. Even if called, you have position." },
      { id: "D", text: "Raise to $8", quality: "good", explanation: "Raising is correct but 4BB is larger than needed. 2.5BB accomplishes the same steal more efficiently." }
    ],
    tags: ["preflop", "stealing", "position", "exploitation"]
  },

  // ============================================
  // MORE BEGINNER & INTERMEDIATE PUZZLES
  // ============================================

  // Puzzle 11: Float and Stab
  {
    id: 11,
    title: "Float the C-Bet",
    difficulty: "intermediate",
    elo: 1250,
    street: "flop",
    position: "button",
    villainPosition: "middle",
    playerType: "tag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "position",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "TAG MP raises to $6, you call. Flop: K♥ 9♣ 4♦ (Pot: $15). TAG bets $8.",
      hand: "A♠ T♠",
      context: "Dry board, you have backdoor nut flush draw and a gutshot. TAG c-bets frequently."
    },
    villainInfo: { type: "tag", description: "C-bets around 70% of flops" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding AT on the button with backdoor equity and position vs a frequent c-bettor is too tight." },
      { id: "B", text: "Call $8 (float)", quality: "best", explanation: "Excellent float! You have backdoor equity, overcards, and position. Many turns will check through or give you more equity. Plan to bet if checked to on good turns." },
      { id: "C", text: "Raise to $24", quality: "good", explanation: "Raising can work as a semi-bluff but flatting is cleaner. You have good equity to realize in position." },
      { id: "D", text: "Raise to $40", quality: "bad", explanation: "Too large and too aggressive with just a gutshot and backdoors. Keep the pot small with your drawing hand." }
    ],
    tags: ["postflop", "floating", "position", "draws"]
  },

  // Puzzle 12: Squeeze Play
  {
    id: 12,
    title: "Squeeze Opportunity",
    difficulty: "intermediate",
    elo: 1300,
    street: "preflop",
    position: "sb",
    villainPosition: "middle",
    playerType: "fish",
    scenarioType: "facing_raise",
    gameType: "cash",
    stakes: "small",
    concept: "fold_equity",
    scenario: {
      position: "Small Blind",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "TAG MP raises to $6. Fish on Button calls. Folded to you in SB.",
      hand: "A♥ Q♥",
      context: "Strong hand with squeeze opportunity. Original raiser has a cold-caller behind."
    },
    villainInfo: { type: "fish", description: "Fish flatted on button, TAG opened" },
    villains: [
      { type: "tag", position: "MP" },
      { type: "fish", position: "BTN" }
    ],
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding AQs in any spot is criminal. This is a premium hand - play it!" },
      { id: "B", text: "Call $5", quality: "bad", explanation: "Calling invites the BB and plays a multiway pot out of position. AQs wants fewer opponents." },
      { id: "C", text: "3-bet to $24", quality: "best", explanation: "Perfect squeeze! Put pressure on the TAG and isolate the fish. AQs plays great heads-up. The cold-caller's range is capped - they'll often fold." },
      { id: "D", text: "3-bet to $16", quality: "good", explanation: "Squeezing is correct but $16 is too small with a cold-caller. Go larger to generate more fold equity." }
    ],
    tags: ["preflop", "3-bet", "squeeze", "isolation"]
  },

  // Puzzle 13: Thin Value vs Fish
  {
    id: 13,
    title: "Thin Value River",
    difficulty: "intermediate",
    elo: 1350,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "fish",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "value_betting",
    scenario: {
      position: "Button",
      stackSize: "90 BB",
      blinds: "$1/$2",
      action: "Board: K♠ 9♥ 5♣ 2♦ 7♠ (Pot: $42). You bet flop, Fish called. You checked back turn. Fish checks river.",
      hand: "K♦ J♦",
      context: "Top pair decent kicker. Fish called flop and checked twice."
    },
    villainInfo: { type: "fish", description: "Calls light, makes random plays" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "Fish call with worse hands constantly! KJ is ahead of their wide range. Value bet!" },
      { id: "B", text: "Bet $14 (33% pot)", quality: "best", explanation: "Perfect thin value! Small sizing gets called by worse kings, nines, random pairs, and even ace-high from a fish. Don't leave money on the table." },
      { id: "C", text: "Bet $32 (75% pot)", quality: "good", explanation: "Larger sizing can work but might fold out some of the weaker hands that would call a smaller bet." },
      { id: "D", text: "Bet $42 (pot)", quality: "bad", explanation: "Too large for thin value. This size only gets called by hands that beat you or are very close." }
    ],
    tags: ["postflop", "thin-value", "river", "fish"]
  },

  // Puzzle 14: Pot Control with Medium Hand
  {
    id: 14,
    title: "Control the Pot",
    difficulty: "intermediate",
    elo: 1250,
    street: "turn",
    position: "early",
    villainPosition: "button",
    playerType: "lag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "pot_control",
    scenario: {
      position: "UTG",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "You raised preflop, LAG Button called. Flop: Q♥ 8♣ 3♦ (Pot: $13). You bet $8, LAG called. Turn: 6♠ (Pot: $29). What now?",
      hand: "T♠ T♦",
      context: "You have second pair against an aggressive opponent in position."
    },
    villainInfo: { type: "lag", description: "Aggressive, applies pressure" },
    options: [
      { id: "A", text: "Check", quality: "best", explanation: "Correct! TT is a medium-strength hand on this board. Checking controls the pot and avoids a difficult spot if LAG raises. Let them bluff or showdown cheaply." },
      { id: "B", text: "Bet $12 (40% pot)", quality: "bad", explanation: "Betting again bloats the pot with a vulnerable hand. If LAG raises, you're in trouble. Pot control is key here." },
      { id: "C", text: "Bet $22 (75% pot)", quality: "bad", explanation: "Large bet with second pair against a LAG who can have many better hands? This builds a pot you don't want." },
      { id: "D", text: "Check-raise if bet", quality: "worst", explanation: "Check-raising TT as a bluff is suicidal. You have showdown value - don't turn it into a bluff." }
    ],
    tags: ["postflop", "pot-control", "medium-hand", "lag"]
  },

  // Puzzle 15: River Bluff vs TAG
  {
    id: 15,
    title: "Turn Missed Draw into Bluff",
    difficulty: "intermediate",
    elo: 1400,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "tag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "bluffing",
    scenario: {
      position: "Button",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "Board: A♥ T♥ 6♣ 2♦ 9♠ (Pot: $55). You c-bet flop with flush draw, TAG called. Turn checked through. River: TAG checks.",
      hand: "K♥ J♥",
      context: "Your flush draw missed. You have no showdown value but TAG's range is capped."
    },
    villainInfo: { type: "tag", description: "Solid player who can fold one pair" },
    options: [
      { id: "A", text: "Check back (give up)", quality: "good", explanation: "Giving up is acceptable. You have no showdown value, but TAG might have strong hands too." },
      { id: "B", text: "Bet $20 (36% pot)", quality: "bad", explanation: "Small bluff looks weak and doesn't pressure TAG's one-pair hands enough to fold." },
      { id: "C", text: "Bet $42 (75% pot)", quality: "best", explanation: "This is a good bluffing spot! TAG checked flop and turn, capping their range. A confident river bet represents the missed draws you could have or a slow-played strong hand. TAGs can fold medium pairs here." },
      { id: "D", text: "Bet $55 (pot)", quality: "good", explanation: "Pot-sized works but is slightly more than needed. 70-80% pot accomplishes the same fold equity more efficiently." }
    ],
    tags: ["postflop", "bluffing", "river", "tag"]
  },

  // Puzzle 16: Call Down vs Maniac
  {
    id: 16,
    title: "Trust Your Hand vs Maniac",
    difficulty: "intermediate",
    elo: 1350,
    street: "river",
    position: "bb",
    villainPosition: "button",
    playerType: "maniac",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "exploitation",
    scenario: {
      position: "Big Blind",
      stackSize: "80 BB",
      blinds: "$1/$2",
      action: "Maniac Button raised, you called. Board: J♣ 8♦ 4♠ 2♥ 5♣ (Pot: $85). Maniac bet every street, river bet is $60.",
      hand: "J♥ T♥",
      context: "Maniac has been aggressive all hand. You have top pair."
    },
    villainInfo: { type: "maniac", description: "Bets and raises constantly, often with air" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding top pair to a maniac's river bet? They're bluffing way too often. Don't let them run you over!" },
      { id: "B", text: "Call $60", quality: "best", explanation: "Correct! Maniacs bluff too much - that's what makes them maniacs. Top pair with decent kicker is easily good enough to call. Let them hang themselves." },
      { id: "C", text: "Raise to $150", quality: "bad", explanation: "Raising turns your hand into a bluff. If maniac has it this time, you lose more. Just call with your bluff-catcher." },
      { id: "D", text: "Raise all-in", quality: "worst", explanation: "Shoving as a 'value raise' only gets called by hands that beat you. Maniacs might call with better and fold their bluffs." }
    ],
    tags: ["postflop", "bluff-catching", "maniac", "exploitation"]
  },

  // Puzzle 17: Check-Raise Bluff
  {
    id: 17,
    title: "Check-Raise Semi-Bluff",
    difficulty: "intermediate",
    elo: 1400,
    street: "flop",
    position: "bb",
    villainPosition: "button",
    playerType: "tag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "aggression",
    scenario: {
      position: "Big Blind",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "TAG Button raised to $6, you called. Flop: T♥ 8♥ 3♣ (Pot: $13). You check, TAG bets $8.",
      hand: "J♥ 9♥",
      context: "You have a flush draw and open-ended straight draw (15 outs)."
    },
    villainInfo: { type: "tag", description: "Solid player who c-bets 70%+ of flops" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding 15 outs? You have a monster draw with ~54% equity. This is way too strong to fold." },
      { id: "B", text: "Call $8", quality: "good", explanation: "Calling is fine - you have great equity to chase. But check-raising is more profitable." },
      { id: "C", text: "Raise to $28", quality: "best", explanation: "Excellent check-raise! With 15 outs you're actually a favorite. You can win immediately if TAG folds, or have great equity if called. Maximum pressure!" },
      { id: "D", text: "Raise all-in", quality: "bad", explanation: "Shoving is too much. A smaller raise applies pressure while keeping options open. Over-shoving wastes fold equity." }
    ],
    tags: ["postflop", "check-raise", "semi-bluff", "draws"]
  },

  // Puzzle 18: 4-Bet Bluff Spot
  {
    id: 18,
    title: "4-Bet Light",
    difficulty: "advanced",
    elo: 1550,
    street: "preflop",
    position: "button",
    villainPosition: "late",
    playerType: "lag",
    scenarioType: "facing_3bet",
    gameType: "cash",
    stakes: "mid",
    concept: "aggression",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "You raised to $15, LAG Cutoff 3-bets to $50. Blinds fold.",
      hand: "A♠ 5♠",
      context: "LAG has been 3-betting you frequently. A5s has good blockers."
    },
    villainInfo: { type: "lag", description: "3-betting wide, aggressive" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding A5s to an aggressive 3-bettor is too tight. You have blocker equity and can fight back." },
      { id: "B", text: "Call $50", quality: "good", explanation: "Calling is fine - A5s has good postflop playability. But 4-betting exploits their wide 3-bet range." },
      { id: "C", text: "4-bet to $125", quality: "best", explanation: "Great 4-bet bluff! A5s blocks their strong aces (AA, AK), and LAG's wide 3-bet range has many folds. If called, you still have decent equity." },
      { id: "D", text: "4-bet all-in", quality: "bad", explanation: "Shoving is too much risk with A5s. A smaller 4-bet accomplishes your goal while risking less." }
    ],
    tags: ["preflop", "4-bet", "bluffing", "blockers"]
  },

  // Puzzle 19: Value 3-Bet vs Fish
  {
    id: 19,
    title: "Punish the Fish",
    difficulty: "beginner",
    elo: 1100,
    street: "preflop",
    position: "late",
    villainPosition: "early",
    playerType: "fish",
    scenarioType: "facing_raise",
    gameType: "cash",
    stakes: "small",
    concept: "value_betting",
    scenario: {
      position: "Cutoff",
      stackSize: "120 BB",
      blinds: "$1/$2",
      action: "Fish UTG raises to $10 (5x). Folded to you.",
      hand: "Q♠ Q♣",
      context: "Fish is raising oversized. You have a premium pair."
    },
    villainInfo: { type: "fish", description: "Raises too big, plays random hands" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding QQ because the fish raised big? That's exactly when you want to play - they're overvaluing weak hands!" },
      { id: "B", text: "Call $10", quality: "bad", explanation: "Just calling lets others in and doesn't punish the fish's bad sizing. Build the pot with your premium!" },
      { id: "C", text: "3-bet to $35", quality: "best", explanation: "Perfect! 3-bet for value against a fish who raises too big with bad hands. They'll call with worse pairs, broadway hands, and random stuff. Punish them!" },
      { id: "D", text: "3-bet all-in", quality: "bad", explanation: "Shoving folds out the hands you want action from. 3-bet normally to keep their range wide." }
    ],
    tags: ["preflop", "3-bet", "value", "fish"]
  },

  // Puzzle 20: Tournament Shove
  {
    id: 20,
    title: "Short Stack Shove",
    difficulty: "intermediate",
    elo: 1300,
    street: "preflop",
    position: "late",
    villainPosition: null,
    playerType: "unknown",
    scenarioType: "opening",
    gameType: "tournament",
    stakes: null,
    tournamentStage: "late",
    concept: "fold_equity",
    scenario: {
      position: "Cutoff",
      stackSize: "15 BB",
      blinds: "500/1000 + 100",
      action: "Folded to you with 15 BB.",
      hand: "K♦ T♣",
      context: "Late stage tournament. Your stack is getting short."
    },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "KTo is well within shoving range from the CO with 15BB. Folding is too tight and lets blinds eat you." },
      { id: "B", text: "Min-raise to 2000", quality: "worst", explanation: "Min-raising with 15BB creates a raise/fold situation. If 3-bet, you've lost 2BB for nothing. Either shove or fold." },
      { id: "C", text: "Raise to 3000", quality: "bad", explanation: "Same problem - you can't raise/fold with 15BB. Shoving is the correct play." },
      { id: "D", text: "All-in (15 BB)", quality: "best", explanation: "Correct! With 15BB from cutoff, KTo is a mandatory shove. You have fold equity plus a decent hand if called. This is standard tournament strategy." }
    ],
    tags: ["preflop", "tournament", "short-stack", "shoving"]
  },

  // Puzzle 21: Fold to 4-Bet
  {
    id: 21,
    title: "Don't Go Broke with Jacks",
    difficulty: "intermediate",
    elo: 1350,
    street: "preflop",
    position: "middle",
    villainPosition: "button",
    playerType: "nit",
    scenarioType: "facing_4bet",
    gameType: "cash",
    stakes: "small",
    concept: "hand_selection",
    scenario: {
      position: "MP",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised to $6, Nit Button 3-bets to $22. You 4-bet to $55. Nit shoves all-in for $200.",
      hand: "J♠ J♣",
      context: "Nit has shown extreme strength with the 5-bet shove."
    },
    villainInfo: { type: "nit", description: "Only plays premium hands, never bluffs" },
    options: [
      { id: "A", text: "Fold", quality: "best", explanation: "Painful but correct. A nit's 5-bet range is literally QQ+ and maybe AK. You're crushed by QQ/KK/AA and flipping vs AK at best. Save your stack." },
      { id: "B", text: "Call $145 more", quality: "bad", explanation: "Calling off 100BB against a nit's 5-bet with JJ is lighting money on fire. They have it." },
      { id: "C", text: "Tank then call", quality: "bad", explanation: "Taking time doesn't change the math. JJ is crushed by a nit's 5-bet range." },
      { id: "D", text: "Call for pot odds", quality: "bad", explanation: "Pot odds don't matter when you have 20% equity against their range. This is a clear fold." }
    ],
    tags: ["preflop", "4-bet", "fold", "nit"]
  },

  // Puzzle 22: Donk Bet Spot
  {
    id: 22,
    title: "Lead into Aggressor",
    difficulty: "advanced",
    elo: 1500,
    street: "turn",
    position: "bb",
    villainPosition: "button",
    playerType: "lag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "mid",
    concept: "aggression",
    scenario: {
      position: "Big Blind",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "LAG Button raised, you called. Flop: 7♣ 6♣ 2♦ (Pot: $25). You check, LAG checks behind. Turn: 5♣ (Pot: $25).",
      hand: "8♣ 4♣",
      context: "You just made a flush with the turn. LAG checked back flop showing weakness."
    },
    villainInfo: { type: "lag", description: "Aggressive but showed weakness by checking flop" },
    options: [
      { id: "A", text: "Check (trap)", quality: "good", explanation: "Trapping is fine since LAG might bet when checked to, but you risk losing value if they check again." },
      { id: "B", text: "Bet $12 (48% pot)", quality: "best", explanation: "Lead out for value! LAG's flop check capped their range, but they might have picked up equity (pair + draw). Get value now before scary river cards." },
      { id: "C", text: "Bet $20 (80% pot)", quality: "good", explanation: "Larger sizing is also fine but might fold out some hands that would call a smaller bet." },
      { id: "D", text: "Check-raise all-in", quality: "bad", explanation: "Check-raise shove is too aggressive. LAG might just check back again after their passive flop play." }
    ],
    tags: ["postflop", "donk-bet", "value", "turn"]
  },

  // Puzzle 23: River Overbet Bluff
  {
    id: 23,
    title: "Overbet Bluff River",
    difficulty: "advanced",
    elo: 1600,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "solid_reg",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "mid",
    concept: "bluffing",
    scenario: {
      position: "Button",
      stackSize: "150 BB",
      blinds: "$2/$5",
      action: "Board: K♠ Q♥ 8♣ 3♦ 4♠ (Pot: $85). You raised pre, c-bet flop, bet turn, Reg called both. River checks to you.",
      hand: "A♥ J♥",
      context: "You have ace-high. Reg's calling range is capped to one-pair hands mostly."
    },
    villainInfo: { type: "solid_reg", description: "Competent player with balanced range" },
    options: [
      { id: "A", text: "Check back (give up)", quality: "good", explanation: "Giving up is reasonable. Your ace-high has some showdown value and Reg might have a strong hand." },
      { id: "B", text: "Bet $40 (47% pot)", quality: "bad", explanation: "Small bet looks weak and doesn't pressure Reg's one-pair hands enough." },
      { id: "C", text: "Bet $65 (75% pot)", quality: "good", explanation: "Standard bluff sizing, but solid regs can call at this size with good pairs." },
      { id: "D", text: "Bet $120 (overbet)", quality: "best", explanation: "Overbet polarizes your range to the nuts or nothing. Reg's capped range (one pair) struggles to call overbets. This represents straights and sets perfectly." }
    ],
    tags: ["postflop", "bluffing", "overbet", "river"]
  },

  // Puzzle 24: Multiway Flop Play
  {
    id: 24,
    title: "Multiway Caution",
    difficulty: "intermediate",
    elo: 1300,
    street: "flop",
    position: "early",
    villainPosition: null,
    playerType: "unknown",
    scenarioType: "multiway",
    gameType: "cash",
    stakes: "small",
    concept: "pot_control",
    scenario: {
      position: "UTG",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised to $8, MP, Button, and BB all called. Flop: T♥ 9♥ 7♣ (Pot: $33). Checked to you.",
      hand: "A♠ A♦",
      context: "Extremely coordinated board with 3 opponents. Your aces are vulnerable."
    },
    options: [
      { id: "A", text: "Check", quality: "best", explanation: "Correct! On this wet board multiway, someone likely has a draw or made hand. Checking controls the pot with your vulnerable overpair. You can call one bet or bet later streets." },
      { id: "B", text: "Bet $16 (50% pot)", quality: "good", explanation: "Betting for protection isn't terrible, but multiway on a coordinated board, someone will often continue with equity against you." },
      { id: "C", text: "Bet $25 (75% pot)", quality: "bad", explanation: "Large bet multiway on this board builds a huge pot you might lose. Even if you have the best hand, you're giving opponents odds to draw." },
      { id: "D", text: "Bet $33 (pot)", quality: "bad", explanation: "Pot-sized bet is asking for trouble. This board smashes calling ranges - straights, two pairs, and flush draws are everywhere." }
    ],
    tags: ["postflop", "multiway", "wet-board", "pot-control"]
  },

  // Puzzle 25: ICM Spot
  {
    id: 25,
    title: "ICM Pressure",
    difficulty: "advanced",
    elo: 1550,
    street: "preflop",
    position: "button",
    villainPosition: "bb",
    playerType: "unknown",
    scenarioType: "opening",
    gameType: "tournament",
    stakes: null,
    tournamentStage: "final_table",
    concept: "fold_equity",
    scenario: {
      position: "Button",
      stackSize: "25 BB",
      blinds: "2000/4000 + 400",
      action: "Folded to you on button. BB has 12 BB. Final table of a $200 tournament, 6 players left.",
      hand: "9♦ 8♦",
      context: "Short-stacked BB will be under ICM pressure. Payouts increase significantly from here."
    },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "98s is plenty good enough to attack a short BB at the final table. Don't miss this spot." },
      { id: "B", text: "Min-raise to 8000", quality: "good", explanation: "Min-raising applies pressure while risking less. BB must risk tournament life to play back." },
      { id: "C", text: "Raise to 10000 (2.5x)", quality: "best", explanation: "Perfect sizing! You apply maximum ICM pressure on the short BB who must fold or risk busting. Even if called, 98s has decent equity." },
      { id: "D", text: "All-in (25 BB)", quality: "bad", explanation: "Shoving risks your whole stack unnecessarily. A normal raise accomplishes the same fold equity with less risk." }
    ],
    tags: ["preflop", "tournament", "ICM", "final-table"]
  },

  // Puzzle 26: Defend Big Blind
  {
    id: 26,
    title: "Big Blind Defense",
    difficulty: "beginner",
    elo: 1100,
    street: "preflop",
    position: "bb",
    villainPosition: "button",
    playerType: "tag",
    scenarioType: "facing_raise",
    gameType: "cash",
    stakes: "small",
    concept: "pot_odds",
    scenario: {
      position: "Big Blind",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Folded to TAG Button who raises to $5. SB folds.",
      hand: "K♦ 8♦",
      context: "Standard button open. You're getting good pot odds to defend."
    },
    villainInfo: { type: "tag", description: "Opens button with wide range" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding K8s to a button raise is too tight. You have 3:1 odds and a playable hand." },
      { id: "B", text: "Call $3", quality: "best", explanation: "Correct defense! K8s has good playability and you're getting great odds. Close the action and see a flop." },
      { id: "C", text: "3-bet to $16", quality: "good", explanation: "3-betting as a bluff can work, but K8s isn't the ideal hand - it plays better as a call." },
      { id: "D", text: "3-bet to $20", quality: "bad", explanation: "Too large for a bluff 3-bet and K8s doesn't want to bloat the pot out of position." }
    ],
    tags: ["preflop", "bb-defense", "pot-odds", "calling"]
  },

  // Puzzle 27: Value Bet Turn
  {
    id: 27,
    title: "Continue for Value",
    difficulty: "beginner",
    elo: 1050,
    street: "turn",
    position: "late",
    villainPosition: "bb",
    playerType: "calling_station",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "value_betting",
    scenario: {
      position: "Cutoff",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "You raised preflop, Station BB called. Flop: J♥ 6♣ 3♦ (Pot: $13). You bet $8, called. Turn: 2♠ (Pot: $29). Station checks.",
      hand: "A♣ J♣",
      context: "Top pair top kicker on a dry board vs a calling station."
    },
    villainInfo: { type: "calling_station", description: "Calls too much with weak hands" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "Checking lets the station see a free river when they'll call bets with any piece. Value bet!" },
      { id: "B", text: "Bet $14 (48% pot)", quality: "good", explanation: "Betting is right but you can go bigger vs a calling station. They'll pay you off." },
      { id: "C", text: "Bet $22 (75% pot)", quality: "best", explanation: "Perfect! Calling stations don't fold, so bet big for value. They'll call with worse jacks, sixes, pocket pairs, and random floats." },
      { id: "D", text: "Bet $29 (pot)", quality: "good", explanation: "Pot-sized is fine too - stations call anything. But 75% pot is slightly more efficient." }
    ],
    tags: ["postflop", "value-betting", "turn", "calling-station"]
  },

  // Puzzle 28: Blocker-Based Bluff
  {
    id: 28,
    title: "Block the Nuts",
    difficulty: "advanced",
    elo: 1550,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "solid_reg",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "mid",
    concept: "bluffing",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "Board: A♠ K♠ 7♦ 4♣ 2♠ (Pot: $120). You bet flop and turn, Reg called both. River completes flush. Reg checks.",
      hand: "Q♠ J♦",
      context: "You hold the Qs blocking the nut flush. Your QJ has no showdown value."
    },
    villainInfo: { type: "solid_reg", description: "Thinks at a high level, understands ranges" },
    options: [
      { id: "A", text: "Check back (give up)", quality: "bad", explanation: "You have zero showdown value and a key blocker. This is a prime bluffing spot." },
      { id: "B", text: "Bet $50 (42% pot)", quality: "bad", explanation: "Small bet doesn't represent the flush convincingly. If you're bluffing, bet big." },
      { id: "C", text: "Bet $95 (79% pot)", quality: "best", explanation: "Excellent! You block the nut flush with Q♠, so Reg can't have the nuts. Your large bet represents flushes credibly and puts maximum pressure on their one-pair hands." },
      { id: "D", text: "Bet $120 (pot)", quality: "good", explanation: "Pot-sized works too but is slightly more than necessary. 75-80% pot is more efficient." }
    ],
    tags: ["postflop", "bluffing", "blockers", "river"]
  },

  // Puzzle 29: Fold Equity Shove
  {
    id: 29,
    title: "Semi-Bluff All-In",
    difficulty: "intermediate",
    elo: 1400,
    street: "flop",
    position: "bb",
    villainPosition: "button",
    playerType: "weak_tight",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "fold_equity",
    scenario: {
      position: "Big Blind",
      stackSize: "45 BB",
      blinds: "$1/$2",
      action: "Weak-tight Button raised to $6, you called. Flop: J♦ T♦ 3♣ (Pot: $13). You check, Button bets $10.",
      hand: "A♦ 9♦",
      context: "Nut flush draw + gutshot (12 outs). Weak-tight opponent folds too much."
    },
    villainInfo: { type: "weak_tight", description: "Folds to aggression frequently" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding 12 outs with great fold equity? Never! This is a huge mistake." },
      { id: "B", text: "Call $10", quality: "good", explanation: "Calling is okay - you have great odds and implied odds. But raising is better vs weak-tight." },
      { id: "C", text: "Raise to $35", quality: "good", explanation: "Small raise applies pressure but doesn't maximize fold equity against a weak-tight player." },
      { id: "D", text: "All-in ($90)", quality: "best", explanation: "Perfect! Shove your monster draw vs a weak-tight player. They fold AK, AQ, underpairs, and even some Jx hands. When called, you still have ~45% equity." }
    ],
    tags: ["postflop", "semi-bluff", "all-in", "fold-equity"]
  },

  // Puzzle 30: River Value Sizing
  {
    id: 30,
    title: "River Sizing Decision",
    difficulty: "intermediate",
    elo: 1350,
    street: "river",
    position: "late",
    villainPosition: "early",
    playerType: "fish",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "bet_sizing",
    scenario: {
      position: "Cutoff",
      stackSize: "110 BB",
      blinds: "$1/$2",
      action: "Fish UTG raised, you called. Board: Q♠ J♦ 5♣ 2♥ 8♦ (Pot: $65). Fish bet flop, you called. Turn checked through. River: Fish checks.",
      hand: "Q♦ T♦",
      context: "Top pair decent kicker. Fish has checked river showing weakness."
    },
    villainInfo: { type: "fish", description: "Calls too much, doesn't fold often" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "Fish call light! Your top pair is ahead of their wide range. Value bet!" },
      { id: "B", text: "Bet $25 (38% pot)", quality: "good", explanation: "Good value bet sizing that gets called by a wide range of worse hands." },
      { id: "C", text: "Bet $45 (69% pot)", quality: "best", explanation: "Best sizing! Fish call too much, so go larger. They'll pay off with any queen, any jack, any pocket pair, and random hands." },
      { id: "D", text: "Bet $65 (pot)", quality: "good", explanation: "Pot-sized is acceptable vs fish but might lose some calls from the very bottom of their range." }
    ],
    tags: ["postflop", "value-betting", "bet-sizing", "fish"]
  },

  // Puzzle 31: Cooler Recognition
  {
    id: 31,
    title: "Recognize the Cooler",
    difficulty: "intermediate",
    elo: 1350,
    street: "river",
    position: "late",
    villainPosition: "early",
    playerType: "nit",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "hand_reading",
    scenario: {
      position: "Button",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "Nit UTG raised, you called. Board: K♠ K♦ 7♣ 3♥ 2♠ (Pot: $55). Nit bet flop, you called. Nit bet turn, you called. River: Nit bets $80.",
      hand: "K♥ Q♥",
      context: "You have trip kings with Q kicker. But the nit has shown massive strength three streets."
    },
    villainInfo: { type: "nit", description: "Only plays premiums, triple barrels only with monsters" },
    options: [
      { id: "A", text: "Fold", quality: "good", explanation: "This is a tough fold but reasonable. A nit triple-barreling into trip kings board often has KK, AA, or AK. Your KQ is behind that range." },
      { id: "B", text: "Call $80", quality: "best", explanation: "Close spot, but calling is correct. You beat K-worse like KJ, KT and the nit might have AK which you chop with. Folding trips is very tight." },
      { id: "C", text: "Raise to $180", quality: "bad", explanation: "Raising accomplishes nothing. Worse hands fold, better hands call. Just call and see the bad news or good news." },
      { id: "D", text: "Raise all-in", quality: "worst", explanation: "Shoving when a nit has shown maximum strength? You're only getting called by hands that beat you." }
    ],
    tags: ["postflop", "hand-reading", "cooler", "nit"]
  },

  // Puzzle 32: Probe Bet
  {
    id: 32,
    title: "Probe the Turn",
    difficulty: "intermediate",
    elo: 1300,
    street: "turn",
    position: "bb",
    villainPosition: "button",
    playerType: "tag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "aggression",
    scenario: {
      position: "Big Blind",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "TAG Button raised, you called. Flop: A♥ 8♣ 4♦ (Pot: $13). You check, TAG checks. Turn: 6♠ (Pot: $13).",
      hand: "9♠ 9♦",
      context: "TAG checked back flop, showing weakness. Your pair might be best."
    },
    villainInfo: { type: "tag", description: "Would bet strong hands on flop" },
    options: [
      { id: "A", text: "Check again", quality: "bad", explanation: "Checking gives TAG a free card and lets them realize equity. Their check indicates weakness - attack it!" },
      { id: "B", text: "Bet $6 (46% pot)", quality: "best", explanation: "Excellent probe bet! TAG's flop check capped their range to weak/missed hands. Take the pot now before they catch up." },
      { id: "C", text: "Bet $10 (77% pot)", quality: "good", explanation: "Betting is right but smaller sizing is more efficient when taking a stab after opponent shows weakness." },
      { id: "D", text: "Bet $13 (pot)", quality: "bad", explanation: "Too large for a probe. You're not trying to deny draws - you're taking advantage of their weakness. Bet smaller." }
    ],
    tags: ["postflop", "probe-bet", "turn", "aggression"]
  },

  // Puzzle 33: Double Barrel Bluff
  {
    id: 33,
    title: "Second Barrel Bluff",
    difficulty: "intermediate",
    elo: 1400,
    street: "turn",
    position: "button",
    villainPosition: "bb",
    playerType: "weak_tight",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "bluffing",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised, weak-tight BB called. Flop: K♣ 7♦ 3♠ (Pot: $13). You bet $8, called. Turn: A♥ (Pot: $29).",
      hand: "Q♥ J♥",
      context: "Ace on turn is a great scare card. Weak-tight called one street."
    },
    villainInfo: { type: "weak_tight", description: "Folds to continued aggression" },
    options: [
      { id: "A", text: "Check (give up)", quality: "bad", explanation: "The ace is perfect for barreling! Weak-tight players fold pocket pairs and weak kings to turn aggression on scary cards." },
      { id: "B", text: "Bet $12 (41% pot)", quality: "bad", explanation: "If you're barreling, go larger. Small bets don't pressure weak-tight players enough to fold." },
      { id: "C", text: "Bet $22 (76% pot)", quality: "best", explanation: "Perfect second barrel! The ace is a dream scare card. Weak-tight players with 77-QQ, weak Kx, and floats will fold. Apply pressure!" },
      { id: "D", text: "Bet $29 (pot)", quality: "good", explanation: "Pot-sized works but 70-80% pot is more efficient. Both apply good pressure." }
    ],
    tags: ["postflop", "bluffing", "double-barrel", "weak-tight"]
  },

  // Puzzle 34: Slowplay Decision
  {
    id: 34,
    title: "To Slowplay or Not",
    difficulty: "advanced",
    elo: 1500,
    street: "flop",
    position: "bb",
    villainPosition: "button",
    playerType: "maniac",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "exploitation",
    scenario: {
      position: "Big Blind",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Maniac Button raised to $7, you called. Flop: 7♦ 7♠ 2♣ (Pot: $15).",
      hand: "7♣ 6♣",
      context: "You flopped trips against the most aggressive player at the table."
    },
    villainInfo: { type: "maniac", description: "Bets aggressively with or without hands" },
    options: [
      { id: "A", text: "Check (trap)", quality: "best", explanation: "Perfect trap! Against a maniac, let them hang themselves. They'll bet with air constantly. Check, call flop, check-raise turn or river for max value." },
      { id: "B", text: "Bet $6 (40% pot)", quality: "bad", explanation: "Betting into a maniac gives them a chance to fold. Let them bluff instead!" },
      { id: "C", text: "Bet $12 (80% pot)", quality: "worst", explanation: "Large bet into a maniac is terrible. They'll fold their bluffs and only continue with hands that have equity against you." },
      { id: "D", text: "Check-raise if bet", quality: "good", explanation: "Check-raising is okay but might scare even a maniac. Smoother lines like check-call, check-call, check-raise river extract more." }
    ],
    tags: ["postflop", "slowplay", "trips", "maniac"]
  },

  // Puzzle 35: All-In Call
  {
    id: 35,
    title: "Hero Call",
    difficulty: "advanced",
    elo: 1600,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "lag",
    scenarioType: "facing_allin",
    gameType: "cash",
    stakes: "mid",
    concept: "range_reading",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "You raised, LAG BB 3-bet, you called. Board: K♣ 9♥ 5♦ 2♣ 7♠ (Pot: $200). LAG bet flop, you called. Turn checked through. River: LAG shoves $280.",
      hand: "A♠ K♦",
      context: "LAG's line is peculiar - bet flop, check turn, overbet shove river. Very polarized."
    },
    villainInfo: { type: "lag", description: "Capable of big bluffs and big value bets" },
    options: [
      { id: "A", text: "Fold", quality: "good", explanation: "Folding to a huge overbet is reasonable. LAG could have slow-played sets or turned a missed draw into a bluff." },
      { id: "B", text: "Call $280", quality: "best", explanation: "Hero call! LAG's line is suspicious - checking turn then overbet shoving river looks like a missed draw turning into a bluff. Your AK is at the top of your calling range here." },
      { id: "C", text: "Take time then fold", quality: "bad", explanation: "If you're considering a call, actually make the call. AK is near the top of your range." },
      { id: "D", text: "Snap call", quality: "good", explanation: "Calling is right but don't give away information by snapping. Take a moment to think through the hand." }
    ],
    tags: ["postflop", "hero-call", "river", "lag"]
  },

  // Puzzle 36: Preflop 5-Bet Spot
  {
    id: 36,
    title: "5-Bet Decision",
    difficulty: "expert",
    elo: 1750,
    street: "preflop",
    position: "button",
    villainPosition: "sb",
    playerType: "solid_reg",
    scenarioType: "facing_4bet",
    gameType: "cash",
    stakes: "high",
    concept: "range_reading",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$5/$10",
      action: "You raised $25, SB 3-bet to $90, you 4-bet to $210, SB 5-bets to $450.",
      hand: "K♠ K♣",
      context: "Deep in a 4-bet pot against a balanced regular."
    },
    villainInfo: { type: "solid_reg", description: "Balanced, competent, thinks in ranges" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding KK to a 5-bet is almost never correct unless you have specific history. KK is too strong." },
      { id: "B", text: "Call $240", quality: "good", explanation: "Calling keeps their range wider and plays well postflop. But against a balanced reg, you're probably flipping or behind often." },
      { id: "C", text: "6-bet all-in", quality: "best", explanation: "Correct! KK is in the top of your range. Against a balanced reg's 5-bet (AA, KK, maybe AK), you're never folding. Get it in and let variance do its thing." },
      { id: "D", text: "6-bet to $700", quality: "bad", explanation: "If you're putting more money in, just go all-in. Small 6-bets make no sense at this SPR." }
    ],
    tags: ["preflop", "5-bet", "premium", "deep"]
  },

  // Puzzle 37: Triple Barrel Value
  {
    id: 37,
    title: "Triple Barrel for Value",
    difficulty: "intermediate",
    elo: 1400,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "calling_station",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "value_betting",
    scenario: {
      position: "Button",
      stackSize: "180 BB",
      blinds: "$1/$2",
      action: "Board: A♣ J♦ 5♥ 3♠ 8♣ (Pot: $95). You bet flop $10, turn $28. Station called both. River: Station checks.",
      hand: "A♥ K♥",
      context: "Top pair top kicker against the ultimate calling station."
    },
    villainInfo: { type: "calling_station", description: "Has called two streets, will call more" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "Checking TPTK against a calling station? They'll call with any ace, any jack, any pair. Value bet!" },
      { id: "B", text: "Bet $35 (37% pot)", quality: "bad", explanation: "Too small! Station calls anything - maximize value." },
      { id: "C", text: "Bet $70 (74% pot)", quality: "best", explanation: "Perfect! Large value bet to extract maximum from the station's wide calling range. They'll pay you off with worse aces, jacks, and random pairs." },
      { id: "D", text: "Bet $95 (pot)", quality: "good", explanation: "Pot-sized is fine but might occasionally lose calls from the very weakest hands." }
    ],
    tags: ["postflop", "triple-barrel", "value", "calling-station"]
  },

  // Puzzle 38: Set vs Possible Straight
  {
    id: 38,
    title: "Set on Scary Board",
    difficulty: "advanced",
    elo: 1550,
    street: "river",
    position: "late",
    villainPosition: "bb",
    playerType: "tag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "mid",
    concept: "value_betting",
    scenario: {
      position: "Cutoff",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "Board: 9♠ 8♦ 7♣ 4♥ 2♠ (Pot: $180). You raised pre, TAG BB called. You bet flop, bet turn. TAG called both. River: TAG checks.",
      hand: "9♥ 9♦",
      context: "You have top set but straight was possible. TAG has shown persistence."
    },
    villainInfo: { type: "tag", description: "Solid player who wouldn't call two streets light" },
    options: [
      { id: "A", text: "Check back (pot control)", quality: "bad", explanation: "You have a monster! TAG called two streets with something. Get value from two pair, overpairs, and even T6/65." },
      { id: "B", text: "Bet $65 (36% pot)", quality: "good", explanation: "Betting is right but too thin. TAG can have straights, but also lots of two pair and overpairs. Go bigger." },
      { id: "C", text: "Bet $130 (72% pot)", quality: "best", explanation: "Excellent! Value bet your set. TAG's calling range includes 87, 98, T9, JJ, TT, and slow-played straights. You beat most of this range." },
      { id: "D", text: "Bet $180 (pot)", quality: "good", explanation: "Pot-sized is acceptable for value but 70-75% pot is more balanced and gets similar value." }
    ],
    tags: ["postflop", "set", "value-betting", "scary-board"]
  },

  // Puzzle 39: Defend vs Squeeze
  {
    id: 39,
    title: "Cold 4-Bet Defense",
    difficulty: "advanced",
    elo: 1600,
    street: "preflop",
    position: "middle",
    villainPosition: "bb",
    playerType: "lag",
    scenarioType: "facing_3bet",
    gameType: "cash",
    stakes: "mid",
    concept: "aggression",
    scenario: {
      position: "MP",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "You raised to $15, Button called, LAG BB squeezes to $65.",
      hand: "T♠ T♥",
      context: "LAG has been squeezing light. You have a medium pair facing the squeeze."
    },
    villainInfo: { type: "lag", description: "Squeezes wider than optimal" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding TT to a squeeze from an aggressive LAG is too weak. They're squeezing wide." },
      { id: "B", text: "Call $50", quality: "good", explanation: "Calling is reasonable to set mine and keep their range wide. But 4-betting exploits their aggression better." },
      { id: "C", text: "4-bet to $150", quality: "best", explanation: "Perfect! 4-bet to exploit the LAG's wide squeezing range. TT plays well as a 4-bet, you can often get folds, and when called you have a decent hand." },
      { id: "D", text: "4-bet all-in", quality: "bad", explanation: "Shoving is too much with TT. A smaller 4-bet applies pressure while giving you room to fold to 5-bets." }
    ],
    tags: ["preflop", "4-bet", "squeeze", "lag"]
  },

  // Puzzle 40: River Check-Raise Bluff
  {
    id: 40,
    title: "River Check-Raise Bluff",
    difficulty: "expert",
    elo: 1700,
    street: "river",
    position: "bb",
    villainPosition: "button",
    playerType: "solid_reg",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "mid",
    concept: "bluffing",
    scenario: {
      position: "Big Blind",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "Board: A♠ K♣ 9♦ 4♠ 2♠ (Pot: $85). You called pre, check-called flop. Turn checked through. River: You check, Reg bets $55.",
      hand: "Q♠ J♦",
      context: "Third spade hits river. You have Q♠ blocker. Reg's bet looks thin."
    },
    villainInfo: { type: "solid_reg", description: "Capable of thin value bets and folds" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "You have great bluff equity here. Don't give up!" },
      { id: "B", text: "Call $55", quality: "bad", explanation: "Calling with QJ high is lighting money on fire. But you have a great bluffing opportunity." },
      { id: "C", text: "Raise to $145", quality: "best", explanation: "Brilliant! You represent the flush perfectly, hold the Q♠ blocker, and Reg's thin value bet can't call a raise. This is an expert-level play." },
      { id: "D", text: "Raise to $200", quality: "good", explanation: "Check-raise bluff is right but $200 is slightly larger than needed. $140-160 accomplishes the same." }
    ],
    tags: ["postflop", "check-raise", "bluffing", "river"]
  },

  // Puzzles 41-70: More variety across all categories
  
  // Puzzle 41: Simple AK Preflop
  {
    id: 41,
    title: "AK Facing Open",
    difficulty: "beginner",
    elo: 1000,
    street: "preflop",
    position: "late",
    villainPosition: "early",
    playerType: "unknown",
    scenarioType: "facing_raise",
    gameType: "cash",
    stakes: "small",
    concept: "hand_selection",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "UTG raises to $6. Folded to you.",
      hand: "A♦ K♦",
      context: "Premium hand against an early position open."
    },
    villainInfo: { type: "unknown", description: "Standard player" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding AKs is never an option. This is a top 5 starting hand!" },
      { id: "B", text: "Call $6", quality: "bad", explanation: "Calling is too passive with AKs. Build the pot and take initiative." },
      { id: "C", text: "3-bet to $20", quality: "best", explanation: "Perfect! 3-bet for value. AKs crushes UTG's range and you want to build a pot with your premium." },
      { id: "D", text: "3-bet to $30", quality: "good", explanation: "3-betting is right but $30 is slightly large. $18-22 is optimal sizing." }
    ],
    tags: ["preflop", "3-bet", "premium", "value"]
  },

  // Puzzle 42: Basic Pot Odds Call
  {
    id: 42,
    title: "Getting the Right Price",
    difficulty: "beginner",
    elo: 1100,
    street: "flop",
    position: "bb",
    villainPosition: "button",
    playerType: "unknown",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "pot_odds",
    scenario: {
      position: "Big Blind",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "Button raised, you called. Flop: K♥ 9♥ 4♣ (Pot: $13). You check, Button bets $4.",
      hand: "Q♥ J♥",
      context: "Flush draw with two overs. Small bet gives you great odds."
    },
    villainInfo: { type: "unknown", description: "Standard player" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "With a flush draw and two overs (15 outs), folding to 4 into 13 is way too tight. Great pot odds." },
      { id: "B", text: "Call $4", quality: "best", explanation: "Easy call! You're getting 4:1 odds with ~54% equity (15 outs). You also have implied odds when you hit." },
      { id: "C", text: "Raise to $16", quality: "good", explanation: "Raising as a semi-bluff is fine but calling is cleaner with this much equity and position against." },
      { id: "D", text: "Raise all-in", quality: "bad", explanation: "Shoving is way too aggressive. You have great odds to call and realize your equity." }
    ],
    tags: ["postflop", "pot-odds", "flush-draw", "calling"]
  },

  // Puzzle 43: Check Back Weak Made Hand
  {
    id: 43,
    title: "Way Ahead/Way Behind",
    difficulty: "intermediate",
    elo: 1350,
    street: "turn",
    position: "button",
    villainPosition: "bb",
    playerType: "tag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "pot_control",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised, TAG BB called. Flop: A♠ 8♣ 3♦ (Pot: $13). You bet $8, called. Turn: 2♥ (Pot: $29). TAG checks.",
      hand: "A♥ 6♥",
      context: "You have top pair weak kicker on a dry board."
    },
    villainInfo: { type: "tag", description: "Solid, won't call with nothing" },
    options: [
      { id: "A", text: "Check back", quality: "best", explanation: "Correct! A6 is in a 'way ahead/way behind' spot. If TAG has an ace, you're often outkicked. If they have underpairs or draws, you're way ahead. Checking controls the pot." },
      { id: "B", text: "Bet $12 (41% pot)", quality: "bad", explanation: "Betting bloats the pot with a marginal hand. TAG calls with better aces and folds worse." },
      { id: "C", text: "Bet $22 (76% pot)", quality: "bad", explanation: "Large bet with weak top pair is a mistake. You're only getting action from hands that beat you." },
      { id: "D", text: "Bet $29 (pot)", quality: "worst", explanation: "Pot-sized with A6 is burning money. Control the pot with your showdown value." }
    ],
    tags: ["postflop", "pot-control", "WAWB", "turn"]
  },

  // Puzzle 44: Facing Overbet
  {
    id: 44,
    title: "Facing River Overbet",
    difficulty: "advanced",
    elo: 1550,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "solid_reg",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "mid",
    concept: "range_reading",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "Board: Q♠ J♥ 4♣ 7♦ T♠ (Pot: $120). Reg check-called flop and turn. River completes backdoor straight. Reg overbets $180.",
      hand: "Q♥ Q♦",
      context: "You have top set but the river brought a 4-card straight. Reg overbets."
    },
    villainInfo: { type: "solid_reg", description: "Balanced player who overbets polarized ranges" },
    options: [
      { id: "A", text: "Fold", quality: "good", explanation: "Folding set to an overbet is painful but rational. Reg's overbet range is polarized to straights (K9, 98, A9) or bluffs. You're behind value." },
      { id: "B", text: "Call $180", quality: "best", explanation: "Tough call but correct. Set is still near the top of your range. Reg should have bluffs in this spot (missed draws, turned pair into bluff). Don't over-fold to overbets." },
      { id: "C", text: "Raise to $400", quality: "worst", explanation: "Raising turns your hand into a bluff. Sets are bluff catchers on this board, not value raises." },
      { id: "D", text: "Raise all-in", quality: "worst", explanation: "Shoving is insane. You're only getting called by straights that beat you." }
    ],
    tags: ["postflop", "overbet", "set", "river"]
  },

  // Puzzle 45: Squeeze from Blinds
  {
    id: 45,
    title: "Squeeze Play",
    difficulty: "intermediate",
    elo: 1400,
    street: "preflop",
    position: "bb",
    villainPosition: "middle",
    playerType: "tag",
    scenarioType: "facing_raise",
    gameType: "cash",
    stakes: "small",
    concept: "fold_equity",
    scenario: {
      position: "Big Blind",
      stackSize: "80 BB",
      blinds: "$1/$2",
      action: "TAG MP raises to $6. Weak-tight Button calls. SB folds.",
      hand: "A♠ T♠",
      context: "Great squeeze spot with cold-caller showing weakness."
    },
    villainInfo: { type: "tag", description: "Opens standard, will fold to squeeze" },
    villains: [
      { type: "tag", position: "MP" },
      { type: "weak_tight", position: "BTN" }
    ],
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding ATs in BB facing a raise and weak call wastes a profitable squeeze opportunity." },
      { id: "B", text: "Call $4", quality: "bad", explanation: "Calling creates a multiway pot out of position. ATs wants to play heads-up." },
      { id: "C", text: "3-bet to $26", quality: "best", explanation: "Perfect squeeze! The cold-caller's capped range will fold, and TAG must fold most of their opening range. ATs has equity when called too." },
      { id: "D", text: "3-bet to $18", quality: "good", explanation: "Squeezing is right but $18 is too small with a cold-caller. Go larger for more fold equity." }
    ],
    tags: ["preflop", "squeeze", "3-bet", "fold-equity"]
  },

  // Puzzle 46: C-Bet Check Decision
  {
    id: 46,
    title: "Skip the C-Bet",
    difficulty: "intermediate",
    elo: 1300,
    street: "flop",
    position: "early",
    villainPosition: "button",
    playerType: "tag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "aggression",
    scenario: {
      position: "UTG",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised, TAG Button called. Flop: 8♥ 7♥ 6♣ (Pot: $13). You're first to act.",
      hand: "A♠ A♣",
      context: "Very coordinated board that hits Button's calling range hard."
    },
    villainInfo: { type: "tag", description: "Calls with suited connectors, will raise draws" },
    options: [
      { id: "A", text: "Check", quality: "best", explanation: "Correct! This board smashes Button's calling range (76, 87, 98, T9, flush draws). Checking induces bluffs and avoids getting raised off your equity." },
      { id: "B", text: "Bet $4 (30% pot)", quality: "good", explanation: "Small c-bet is acceptable but checking is superior on this coordinated board." },
      { id: "C", text: "Bet $10 (77% pot)", quality: "bad", explanation: "Large bet into a coordinated board that hits caller's range is asking to get raised. Check and control pot." },
      { id: "D", text: "Bet $13 (pot)", quality: "worst", explanation: "Pot-sized c-bet here is spew. You'll face raises from made hands and draws constantly." }
    ],
    tags: ["postflop", "c-bet", "pot-control", "wet-board"]
  },

  // Puzzle 47: Exploiting Weakness
  {
    id: 47,
    title: "Attack the Check",
    difficulty: "intermediate",
    elo: 1250,
    street: "turn",
    position: "button",
    villainPosition: "early",
    playerType: "tag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "aggression",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "TAG UTG raised, you called. Flop: K♣ 9♠ 4♦ (Pot: $13). TAG bet $8, you called. Turn: 3♥ (Pot: $29). TAG checks.",
      hand: "J♠ J♦",
      context: "TAG fired flop then checked turn, showing weakness."
    },
    villainInfo: { type: "tag", description: "Would bet turn with strong hands" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "TAG showed weakness - don't let them realize equity! Your jacks might be best. Take the pot." },
      { id: "B", text: "Bet $14 (48% pot)", quality: "best", explanation: "Perfect probe! TAG's check signals weakness (AQ, QQ, flush draws). Take the pot now with a reasonable bet." },
      { id: "C", text: "Bet $23 (79% pot)", quality: "good", explanation: "Betting is right but smaller is more efficient when exploiting a weak check." },
      { id: "D", text: "Bet $29 (pot)", quality: "bad", explanation: "Too large for a probe. Smaller sizing accomplishes the same goal." }
    ],
    tags: ["postflop", "probe-bet", "aggression", "turn"]
  },

  // Puzzle 48: River Thin Value
  {
    id: 48,
    title: "Thin Value Decision",
    difficulty: "advanced",
    elo: 1500,
    street: "river",
    position: "late",
    villainPosition: "bb",
    playerType: "calling_station",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "value_betting",
    scenario: {
      position: "Cutoff",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "Board: T♥ 8♣ 3♦ 4♠ 2♥ (Pot: $55). You raised pre, bet flop $10, Station called. Turn and river checked through. Station checks river.",
      hand: "A♣ T♣",
      context: "You have top pair on a dry runout. Station checked river."
    },
    villainInfo: { type: "calling_station", description: "Calls too much, rarely raises" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "Station calls light! Your top pair beats their wide range. Don't miss thin value." },
      { id: "B", text: "Bet $18 (33% pot)", quality: "best", explanation: "Perfect thin value! Small sizing gets called by worse tens, eights, pocket pairs, and random floats. Extract value from Station's wide range." },
      { id: "C", text: "Bet $40 (73% pot)", quality: "good", explanation: "Larger bet works too vs stations but might fold out the very bottom of their range." },
      { id: "D", text: "Bet $55 (pot)", quality: "bad", explanation: "Too large for thin value. Station might actually find a fold with their worst hands." }
    ],
    tags: ["postflop", "thin-value", "river", "calling-station"]
  },

  // Puzzle 49: Defend Blind Tournament
  {
    id: 49,
    title: "Tournament Blind Defense",
    difficulty: "intermediate",
    elo: 1350,
    street: "preflop",
    position: "bb",
    villainPosition: "button",
    playerType: "lag",
    scenarioType: "facing_raise",
    gameType: "tournament",
    stakes: null,
    tournamentStage: "middle",
    concept: "pot_odds",
    scenario: {
      position: "Big Blind",
      stackSize: "35 BB",
      blinds: "200/400 + 50",
      action: "LAG Button raises to 900. SB folds.",
      hand: "K♥ 9♥",
      context: "Button is aggressive. You're getting good odds in BB."
    },
    villainInfo: { type: "lag", description: "Opens wide from button" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "K9s is too strong to fold to a button open, especially at good pot odds." },
      { id: "B", text: "Call 500", quality: "best", explanation: "Standard defend. K9s has good playability and you're getting excellent odds. See a flop." },
      { id: "C", text: "3-bet to 2700", quality: "good", explanation: "3-betting is fine as a bluff but calling is cleaner at this stack depth." },
      { id: "D", text: "All-in (35 BB)", quality: "bad", explanation: "Shoving 35BB with K9s is too loose. Call and play postflop." }
    ],
    tags: ["preflop", "bb-defense", "tournament", "pot-odds"]
  },

  // Puzzle 50: Facing Min-Raise
  {
    id: 50,
    title: "Defend vs Min-Raise",
    difficulty: "beginner",
    elo: 1050,
    street: "preflop",
    position: "bb",
    villainPosition: "button",
    playerType: "fish",
    scenarioType: "facing_raise",
    gameType: "cash",
    stakes: "small",
    concept: "pot_odds",
    scenario: {
      position: "Big Blind",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Fish Button min-raises to $4. SB folds.",
      hand: "8♦ 6♦",
      context: "Getting 3.5:1 on a call against a weak player."
    },
    villainInfo: { type: "fish", description: "Min-raises with wide range" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "At 3.5:1 odds, 86s is definitely worth defending. You can outplay fish postflop." },
      { id: "B", text: "Call $2", quality: "best", explanation: "Easy defend! Great odds with a playable hand against a fish. See a flop and outplay them." },
      { id: "C", text: "3-bet to $14", quality: "good", explanation: "3-betting as a bluff can work but calling is simpler with odds this good." },
      { id: "D", text: "3-bet to $20", quality: "bad", explanation: "Too large. If you 3-bet, go smaller. But calling is best here." }
    ],
    tags: ["preflop", "bb-defense", "pot-odds", "fish"]
  },

  // Puzzle 51-60: Mix of streets and situations

  // Puzzle 51: River Decision vs Unknown
  {
    id: 51,
    title: "Standard River Value",
    difficulty: "beginner",
    elo: 1100,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "unknown",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "value_betting",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Board: Q♠ 9♣ 4♦ 7♥ 2♣ (Pot: $36). You raised pre, bet flop, bet turn. Villain called both. River checks to you.",
      hand: "Q♦ J♦",
      context: "Top pair good kicker. Villain has shown persistence."
    },
    villainInfo: { type: "unknown", description: "Called two streets" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "You likely have the best hand! Villain called with something - extract value from worse queens and pairs." },
      { id: "B", text: "Bet $18 (50% pot)", quality: "best", explanation: "Standard value bet. Get called by worse queens, nines, pocket pairs, and stubborn floats." },
      { id: "C", text: "Bet $28 (78% pot)", quality: "good", explanation: "Larger sizing is acceptable but might lose some marginal calls." },
      { id: "D", text: "Bet $36 (pot)", quality: "bad", explanation: "Pot-sized is too large for thin value. You want calls from worse hands." }
    ],
    tags: ["postflop", "value-betting", "river", "standard"]
  },

  // Puzzle 52: Facing Flop Raise
  {
    id: 52,
    title: "Facing Flop Raise",
    difficulty: "intermediate",
    elo: 1300,
    street: "flop",
    position: "early",
    villainPosition: "button",
    playerType: "lag",
    scenarioType: "facing_raise",
    gameType: "cash",
    stakes: "small",
    concept: "hand_reading",
    scenario: {
      position: "UTG",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised to $6, LAG Button called. Flop: K♦ T♣ 5♠ (Pot: $15). You bet $10, LAG raises to $30.",
      hand: "A♣ A♥",
      context: "LAG raises your c-bet on a K-high flop. You have aces."
    },
    villainInfo: { type: "lag", description: "Raises flops with wide range" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding aces to one raise is absurd, especially against a LAG who raises light." },
      { id: "B", text: "Call $20", quality: "best", explanation: "Correct! Call and let LAG keep barreling with bluffs. Re-evaluate turn based on action." },
      { id: "C", text: "3-bet to $80", quality: "good", explanation: "3-betting is fine for value but flatting keeps their range wider and lets them bluff more." },
      { id: "D", text: "All-in", quality: "bad", explanation: "Shoving is too aggressive. LAG has some kings and sets you don't want to stack off to yet." }
    ],
    tags: ["postflop", "facing-raise", "overpair", "lag"]
  },

  // Puzzle 53: Limp Pot Defense
  {
    id: 53,
    title: "Attack the Limpers",
    difficulty: "beginner",
    elo: 1050,
    street: "preflop",
    position: "button",
    villainPosition: null,
    playerType: "fish",
    scenarioType: "opening",
    gameType: "cash",
    stakes: "small",
    concept: "aggression",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Two fish limp in MP and CO. Folded to you on button.",
      hand: "A♦ J♣",
      context: "Good hand against weak limpers."
    },
    villainInfo: { type: "fish", description: "Two recreational players limped" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding AJ on button with dead money in pot? Never. This is a great spot to attack." },
      { id: "B", text: "Limp behind", quality: "bad", explanation: "Limping is weak. You have a strong hand - raise to isolate and take initiative." },
      { id: "C", text: "Raise to $12", quality: "best", explanation: "Perfect! Raise large (6x) to isolate limpers. AJ is way ahead of their limping range. Build a pot you'll win." },
      { id: "D", text: "Raise to $6", quality: "bad", explanation: "Too small. With limpers, go larger to isolate. They'll call $6 with junk." }
    ],
    tags: ["preflop", "isolation", "limpers", "aggression"]
  },

  // Puzzle 54: Pocket Pair in 3-Bet Pot
  {
    id: 54,
    title: "Set or Give Up",
    difficulty: "intermediate",
    elo: 1350,
    street: "flop",
    position: "button",
    villainPosition: "early",
    playerType: "tag",
    scenarioType: "facing_bet",
    gameType: "cash",
    stakes: "small",
    concept: "implied_odds",
    scenario: {
      position: "Button",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "TAG UTG raised to $8, you 3-bet to $26, TAG called. Flop: A♣ K♦ 9♠ (Pot: $55). TAG checks.",
      hand: "J♠ J♣",
      context: "Scary board for jacks. TAG check might be trapping."
    },
    villainInfo: { type: "tag", description: "Called 3-bet, could have big hands" },
    options: [
      { id: "A", text: "Check back", quality: "best", explanation: "Correct! JJ is way behind on AK9. Checking controls the pot. TAG's calling range has lots of Ax and Kx that beat you." },
      { id: "B", text: "Bet $20 (36% pot)", quality: "bad", explanation: "C-betting into AK9 with JJ is asking for trouble. You're behind too often." },
      { id: "C", text: "Bet $40 (73% pot)", quality: "worst", explanation: "Large bet with JJ on this board is spew. You're only getting called by better." },
      { id: "D", text: "Bet $28 (50% pot)", quality: "bad", explanation: "Any c-bet size is bad here. JJ has no equity to deny and gets called by better." }
    ],
    tags: ["postflop", "3-bet-pot", "pot-control", "scary-board"]
  },

  // Puzzle 55: Value Raise River
  {
    id: 55,
    title: "Raise for Value",
    difficulty: "advanced",
    elo: 1500,
    street: "river",
    position: "bb",
    villainPosition: "button",
    playerType: "fish",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "value_betting",
    scenario: {
      position: "Big Blind",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Board: J♣ 8♠ 4♦ 3♥ J♦ (Pot: $45). You check-called flop and turn. River: Fish bets $20.",
      hand: "J♥ T♥",
      context: "You rivered trips. Fish is betting into you."
    },
    villainInfo: { type: "fish", description: "Value bets thin, might have jacks too" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding trips? You have a monster. Never fold here." },
      { id: "B", text: "Call $20", quality: "good", explanation: "Calling is safe but might miss value. Fish bets with lots of worse hands." },
      { id: "C", text: "Raise to $60", quality: "best", explanation: "Excellent! Raise for value. Fish bet with worse jacks (J9, J7), eights, and random bluffs. They'll call with worse." },
      { id: "D", text: "Raise all-in", quality: "bad", explanation: "Shoving is too much. Smaller raise extracts more from Fish's calling range." }
    ],
    tags: ["postflop", "value-raise", "river", "fish"]
  },

  // Puzzle 56: Multi-Street Bluff Planning
  {
    id: 56,
    title: "Plan the Bluff",
    difficulty: "advanced",
    elo: 1600,
    street: "flop",
    position: "button",
    villainPosition: "bb",
    playerType: "weak_tight",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "mid",
    concept: "bluffing",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "You raised $15, weak-tight BB called. Flop: K♠ 9♥ 5♦ (Pot: $32).",
      hand: "A♥ 8♥",
      context: "Dry K-high board against a weak-tight player who folds too much."
    },
    villainInfo: { type: "weak_tight", description: "Folds to continued aggression" },
    options: [
      { id: "A", text: "Check (give up)", quality: "bad", explanation: "Checking wastes the opportunity to make weak-tight fold. Attack their weakness!" },
      { id: "B", text: "Bet $12 (38% pot)", quality: "bad", explanation: "Small bet doesn't put enough pressure. Go larger against a player who folds too much." },
      { id: "C", text: "Bet $24 (75% pot)", quality: "best", explanation: "Perfect! Strong c-bet on K-high board. Plan to barrel any A, Q, J turn. Weak-tight will fold underpairs and weak draws." },
      { id: "D", text: "Bet $32 (pot)", quality: "good", explanation: "Pot-sized works but 70-75% is more efficient for the same fold equity." }
    ],
    tags: ["postflop", "bluffing", "c-bet", "weak-tight"]
  },

  // Puzzle 57: Facing River Shove
  {
    id: 57,
    title: "Call the River Shove",
    difficulty: "advanced",
    elo: 1550,
    street: "river",
    position: "late",
    villainPosition: "bb",
    playerType: "maniac",
    scenarioType: "facing_allin",
    gameType: "cash",
    stakes: "mid",
    concept: "exploitation",
    scenario: {
      position: "Cutoff",
      stackSize: "80 BB",
      blinds: "$2/$5",
      action: "Board: K♦ Q♥ 7♠ 3♣ 9♦ (Pot: $180). Maniac BB led flop, you raised, called. Turn checked through. River: Maniac shoves $240.",
      hand: "K♠ J♠",
      context: "Maniac took a strange line - lead, call raise, check, shove."
    },
    villainInfo: { type: "maniac", description: "Capable of turning any hand into a bluff" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding KJ to a maniac's shove is too weak. Their line doesn't make sense for value." },
      { id: "B", text: "Call $240", quality: "best", explanation: "Correct call! Maniac's line is bizarre - lead/call/check/shove screams missed draw or turned pair into bluff. KJ is easily good enough." },
      { id: "C", text: "Tank then fold", quality: "bad", explanation: "If you're considering calling (you should be), don't talk yourself out of it. Pull the trigger." },
      { id: "D", text: "Snap call", quality: "good", explanation: "Calling is right but don't snap - take a moment to process the hand." }
    ],
    tags: ["postflop", "hero-call", "maniac", "river"]
  },

  // Puzzle 58: Cold 4-Bet Spot
  {
    id: 58,
    title: "Cold 4-Bet",
    difficulty: "advanced",
    elo: 1600,
    street: "preflop",
    position: "sb",
    villainPosition: "button",
    playerType: "lag",
    scenarioType: "facing_3bet",
    gameType: "cash",
    stakes: "mid",
    concept: "aggression",
    scenario: {
      position: "Small Blind",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "UTG raises to $15, LAG Button 3-bets to $50.",
      hand: "A♠ K♣",
      context: "Premium hand facing a 3-bet from aggressive button."
    },
    villainInfo: { type: "lag", description: "3-bets light in position" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding AKo facing a light 3-bet is atrocious. This is a premium hand!" },
      { id: "B", text: "Call $50", quality: "bad", explanation: "Calling bloats a pot out of position with a hand that plays better with initiative." },
      { id: "C", text: "4-bet to $140", quality: "best", explanation: "Perfect cold 4-bet! AK crushes LAG's light 3-betting range. Take initiative and isolate." },
      { id: "D", text: "4-bet all-in", quality: "good", explanation: "Shoving is fine but smaller 4-bet gives you more options if UTG wakes up with a big hand." }
    ],
    tags: ["preflop", "4-bet", "premium", "lag"]
  },

  // Puzzle 59: Multiway Turn Bet
  {
    id: 59,
    title: "Multiway Value Bet",
    difficulty: "intermediate",
    elo: 1350,
    street: "turn",
    position: "button",
    villainPosition: null,
    playerType: "fish",
    scenarioType: "multiway",
    gameType: "cash",
    stakes: "small",
    concept: "value_betting",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "3-way pot. You raised pre, 2 fish called. Flop: A♠ 7♥ 3♦ (Pot: $19). Checked around. Turn: 4♣ (Pot: $19). Both check.",
      hand: "A♦ Q♦",
      context: "Top pair good kicker in a multiway pot. Both opponents checked twice."
    },
    villainInfo: { type: "fish", description: "Two recreational players" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "Both fish checked twice - they're weak! Get value from your top pair." },
      { id: "B", text: "Bet $10 (53% pot)", quality: "best", explanation: "Perfect sizing! Get calls from weak aces, sevens, and random pairs. Don't let them see a free river." },
      { id: "C", text: "Bet $15 (79% pot)", quality: "good", explanation: "Larger sizing is fine - fish call too much anyway." },
      { id: "D", text: "Bet $19 (pot)", quality: "bad", explanation: "Pot-sized multiway is too much. You want calls from worse, not folds." }
    ],
    tags: ["postflop", "multiway", "value-betting", "turn"]
  },

  // Puzzle 60: Spot the Trap
  {
    id: 60,
    title: "Recognize the Trap",
    difficulty: "advanced",
    elo: 1550,
    street: "turn",
    position: "button",
    villainPosition: "bb",
    playerType: "nit",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "hand_reading",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Nit BB called your raise. Flop: A♦ A♣ 7♠ (Pot: $13). Nit check-called $8. Turn: K♥ (Pot: $29). Nit leads $20.",
      hand: "K♠ Q♠",
      context: "Nit, who rarely bluffs, suddenly leads turn after checking flop."
    },
    villainInfo: { type: "nit", description: "Passive player leading into paired board" },
    options: [
      { id: "A", text: "Fold", quality: "best", explanation: "Great read! A nit leading into a paired board almost always has an ace or better. Your kings are crushed. Save your money." },
      { id: "B", text: "Call $20", quality: "bad", explanation: "Calling against a nit's donk bet on a paired board is asking to lose money. They have it." },
      { id: "C", text: "Raise to $55", quality: "worst", explanation: "Raising into a nit's lead on Axx board? They're never folding their ace. Terrible play." },
      { id: "D", text: "Call and evaluate river", quality: "bad", explanation: "There's no river that makes you feel good. Fold now and save chips." }
    ],
    tags: ["postflop", "trap", "nit", "hand-reading"]
  },

  // Puzzles 61-70: More advanced and varied

  // Puzzle 61: River Blocker Bluff
  {
    id: 61,
    title: "Use Your Blockers",
    difficulty: "expert",
    elo: 1700,
    street: "river",
    position: "late",
    villainPosition: "early",
    playerType: "solid_reg",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "high",
    concept: "bluffing",
    scenario: {
      position: "Cutoff",
      stackSize: "100 BB",
      blinds: "$5/$10",
      action: "Board: J♥ T♥ 4♣ 3♠ 9♥ (Pot: $350). You flat pre, called flop/turn bets. River completes flush. Reg checks.",
      hand: "A♥ K♣",
      context: "You have the A♥ blocking the nut flush. Your AK has no showdown value."
    },
    villainInfo: { type: "solid_reg", description: "Competent, can find folds" },
    options: [
      { id: "A", text: "Check back (give up)", quality: "bad", explanation: "You have zero showdown value but block the nuts. This is prime bluff territory." },
      { id: "B", text: "Bet $100 (29% pot)", quality: "bad", explanation: "Small bet doesn't represent the flush credibly. Go big or go home." },
      { id: "C", text: "Bet $280 (80% pot)", quality: "best", explanation: "Perfect bluff! You block the nut flush with A♥. Your large bet represents flushes you could have called down with. Reg's sets and two pairs must fold." },
      { id: "D", text: "Bet $350 (pot)", quality: "good", explanation: "Pot-sized works but 75-85% pot is more efficient." }
    ],
    tags: ["postflop", "bluffing", "blockers", "expert"]
  },

  // Puzzle 62: Deep Stack Set
  {
    id: 62,
    title: "Play Your Set Fast",
    difficulty: "intermediate",
    elo: 1400,
    street: "flop",
    position: "button",
    villainPosition: "bb",
    playerType: "lag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "mid",
    concept: "value_betting",
    scenario: {
      position: "Button",
      stackSize: "200 BB",
      blinds: "$2/$5",
      action: "You raised $15, LAG BB 3-bet to $55, you called. Flop: 8♥ 7♣ 2♦ (Pot: $112). LAG bets $75.",
      hand: "8♠ 8♦",
      context: "You flopped top set in a 3-bet pot vs aggressive player."
    },
    villainInfo: { type: "lag", description: "Will continue barreling with wide range" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding top set? This is absurd. You have the near-nuts." },
      { id: "B", text: "Call $75", quality: "good", explanation: "Calling is fine to let LAG keep barreling. But raising is better to build the pot now." },
      { id: "C", text: "Raise to $200", quality: "best", explanation: "Perfect! Raise your set on this coordinated board. LAG will continue with overpairs, draws, and bluffs. Build the pot while you're way ahead." },
      { id: "D", text: "All-in", quality: "bad", explanation: "Shoving 200BB on the flop is too much. Build the pot over streets." }
    ],
    tags: ["postflop", "set", "3-bet-pot", "value"]
  },

  // Puzzle 63: Check-Call Line
  {
    id: 63,
    title: "Check-Call as Defense",
    difficulty: "intermediate",
    elo: 1350,
    street: "flop",
    position: "early",
    villainPosition: "button",
    playerType: "tag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "pot_control",
    scenario: {
      position: "UTG",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised $6, TAG Button called. Flop: Q♦ J♣ 9♠ (Pot: $15).",
      hand: "A♣ K♣",
      context: "Coordinated board where you have an open-ended straight draw."
    },
    villainInfo: { type: "tag", description: "Will bet if you check, has connected boards" },
    options: [
      { id: "A", text: "Check", quality: "best", explanation: "Correct! Check with your OESD. If TAG bets, you can check-call or check-raise. You have equity and don't want to bloat the pot out of position with air." },
      { id: "B", text: "Bet $5 (33% pot)", quality: "good", explanation: "Small c-bet is okay but checking is cleaner with just a draw on this coordinated board." },
      { id: "C", text: "Bet $12 (80% pot)", quality: "bad", explanation: "Large bet with just a draw into a board that hits caller's range is too aggressive." },
      { id: "D", text: "Bet $15 (pot)", quality: "worst", explanation: "Pot-sized c-bet with AK high on this board is lighting money on fire." }
    ],
    tags: ["postflop", "check-call", "draws", "pot-control"]
  },

  // Puzzle 64: Short Stack Tournament Play
  {
    id: 64,
    title: "Desperate Time",
    difficulty: "intermediate",
    elo: 1300,
    street: "preflop",
    position: "early",
    villainPosition: null,
    playerType: "unknown",
    scenarioType: "opening",
    gameType: "tournament",
    stakes: null,
    tournamentStage: "short_stack",
    concept: "fold_equity",
    scenario: {
      position: "UTG+1",
      stackSize: "8 BB",
      blinds: "300/600 + 75",
      action: "UTG folds. You're next to act with 8 BB.",
      hand: "A♦ 2♣",
      context: "Short stack, getting desperate. Need to make a move."
    },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "A2o has enough equity and fold equity at 8 BB from early position. Don't wait too long." },
      { id: "B", text: "Min-raise", quality: "worst", explanation: "Min-raising with 8 BB is never correct. Shove or fold." },
      { id: "C", text: "Limp", quality: "worst", explanation: "Limping with 8 BB is awful. You have no postflop playability." },
      { id: "D", text: "All-in (8 BB)", quality: "best", explanation: "Correct! With 8 BB, A2o is a shove from early position. You have fold equity and an ace for when called. Don't blind out!" }
    ],
    tags: ["preflop", "tournament", "short-stack", "shoving"]
  },

  // Puzzle 65: Exploit Capped Range
  {
    id: 65,
    title: "Attack Capped Range",
    difficulty: "advanced",
    elo: 1550,
    street: "turn",
    position: "button",
    villainPosition: "bb",
    playerType: "tag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "mid",
    concept: "range_reading",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "You raised, TAG BB called. Flop: A♠ K♦ 5♣ (Pot: $25). You bet $15, called. Turn: 9♥ (Pot: $55). TAG checks.",
      hand: "Q♠ J♠",
      context: "TAG called flop on AK5 but didn't raise. Their range is capped to medium hands."
    },
    villainInfo: { type: "tag", description: "Would raise sets and two pair on flop" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "TAG's range is capped! They'd raise AK, 55, A5 on flop. Attack their medium pairs and weak aces." },
      { id: "B", text: "Bet $25 (45% pot)", quality: "good", explanation: "Betting is right but go larger to pressure their capped range." },
      { id: "C", text: "Bet $42 (76% pot)", quality: "best", explanation: "Perfect! Large bet attacks TAG's capped range (weak aces, KQ, pocket pairs). They can't have monsters so apply maximum pressure." },
      { id: "D", text: "Bet $55 (pot)", quality: "good", explanation: "Pot-sized works but is slightly larger than optimal." }
    ],
    tags: ["postflop", "bluffing", "range-reading", "turn"]
  },

  // Puzzle 66: Spot Value Own
  {
    id: 66,
    title: "Value Own Yourself?",
    difficulty: "intermediate",
    elo: 1400,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "nit",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "small",
    concept: "value_betting",
    scenario: {
      position: "Button",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "Board: Q♠ T♦ 5♣ 2♥ 8♦ (Pot: $40). You raised pre, bet flop $10. Nit called. Turn/river checked through. Nit checks river.",
      hand: "A♠ Q♦",
      context: "Top pair vs a nit who called flop and checked down."
    },
    villainInfo: { type: "nit", description: "Only continues with strong hands" },
    options: [
      { id: "A", text: "Check back", quality: "best", explanation: "Smart check! A nit calling the flop likely has a queen too, and their queen often has a better kicker (KQ, QJ). Value betting risks only getting called by better." },
      { id: "B", text: "Bet $15 (38% pot)", quality: "bad", explanation: "Betting gets called by better queens and folds out worse hands. This is a value own." },
      { id: "C", text: "Bet $30 (75% pot)", quality: "bad", explanation: "Larger sizing makes the value own worse. Nit's calling range crushes you." },
      { id: "D", text: "Bet $40 (pot)", quality: "worst", explanation: "Pot-sized against a nit's calling range? You're only getting called by hands that beat you." }
    ],
    tags: ["postflop", "pot-control", "nit", "value-own"]
  },

  // Puzzle 67: Continuation vs 2 Players
  {
    id: 67,
    title: "Multiway C-Bet",
    difficulty: "beginner",
    elo: 1150,
    street: "flop",
    position: "late",
    villainPosition: null,
    playerType: "unknown",
    scenarioType: "multiway",
    gameType: "cash",
    stakes: "small",
    concept: "aggression",
    scenario: {
      position: "Cutoff",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised $6, Button and BB called. Flop: A♦ 8♣ 3♥ (Pot: $19). BB checks.",
      hand: "A♣ J♣",
      context: "Top pair in a 3-way pot on a dry board."
    },
    options: [
      { id: "A", text: "Check", quality: "bad", explanation: "You have top pair on a dry board. Bet for value and protection!" },
      { id: "B", text: "Bet $6 (32% pot)", quality: "good", explanation: "Small sizing is fine multiway but you can go a bit larger for value." },
      { id: "C", text: "Bet $12 (63% pot)", quality: "best", explanation: "Perfect! Value bet your top pair. Get calls from worse aces, eights, and pocket pairs. Charge draws." },
      { id: "D", text: "Bet $19 (pot)", quality: "bad", explanation: "Pot-sized is too much multiway. You want calls from worse hands." }
    ],
    tags: ["postflop", "c-bet", "multiway", "value"]
  },

  // Puzzle 68: Call with Blocker
  {
    id: 68,
    title: "Blocker Call",
    difficulty: "expert",
    elo: 1750,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "lag",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "high",
    concept: "range_reading",
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$5/$10",
      action: "Board: K♠ T♣ 6♦ 2♥ Q♥ (Pot: $400). 3-bet pot. You c-bet flop, checked turn. LAG leads river $320.",
      hand: "A♣ J♣",
      context: "You have the blocker to the nuts (AJ makes straight). LAG leads big on river."
    },
    villainInfo: { type: "lag", description: "Aggressive, bluffs river frequently" },
    options: [
      { id: "A", text: "Fold", quality: "good", explanation: "Folding is reasonable - LAG could have Kx, two pair, or the straight." },
      { id: "B", text: "Call $320", quality: "best", explanation: "Great call! You block AJ (the nuts) and LAG is polarized. Your blocker makes it less likely they have the nuts, increasing their bluff frequency." },
      { id: "C", text: "Raise to $700", quality: "bad", explanation: "Raising turns your hand into a bluff when you have some showdown value." },
      { id: "D", text: "Tank fold", quality: "bad", explanation: "If you're tanking, it means you know it's close. With blockers to the nuts, call." }
    ],
    tags: ["postflop", "blocker-call", "lag", "expert"]
  },

  // Puzzle 69: Preflop All-In Call
  {
    id: 69,
    title: "Call the Shove",
    difficulty: "intermediate",
    elo: 1350,
    street: "preflop",
    position: "button",
    villainPosition: "sb",
    playerType: "lag",
    scenarioType: "facing_allin",
    gameType: "cash",
    stakes: "small",
    concept: "pot_odds",
    scenario: {
      position: "Button",
      stackSize: "40 BB",
      blinds: "$1/$2",
      action: "You raised to $6. LAG SB shoves $80. BB folds.",
      hand: "T♥ T♣",
      context: "LAG shoves 40BB over your open. Getting 1.7:1 on call."
    },
    villainInfo: { type: "lag", description: "Shoves light against button opens" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding TT getting 1.7:1 vs a LAG's shoving range is too tight. You have 40%+ equity usually." },
      { id: "B", text: "Call $74", quality: "best", explanation: "Correct call! TT has great equity vs LAG's wide shoving range (any pair, any ace, any suited broadway). You're often flipping or ahead." },
      { id: "C", text: "Tank then fold", quality: "bad", explanation: "If you're considering calling, you should call. TT is too strong to fold here." },
      { id: "D", text: "Time bank then fold", quality: "bad", explanation: "Using time bank doesn't change the math. TT is a call vs a LAG." }
    ],
    tags: ["preflop", "all-in", "pot-odds", "lag"]
  },

  // Puzzle 70: Exploitative Overbet
  {
    id: 70,
    title: "Overbet for Value",
    difficulty: "advanced",
    elo: 1600,
    street: "river",
    position: "button",
    villainPosition: "bb",
    playerType: "calling_station",
    scenarioType: "headsup",
    gameType: "cash",
    stakes: "mid",
    concept: "exploitation",
    scenario: {
      position: "Button",
      stackSize: "150 BB",
      blinds: "$2/$5",
      action: "Board: A♦ K♣ 8♥ 3♦ 2♣ (Pot: $120). You raised pre, bet flop $30, bet turn $60. Station called both. River: Station checks.",
      hand: "A♠ A♥",
      context: "You have top set against the ultimate calling station."
    },
    villainInfo: { type: "calling_station", description: "Will call almost any bet with any pair" },
    options: [
      { id: "A", text: "Check back", quality: "worst", explanation: "Checking top set against a calling station is criminal. They call everything!" },
      { id: "B", text: "Bet $60 (50% pot)", quality: "bad", explanation: "Too small! Station calls anything - maximize value." },
      { id: "C", text: "Bet $90 (75% pot)", quality: "good", explanation: "Standard sizing but you can go bigger vs this opponent." },
      { id: "D", text: "Bet $150 (overbet)", quality: "best", explanation: "Perfect exploitation! Calling stations can't fold. Overbet for maximum value. They'll call with any ace, any king, even random pairs." }
    ],
    tags: ["postflop", "overbet", "exploitation", "calling-station"]
  },

  // Puzzles 71-100: Final batch
  
  {
    id: 71, title: "Middle Pair vs Aggression", difficulty: "intermediate", elo: 1300,
    street: "turn", position: "bb", villainPosition: "button", playerType: "lag", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "pot_control",
    scenario: { position: "Big Blind", stackSize: "100 BB", blinds: "$1/$2", action: "LAG Button raised, you called. Flop: Q♣ 7♦ 3♠ (Pot: $13). Check-check. Turn: 5♥ (Pot: $13). You check, LAG bets $10.", hand: "8♠ 8♦", context: "You have middle pair. LAG bet after flop went check-check." },
    villainInfo: { type: "lag", description: "Attacks weakness" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "88 is too strong to fold - LAG attacks the check-check." },
      { id: "B", text: "Call $10", quality: "best", explanation: "Correct! Your 88 beats LAG's bluffs. Call and evaluate river." },
      { id: "C", text: "Raise to $30", quality: "bad", explanation: "Raising turns your hand into a bluff. Just call with showdown value." },
      { id: "D", text: "Check-raise all-in", quality: "worst", explanation: "Shoving middle pair is way too aggressive." }
    ],
    tags: ["postflop", "middle-pair", "calling", "lag"]
  },

  {
    id: 72, title: "Button vs Blinds Steal", difficulty: "beginner", elo: 1000,
    street: "preflop", position: "button", villainPosition: null, playerType: "unknown", scenarioType: "opening", gameType: "cash", stakes: "small", concept: "position",
    scenario: { position: "Button", stackSize: "100 BB", blinds: "$1/$2", action: "Folded to you on button.", hand: "Q♦ 9♦", context: "Good stealing hand on the button." },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Q9s on the button is a clear open. Don't miss steal opportunities." },
      { id: "B", text: "Limp $2", quality: "worst", explanation: "Never limp the button. Raise or fold." },
      { id: "C", text: "Raise to $5", quality: "best", explanation: "Perfect steal! Q9s is strong enough to attack the blinds." },
      { id: "D", text: "Raise to $8", quality: "good", explanation: "Raising is right but 4x is larger than needed." }
    ],
    tags: ["preflop", "stealing", "position", "button"]
  },

  {
    id: 73, title: "Second Nut Flush vs Lead", difficulty: "advanced", elo: 1500,
    street: "river", position: "button", villainPosition: "bb", playerType: "fish", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "value_betting",
    scenario: { position: "Button", stackSize: "100 BB", blinds: "$1/$2", action: "Board: 9♥ 6♥ 3♣ 2♥ K♠ (Pot: $55). You raised pre, bet flop. Turn checked through. River: Fish leads $25.", hand: "K♥ Q♥", context: "You have second nut flush. Fish leads small." },
    villainInfo: { type: "fish", description: "Leads with random hands" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding second nut flush? Never!" },
      { id: "B", text: "Call $25", quality: "bad", explanation: "Calling leaves money on table. Fish bet weak - raise for value!" },
      { id: "C", text: "Raise to $75", quality: "best", explanation: "Perfect value raise! Fish leads with any heart, kings, random hands. Get paid." },
      { id: "D", text: "Raise all-in", quality: "good", explanation: "All-in is fine but smaller raise likely gets same calls." }
    ],
    tags: ["postflop", "value-raise", "flush", "fish"]
  },

  {
    id: 74, title: "Ace High Good Enough?", difficulty: "intermediate", elo: 1350,
    street: "river", position: "bb", villainPosition: "button", playerType: "maniac", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "exploitation",
    scenario: { position: "Big Blind", stackSize: "90 BB", blinds: "$1/$2", action: "Board: K♣ 8♦ 5♠ 4♥ 2♣ (Pot: $45). Maniac Button raised pre. Flop/turn checked through. River: Maniac bets $30.", hand: "A♠ J♦", context: "Both players showed weakness. Maniac suddenly bets river." },
    villainInfo: { type: "maniac", description: "Bets when sensing weakness" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Maniac attacks weakness - AJ beats their bluffs." },
      { id: "B", text: "Call $30", quality: "best", explanation: "Correct! Maniac bets with any two after weakness shown. AJ is a good bluff catcher." },
      { id: "C", text: "Raise to $80", quality: "bad", explanation: "Don't raise with a bluff catcher - just call." },
      { id: "D", text: "Check-raise all-in", quality: "worst", explanation: "AJ isn't a hand to shove. Call and see." }
    ],
    tags: ["postflop", "bluff-catching", "ace-high", "maniac"]
  },

  {
    id: 75, title: "Suited Connector vs 3-Bet", difficulty: "intermediate", elo: 1300,
    street: "preflop", position: "button", villainPosition: "bb", playerType: "tag", scenarioType: "facing_3bet", gameType: "cash", stakes: "small", concept: "pot_odds",
    scenario: { position: "Button", stackSize: "100 BB", blinds: "$1/$2", action: "You raised to $6. TAG BB 3-bets to $22.", hand: "7♠ 6♠", context: "Facing a 3-bet with a suited connector." },
    villainInfo: { type: "tag", description: "3-bets a standard range" },
    options: [
      { id: "A", text: "Fold", quality: "good", explanation: "Folding 76s to a 3-bet is fine - it's borderline." },
      { id: "B", text: "Call $16", quality: "best", explanation: "Best play! Deep stacks + position + suited connector = great implied odds. Flop a monster and stack them." },
      { id: "C", text: "4-bet to $55", quality: "bad", explanation: "4-betting 76s is too loose unless you're very deep." },
      { id: "D", text: "4-bet all-in", quality: "worst", explanation: "Shoving suited connectors is lighting money on fire." }
    ],
    tags: ["preflop", "3-bet-pot", "suited-connector", "implied-odds"]
  },

  {
    id: 76, title: "Small Blind Complete", difficulty: "beginner", elo: 950,
    street: "preflop", position: "sb", villainPosition: "bb", playerType: "fish", scenarioType: "opening", gameType: "cash", stakes: "small", concept: "position",
    scenario: { position: "Small Blind", stackSize: "100 BB", blinds: "$1/$2", action: "Folded to you in SB. BB is a passive fish.", hand: "K♣ 4♣", context: "Heads up against a fish in the blinds." },
    villainInfo: { type: "fish", description: "Plays passively postflop" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "K4s has enough equity heads-up. Don't fold to just the BB." },
      { id: "B", text: "Complete $1", quality: "bad", explanation: "Limping shows weakness. Raise to take initiative." },
      { id: "C", text: "Raise to $5", quality: "best", explanation: "Raise for value! K4s is ahead of fish's defending range." },
      { id: "D", text: "Raise to $8", quality: "good", explanation: "Raising is right but smaller sizing is more efficient vs BB." }
    ],
    tags: ["preflop", "small-blind", "stealing", "fish"]
  },

  {
    id: 77, title: "Two Pair on Wet Board", difficulty: "intermediate", elo: 1400,
    street: "turn", position: "late", villainPosition: "bb", playerType: "tag", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "value_betting",
    scenario: { position: "Cutoff", stackSize: "100 BB", blinds: "$1/$2", action: "You raised, TAG BB called. Flop: J♥ T♥ 5♣ (Pot: $13). You bet $8, called. Turn: 5♦ (Pot: $29).", hand: "J♦ T♦", context: "You turned two pair. Board paired, flush draw missed." },
    villainInfo: { type: "tag", description: "Solid player" },
    options: [
      { id: "A", text: "Check", quality: "bad", explanation: "Two pair is strong. Get value from TAG's draws and pairs." },
      { id: "B", text: "Bet $14 (48% pot)", quality: "good", explanation: "Betting is right, go a bit larger for value." },
      { id: "C", text: "Bet $22 (76% pot)", quality: "best", explanation: "Perfect sizing! Get value from JT, JT, T9, flush draws. Protect against remaining hearts." },
      { id: "D", text: "Bet $29 (pot)", quality: "good", explanation: "Pot-sized works but is slightly larger than optimal." }
    ],
    tags: ["postflop", "two-pair", "value-betting", "turn"]
  },

  {
    id: 78, title: "Facing Turn Barrel", difficulty: "intermediate", elo: 1350,
    street: "turn", position: "bb", villainPosition: "button", playerType: "tag", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "pot_control",
    scenario: { position: "Big Blind", stackSize: "95 BB", blinds: "$1/$2", action: "TAG Button raised, you called. Flop: A♠ 9♣ 4♦ (Pot: $13). You check, TAG bets $8, you call. Turn: K♥ (Pot: $29). You check, TAG bets $22.", hand: "9♥ 9♦", context: "You have middle set but two overcards to the 9 are out." },
    villainInfo: { type: "tag", description: "Double barreling" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Never fold a set here. You beat tons of TAG's value range." },
      { id: "B", text: "Call $22", quality: "best", explanation: "Correct! Sets are too strong to fold. Call and evaluate river." },
      { id: "C", text: "Raise to $60", quality: "good", explanation: "Raising for value is reasonable but calling lets TAG keep barreling bluffs." },
      { id: "D", text: "Raise all-in", quality: "bad", explanation: "Shoving is too aggressive. Build the pot over streets." }
    ],
    tags: ["postflop", "set", "calling", "turn"]
  },

  {
    id: 79, title: "Bluff Catch vs Unknown", difficulty: "intermediate", elo: 1300,
    street: "river", position: "button", villainPosition: "bb", playerType: "unknown", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "hand_reading",
    scenario: { position: "Button", stackSize: "100 BB", blinds: "$1/$2", action: "Board: Q♠ 8♥ 5♣ 2♦ 9♦ (Pot: $40). You raised pre, bet flop $10. Turn/river checked through. River: Villain leads $35.", hand: "T♠ T♣", context: "You have an overpair. Villain suddenly leads river after passive line." },
    villainInfo: { type: "unknown", description: "Unknown player leads river" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Villain's line is suspicious. Sudden river lead after passive line often = missed draw bluffing." },
      { id: "B", text: "Call $35", quality: "best", explanation: "Good call! Overpair is a solid bluff catcher. Villain's line doesn't make sense for value." },
      { id: "C", text: "Raise to $90", quality: "bad", explanation: "Raising turns your bluff catcher into a bluff. Just call." },
      { id: "D", text: "Raise all-in", quality: "worst", explanation: "Shoving with TT is way too much. Call and see." }
    ],
    tags: ["postflop", "bluff-catching", "river", "unknown"]
  },

  {
    id: 80, title: "Postflop with AQ", difficulty: "beginner", elo: 1100,
    street: "flop", position: "late", villainPosition: "bb", playerType: "fish", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "value_betting",
    scenario: { position: "Cutoff", stackSize: "100 BB", blinds: "$1/$2", action: "You raised, Fish BB called. Flop: A♥ 7♦ 3♠ (Pot: $13). Fish checks.", hand: "A♣ Q♣", context: "Top pair good kicker on a dry board." },
    villainInfo: { type: "fish", description: "Will call with worse" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "You have top pair! Get value from fish's wide range." },
      { id: "B", text: "Bet $4 (31% pot)", quality: "good", explanation: "Betting is right but can go larger vs fish." },
      { id: "C", text: "Bet $10 (77% pot)", quality: "best", explanation: "Perfect! Fish calls with any ace, any pair, draws. Extract value." },
      { id: "D", text: "Bet $13 (pot)", quality: "good", explanation: "Pot-sized is fine vs fish who call anything." }
    ],
    tags: ["postflop", "TPTK", "value-betting", "fish"]
  },

  {
    id: 81, title: "Fold Equity Calculation", difficulty: "advanced", elo: 1550,
    street: "flop", position: "sb", villainPosition: "bb", playerType: "weak_tight", scenarioType: "headsup", gameType: "cash", stakes: "mid", concept: "fold_equity",
    scenario: { position: "Small Blind", stackSize: "50 BB", blinds: "$2/$5", action: "You raised, weak-tight BB called. Flop: K♠ Q♦ 6♥ (Pot: $42).", hand: "J♣ T♣", context: "Open-ended straight draw vs weak-tight player." },
    villainInfo: { type: "weak_tight", description: "Folds to aggression" },
    options: [
      { id: "A", text: "Check (give up)", quality: "bad", explanation: "You have good equity and fold equity. Don't give up!" },
      { id: "B", text: "Bet $15 (36% pot)", quality: "bad", explanation: "Small bets don't pressure weak-tight enough." },
      { id: "C", text: "Bet $32 (76% pot)", quality: "best", explanation: "Large semi-bluff! Weak-tight folds most hands that missed. If called, you have 8 outs." },
      { id: "D", text: "All-in ($85)", quality: "good", explanation: "Shoving has merit but a normal bet accomplishes same goal." }
    ],
    tags: ["postflop", "semi-bluff", "fold-equity", "weak-tight"]
  },

  {
    id: 82, title: "ICM Bubble Spot", difficulty: "advanced", elo: 1600,
    street: "preflop", position: "late", villainPosition: "bb", playerType: "unknown", scenarioType: "opening", gameType: "tournament", stakes: null, tournamentStage: "late", concept: "fold_equity",
    scenario: { position: "Cutoff", stackSize: "22 BB", blinds: "1000/2000 + 200", action: "Folded to you. On the money bubble.", hand: "A♥ 8♦", context: "Money bubble with medium stack. BB is short." },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "A8o is plenty strong to attack a short BB on the bubble." },
      { id: "B", text: "Min-raise to 4000", quality: "good", explanation: "Min-raising is fine to apply pressure with less risk." },
      { id: "C", text: "Raise to 5000", quality: "best", explanation: "Standard open puts pressure on short-stacked BB who can't call light on bubble." },
      { id: "D", text: "All-in (22 BB)", quality: "bad", explanation: "Shoving risks too much on the bubble. Normal raise is better." }
    ],
    tags: ["preflop", "tournament", "ICM", "bubble"]
  },

  {
    id: 83, title: "Underpair Facing Bet", difficulty: "beginner", elo: 1050,
    street: "flop", position: "button", villainPosition: "early", playerType: "tag", scenarioType: "facing_bet", gameType: "cash", stakes: "small", concept: "hand_reading",
    scenario: { position: "Button", stackSize: "95 BB", blinds: "$1/$2", action: "TAG UTG raised to $6, you called. Flop: A♣ K♠ 8♦ (Pot: $15). TAG bets $12.", hand: "7♠ 7♦", context: "Underpair to both broadway cards." },
    villainInfo: { type: "tag", description: "Solid player c-betting" },
    options: [
      { id: "A", text: "Fold", quality: "best", explanation: "Correct fold! 77 has almost no equity on AK8 vs UTG's range. Save your chips." },
      { id: "B", text: "Call $12", quality: "bad", explanation: "Calling with 77 on AK board is lighting money on fire. You never improve." },
      { id: "C", text: "Raise to $35", quality: "worst", explanation: "Raising 77 as a bluff on AK board? TAG never folds better." },
      { id: "D", text: "Call to float", quality: "bad", explanation: "Floating with no equity is bad. What's your plan on turn?" }
    ],
    tags: ["postflop", "underpair", "folding", "tag"]
  },

  {
    id: 84, title: "Nut Flush Draw Aggression", difficulty: "intermediate", elo: 1350,
    street: "flop", position: "button", villainPosition: "bb", playerType: "unknown", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "aggression",
    scenario: { position: "Button", stackSize: "100 BB", blinds: "$1/$2", action: "You raised, BB called. Flop: J♠ 8♠ 3♥ (Pot: $13). BB checks.", hand: "A♠ K♠", context: "Nut flush draw with two overs." },
    villainInfo: { type: "unknown", description: "Unknown opponent" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "You have tons of equity. Build the pot with nut flush draw!" },
      { id: "B", text: "Bet $5 (38% pot)", quality: "good", explanation: "Betting is right but can go larger with so much equity." },
      { id: "C", text: "Bet $10 (77% pot)", quality: "best", explanation: "Perfect! Semi-bluff with nut flush draw + two overs. You have ~50% equity vs most hands." },
      { id: "D", text: "Bet $13 (pot)", quality: "good", explanation: "Pot-sized is fine with this much equity." }
    ],
    tags: ["postflop", "flush-draw", "semi-bluff", "aggression"]
  },

  {
    id: 85, title: "Top Two vs Check-Raise", difficulty: "advanced", elo: 1500,
    street: "flop", position: "late", villainPosition: "bb", playerType: "tag", scenarioType: "facing_raise", gameType: "cash", stakes: "mid", concept: "hand_reading",
    scenario: { position: "Cutoff", stackSize: "100 BB", blinds: "$2/$5", action: "You raised to $15, TAG BB called. Flop: K♦ T♣ 4♠ (Pot: $32). You bet $20, TAG raises to $65.", hand: "K♠ T♠", context: "Top two pair facing a check-raise from solid player." },
    villainInfo: { type: "tag", description: "Check-raises balanced range" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding top two to one raise is way too weak. You beat draws and worse." },
      { id: "B", text: "Call $45", quality: "best", explanation: "Perfect! Call and let TAG keep barreling. You beat lots of their range." },
      { id: "C", text: "3-bet to $150", quality: "good", explanation: "3-betting is fine for value but calling keeps their range wider." },
      { id: "D", text: "All-in", quality: "bad", explanation: "Shoving is too aggressive. Just call and evaluate turn." }
    ],
    tags: ["postflop", "two-pair", "check-raise", "tag"]
  },

  {
    id: 86, title: "Overbet Bluff Spot", difficulty: "expert", elo: 1700,
    street: "river", position: "button", villainPosition: "bb", playerType: "solid_reg", scenarioType: "headsup", gameType: "cash", stakes: "high", concept: "bluffing",
    scenario: { position: "Button", stackSize: "200 BB", blinds: "$5/$10", action: "Board: 9♠ 8♠ 4♦ 3♣ 2♠ (Pot: $250). You 3-bet pre, c-bet flop, bet turn. Reg called both. River completes flush. Reg checks.", hand: "A♥ A♣", context: "AA on a four-flush board. No spade. Reg's range is capped." },
    villainInfo: { type: "solid_reg", description: "Competent, thinking player" },
    options: [
      { id: "A", text: "Check back", quality: "good", explanation: "Checking is safe - you have some showdown value and Reg could have flushes." },
      { id: "B", text: "Bet $100 (40% pot)", quality: "bad", explanation: "Small bet looks weak. Either check or bet big to rep flush." },
      { id: "C", text: "Bet $200 (80% pot)", quality: "good", explanation: "Decent sizing but overbet is better to represent flushes." },
      { id: "D", text: "Bet $375 (overbet)", quality: "best", explanation: "Expert play! Overbet representing the flush. You block nothing and Reg's capped range struggles vs overbets. Turn your bluff catcher into a bluff." }
    ],
    tags: ["postflop", "overbet", "bluffing", "expert"]
  },

  {
    id: 87, title: "Facing Min Click-Back", difficulty: "intermediate", elo: 1350,
    street: "flop", position: "late", villainPosition: "bb", playerType: "fish", scenarioType: "facing_raise", gameType: "cash", stakes: "small", concept: "hand_reading",
    scenario: { position: "Cutoff", stackSize: "100 BB", blinds: "$1/$2", action: "You raised, Fish BB called. Flop: Q♥ 9♣ 4♦ (Pot: $13). You bet $8, Fish min-raises to $16.", hand: "Q♠ J♠", context: "Top pair facing a min-raise from a fish." },
    villainInfo: { type: "fish", description: "Min-raises with random hands" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding top pair to a fish's min-raise is way too weak." },
      { id: "B", text: "Call $8", quality: "best", explanation: "Just call! Fish min-raise with anything - sets, draws, middle pair. Re-evaluate turn." },
      { id: "C", text: "3-bet to $45", quality: "bad", explanation: "3-betting bloats pot unnecessarily. Call and keep pot controlled." },
      { id: "D", text: "All-in", quality: "worst", explanation: "Shoving top pair vs min-raise is massive overreaction." }
    ],
    tags: ["postflop", "facing-raise", "fish", "top-pair"]
  },

  {
    id: 88, title: "Defending vs Steal", difficulty: "beginner", elo: 1050,
    street: "preflop", position: "bb", villainPosition: "sb", playerType: "lag", scenarioType: "facing_raise", gameType: "cash", stakes: "small", concept: "pot_odds",
    scenario: { position: "Big Blind", stackSize: "100 BB", blinds: "$1/$2", action: "Folded to LAG SB who raises to $6.", hand: "J♦ 8♦", context: "Facing a steal from aggressive small blind." },
    villainInfo: { type: "lag", description: "Steals aggressively from SB" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "J8s is too strong to fold vs a wide stealing range." },
      { id: "B", text: "Call $4", quality: "best", explanation: "Correct! Good pot odds with a playable hand vs LAG's wide range." },
      { id: "C", text: "3-bet to $20", quality: "good", explanation: "3-betting is fine as a bluff but calling is simpler." },
      { id: "D", text: "3-bet to $28", quality: "bad", explanation: "Too large for a 3-bet bluff. If you 3-bet, go smaller." }
    ],
    tags: ["preflop", "bb-defense", "pot-odds", "lag"]
  },

  {
    id: 89, title: "Check Behind or Bet?", difficulty: "intermediate", elo: 1300,
    street: "river", position: "button", villainPosition: "bb", playerType: "tag", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "value_betting",
    scenario: { position: "Button", stackSize: "95 BB", blinds: "$1/$2", action: "Board: J♠ 8♥ 3♦ 2♣ 5♠ (Pot: $30). You raised pre, bet flop. TAG called. Turn/river checked through.", hand: "K♥ K♣", context: "Overpair, runout was checked down." },
    villainInfo: { type: "tag", description: "Solid, won't call light" },
    options: [
      { id: "A", text: "Check back", quality: "good", explanation: "Checking is reasonable - TAG has limited calling range after passive line." },
      { id: "B", text: "Bet $12 (40% pot)", quality: "best", explanation: "Thin value! TAG can hero call with JT, 99, T8. Small sizing induces calls." },
      { id: "C", text: "Bet $24 (80% pot)", quality: "bad", explanation: "Too large for thin value. You only get called by better at this size." },
      { id: "D", text: "Bet $30 (pot)", quality: "bad", explanation: "Pot-sized is too much. TAG folds everything worse." }
    ],
    tags: ["postflop", "thin-value", "overpair", "river"]
  },

  {
    id: 90, title: "3-Bet or Flat?", difficulty: "intermediate", elo: 1350,
    street: "preflop", position: "button", villainPosition: "late", playerType: "tag", scenarioType: "facing_raise", gameType: "cash", stakes: "small", concept: "hand_selection",
    scenario: { position: "Button", stackSize: "100 BB", blinds: "$1/$2", action: "TAG Cutoff raises to $6.", hand: "A♠ J♦", context: "Decent hand vs late position open." },
    villainInfo: { type: "tag", description: "Opens standard from cutoff" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "AJo on button vs CO is way too strong to fold." },
      { id: "B", text: "Call $6", quality: "best", explanation: "Best play! AJo plays well postflop in position. Keep range wide." },
      { id: "C", text: "3-bet to $20", quality: "good", explanation: "3-betting is fine but flatting is cleaner with AJo." },
      { id: "D", text: "3-bet to $25", quality: "bad", explanation: "If you 3-bet, go smaller. But calling is best." }
    ],
    tags: ["preflop", "calling", "position", "tag"]
  },

  {
    id: 91, title: "Fold to 3-Bet", difficulty: "beginner", elo: 1000,
    street: "preflop", position: "middle", villainPosition: "late", playerType: "nit", scenarioType: "facing_3bet", gameType: "cash", stakes: "small", concept: "hand_selection",
    scenario: { position: "MP", stackSize: "100 BB", blinds: "$1/$2", action: "You raised to $6. Nit Button 3-bets to $22.", hand: "K♦ J♣", context: "Facing a 3-bet from a very tight player." },
    villainInfo: { type: "nit", description: "3-bets only premiums" },
    options: [
      { id: "A", text: "Fold", quality: "best", explanation: "Correct! Nit's 3-bet range is QQ+/AK. KJo is crushed. Easy fold." },
      { id: "B", text: "Call $16", quality: "bad", explanation: "Calling dominated vs a nit's range. Fold and find better spots." },
      { id: "C", text: "4-bet to $55", quality: "worst", explanation: "4-betting into a nit with KJo is suicidal." },
      { id: "D", text: "4-bet all-in", quality: "worst", explanation: "Shoving is insane. Nit will call with AA/KK and crush you." }
    ],
    tags: ["preflop", "folding", "3-bet", "nit"]
  },

  {
    id: 92, title: "Turn Delayed C-Bet", difficulty: "intermediate", elo: 1300,
    street: "turn", position: "button", villainPosition: "bb", playerType: "weak_tight", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "aggression",
    scenario: { position: "Button", stackSize: "100 BB", blinds: "$1/$2", action: "You raised, weak-tight BB called. Flop: Q♦ T♣ 6♠ (Pot: $13). Check-check. Turn: 3♥ (Pot: $13).", hand: "A♥ 8♥", context: "You checked back flop. Turn is a brick." },
    villainInfo: { type: "weak_tight", description: "Will fold to delayed aggression" },
    options: [
      { id: "A", text: "Check again", quality: "bad", explanation: "Checking twice gives up on the pot. Weak-tight players fold to delayed barrels." },
      { id: "B", text: "Bet $6 (46% pot)", quality: "best", explanation: "Perfect delayed c-bet! Weak-tight checked twice showing weakness. Take the pot now." },
      { id: "C", text: "Bet $10 (77% pot)", quality: "good", explanation: "Larger bet works too but 40-50% is sufficient to take it down." },
      { id: "D", text: "Bet $13 (pot)", quality: "bad", explanation: "Too large for a stab. Keep it smaller when you have nothing." }
    ],
    tags: ["postflop", "delayed-cbet", "bluffing", "weak-tight"]
  },

  {
    id: 93, title: "Straight on Paired Board", difficulty: "intermediate", elo: 1400,
    street: "river", position: "button", villainPosition: "bb", playerType: "tag", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "value_betting",
    scenario: { position: "Button", stackSize: "95 BB", blinds: "$1/$2", action: "Board: J♣ T♥ 5♠ 5♦ 9♠ (Pot: $50). You bet flop and turn, TAG called both. River: TAG checks.", hand: "Q♦ 8♦", context: "You rivered the straight. Board is paired." },
    villainInfo: { type: "tag", description: "Called two streets" },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "You have a straight! Value bet - TAG doesn't always have a 5." },
      { id: "B", text: "Bet $20 (40% pot)", quality: "good", explanation: "Betting is right but can go larger for more value." },
      { id: "C", text: "Bet $38 (76% pot)", quality: "best", explanation: "Perfect value bet! TAG has JT, T9, J9, pocket pairs. Get paid." },
      { id: "D", text: "Bet $50 (pot)", quality: "good", explanation: "Pot-sized is fine but 70-80% is more efficient." }
    ],
    tags: ["postflop", "straight", "value-betting", "river"]
  },

  {
    id: 94, title: "Facing River Probe", difficulty: "intermediate", elo: 1350,
    street: "river", position: "button", villainPosition: "bb", playerType: "lag", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "pot_control",
    scenario: { position: "Button", stackSize: "90 BB", blinds: "$1/$2", action: "Board: K♠ 9♦ 6♣ 2♥ 4♠ (Pot: $25). You raised pre, c-bet flop $8, LAG called. Turn/river checked. River: LAG bets $15.", hand: "A♦ K♦", context: "Top pair but LAG probes river after passive turn." },
    villainInfo: { type: "lag", description: "Probes when sensing weakness" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Top pair top kicker - don't fold to a probe bet!" },
      { id: "B", text: "Call $15", quality: "best", explanation: "Easy call! AK beats LAG's bluffs and weaker kings. Their line doesn't rep strength." },
      { id: "C", text: "Raise to $45", quality: "bad", explanation: "Raising is unnecessary. Just call with your bluff catcher." },
      { id: "D", text: "Raise all-in", quality: "worst", explanation: "Shoving AK is way too much here." }
    ],
    tags: ["postflop", "facing-probe", "calling", "lag"]
  },

  {
    id: 95, title: "Set Over Set Cooler", difficulty: "advanced", elo: 1550,
    street: "flop", position: "late", villainPosition: "bb", playerType: "nit", scenarioType: "headsup", gameType: "cash", stakes: "mid", concept: "hand_reading",
    scenario: { position: "Cutoff", stackSize: "100 BB", blinds: "$2/$5", action: "Nit BB called your raise. Flop: 7♠ 7♦ 3♥ (Pot: $25). You bet $15, Nit raises to $50.", hand: "3♠ 3♣", context: "You flopped bottom full house. Nit raises flop." },
    villainInfo: { type: "nit", description: "Only raises with monsters" },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Never fold a full house!" },
      { id: "B", text: "Call $35", quality: "good", explanation: "Calling is fine to let nit keep betting. But you should raise for value." },
      { id: "C", text: "Raise to $120", quality: "best", explanation: "Raise for value! You have a full house vs nit's range of 77 or overpairs. Build the pot." },
      { id: "D", text: "All-in", quality: "good", explanation: "Shoving works but building over streets is often better." }
    ],
    tags: ["postflop", "full-house", "value-betting", "nit"]
  },

  {
    id: 96, title: "Button Open Light", difficulty: "beginner", elo: 1050,
    street: "preflop", position: "button", villainPosition: null, playerType: "unknown", scenarioType: "opening", gameType: "cash", stakes: "small", concept: "position",
    scenario: { position: "Button", stackSize: "100 BB", blinds: "$1/$2", action: "Folded to you on the button.", hand: "J♣ 7♣", context: "Suited hand on the button." },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "J7s is playable from button. Don't miss the steal." },
      { id: "B", text: "Limp", quality: "worst", explanation: "Never limp the button. Raise or fold." },
      { id: "C", text: "Raise to $5", quality: "best", explanation: "Perfect! J7s is in your button opening range. Attack the blinds." },
      { id: "D", text: "Raise to $8", quality: "good", explanation: "Raising is right but smaller is better." }
    ],
    tags: ["preflop", "opening", "button", "stealing"]
  },

  {
    id: 97, title: "River Check vs Aggression", difficulty: "intermediate", elo: 1400,
    street: "river", position: "bb", villainPosition: "button", playerType: "maniac", scenarioType: "headsup", gameType: "cash", stakes: "small", concept: "pot_control",
    scenario: { position: "Big Blind", stackSize: "85 BB", blinds: "$1/$2", action: "Board: A♠ J♣ 8♦ 4♥ 2♣ (Pot: $60). Maniac bet every street, you called flop/turn. River: Maniac checks.", hand: "A♥ T♥", context: "Maniac who bet twice suddenly checks river." },
    villainInfo: { type: "maniac", description: "Very aggressive, but checked river" },
    options: [
      { id: "A", text: "Check back", quality: "best", explanation: "Smart check! Maniac checking river is suspicious - could be trapping with two pair or better. Take free showdown." },
      { id: "B", text: "Bet $25 (42% pot)", quality: "bad", explanation: "Betting into a maniac's check risks a check-raise bluff or running into a trap." },
      { id: "C", text: "Bet $45 (75% pot)", quality: "bad", explanation: "Large bet is risky. The maniac's check should make you cautious." },
      { id: "D", text: "Bet $60 (pot)", quality: "worst", explanation: "Pot-sized when villain changes gears is asking for trouble." }
    ],
    tags: ["postflop", "pot-control", "river", "maniac"]
  },

  {
    id: 98, title: "River Decision vs Short Stack", difficulty: "intermediate", elo: 1350,
    street: "river", position: "button", villainPosition: "bb", playerType: "fish", scenarioType: "facing_allin", gameType: "cash", stakes: "small", concept: "pot_odds",
    scenario: { position: "Button", stackSize: "100 BB", blinds: "$1/$2", action: "Fish BB (25 BB stack). Board: Q♦ T♣ 5♥ 3♠ 8♦ (Pot: $40). You raised pre, bet flop, bet turn. River: Fish shoves $30.", hand: "Q♣ 9♣", context: "Top pair facing short stack's river shove." },
    villainInfo: { type: "fish", description: "Short stack shoving" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "You're getting 2.3:1. Top pair calls against fish's wide shoving range." },
      { id: "B", text: "Call $30", quality: "best", explanation: "Easy call! Q9 beats tons of fish's bluffs and weaker queens. Pot odds + fish = call." },
      { id: "C", text: "Tank fold", quality: "bad", explanation: "No tanking needed. Math says call." },
      { id: "D", text: "Snap call", quality: "good", explanation: "Calling is right but take a second to process." }
    ],
    tags: ["postflop", "pot-odds", "fish", "short-stack"]
  },

  {
    id: 99, title: "Expert River Decision", difficulty: "expert", elo: 1800,
    street: "river", position: "button", villainPosition: "bb", playerType: "solid_reg", scenarioType: "headsup", gameType: "cash", stakes: "high", concept: "range_reading",
    scenario: { position: "Button", stackSize: "100 BB", blinds: "$5/$10", action: "Board: K♣ Q♥ 6♦ 7♠ J♠ (Pot: $500). 3-bet pot. You c-bet flop, bet turn. Reg called both. River completes broadway. Reg checks.", hand: "A♣ T♣", context: "You rivered the nuts. Reg checked to you." },
    villainInfo: { type: "solid_reg", description: "Competent, can find hero calls" },
    options: [
      { id: "A", text: "Check back", quality: "worst", explanation: "Checking the nuts? Never. Get maximum value!" },
      { id: "B", text: "Bet $200 (40% pot)", quality: "bad", explanation: "Too small with the nuts. Go bigger." },
      { id: "C", text: "Bet $400 (80% pot)", quality: "best", explanation: "Optimal sizing! Large enough to extract value from Reg's kings and queens, but not so big they always fold." },
      { id: "D", text: "Bet $500 (pot)", quality: "good", explanation: "Pot-sized can work but might fold out some value calls." }
    ],
    tags: ["postflop", "nuts", "value-betting", "expert"]
  },

  {
    id: 100, title: "Final Boss: The Soul Read", difficulty: "expert", elo: 1900,
    street: "river", position: "bb", villainPosition: "button", playerType: "lag", scenarioType: "facing_allin", gameType: "cash", stakes: "high", concept: "range_reading",
    scenario: { position: "Big Blind", stackSize: "100 BB", blinds: "$5/$10", action: "Board: A♦ J♦ 5♣ 2♠ 9♦ (Pot: $650). 3-bet pot. You check-called flop with nut flush draw. Turn checked through. River completes flush but LAG shoves $700.", hand: "K♦ Q♦", context: "Second nut flush. LAG shoves huge on river." },
    villainInfo: { type: "lag", description: "Capable of big bluffs and thin value" },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Folding second nut flush to a LAG is too weak. You beat everything except Ad." },
      { id: "B", text: "Call $700", quality: "best", explanation: "Snap call! You have second nuts. LAG can have bare Ad (unlikely), but also Jd, Td, busted straight draws. Second nut flush is almost never a fold." },
      { id: "C", text: "Tank and fold", quality: "bad", explanation: "If you're tanking with second nuts, you're making a mistake. Call." },
      { id: "D", text: "Time bank then call", quality: "good", explanation: "You're calling, but no need to Hollywood it." }
    ],
    tags: ["postflop", "flush", "hero-call", "expert"]
  }
]

// Helper function to get puzzles by filters
export function getFilteredPuzzles(settings, solvedPuzzleIds = []) {
  return puzzles.filter(puzzle => {
    // Check street filter
    if (!settings.streets.includes('all') && !settings.streets.includes(puzzle.street)) {
      return false
    }
    
    // Check position filter
    if (!settings.positions.includes('all')) {
      const positionMatch = settings.positions.some(p => {
        if (p === 'early') return ['early', 'utg', 'utg1', 'utg2'].includes(puzzle.position)
        if (p === 'middle') return ['middle', 'mp', 'lojack'].includes(puzzle.position)
        if (p === 'late') return ['late', 'cutoff', 'hijack'].includes(puzzle.position)
        return p === puzzle.position
      })
      if (!positionMatch) return false
    }
    
    // Check player type filter
    if (!settings.playerTypes.includes('all') && !settings.playerTypes.includes(puzzle.playerType)) {
      return false
    }
    
    // Check scenario type filter
    if (!settings.scenarioTypes.includes('all') && !settings.scenarioTypes.includes(puzzle.scenarioType)) {
      return false
    }
    
    // Check game type
    if (settings.gameType && settings.gameType !== 'all' && puzzle.gameType && settings.gameType !== puzzle.gameType) {
      return false
    }
    
    return true
  })
}

// Helper function to get a puzzle by ELO range with filters
export function getNextPuzzle(playerElo, solvedPuzzleIds = [], settings = null) {
  // Get base puzzle set (filtered or all)
  let basePuzzles = settings ? getFilteredPuzzles(settings, solvedPuzzleIds) : puzzles
  
  // If no puzzles match filters, return null
  if (basePuzzles.length === 0) {
    return null
  }
  
  // Target puzzles within ELO range for appropriate challenge
  const targetMin = playerElo - 200
  const targetMax = playerElo + 300
  
  // Filter to unsolved puzzles in range
  let candidates = basePuzzles.filter(
    p => !solvedPuzzleIds.includes(p.id) && 
         p.elo >= targetMin && 
         p.elo <= targetMax
  )
  
  // If no puzzles in range, expand search to unsolved only
  if (candidates.length === 0) {
    candidates = basePuzzles.filter(p => !solvedPuzzleIds.includes(p.id))
  }
  
  // If all puzzles solved, return any puzzle from filtered set
  if (candidates.length === 0) {
    candidates = basePuzzles
  }
  
  // Return random puzzle from candidates
  return candidates[Math.floor(Math.random() * candidates.length)]
}

// Get puzzles by difficulty
export function getPuzzlesByDifficulty(difficulty) {
  return puzzles.filter(p => p.difficulty === difficulty)
}

// Get puzzles by concept
export function getPuzzlesByConcept(concept) {
  return puzzles.filter(p => p.concept === concept)
}

// Get puzzle stats
export function getPuzzleStats() {
  return {
    total: puzzles.length,
    byDifficulty: {
      beginner: puzzles.filter(p => p.difficulty === 'beginner').length,
      intermediate: puzzles.filter(p => p.difficulty === 'intermediate').length,
      advanced: puzzles.filter(p => p.difficulty === 'advanced').length,
      expert: puzzles.filter(p => p.difficulty === 'expert').length
    },
    byStreet: {
      preflop: puzzles.filter(p => p.street === 'preflop').length,
      flop: puzzles.filter(p => p.street === 'flop').length,
      turn: puzzles.filter(p => p.street === 'turn').length,
      river: puzzles.filter(p => p.street === 'river').length
    },
    eloRange: {
      min: Math.min(...puzzles.map(p => p.elo)),
      max: Math.max(...puzzles.map(p => p.elo))
    }
  }
}

export default puzzles
