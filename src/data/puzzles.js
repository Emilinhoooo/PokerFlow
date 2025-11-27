// PokerFlow Puzzle Database
// 20 puzzles covering various poker scenarios and difficulty levels

export const puzzles = [
  {
    id: 1,
    title: "Opening Range - UTG",
    difficulty: "beginner",
    elo: 1000,
    scenario: {
      position: "UTG (Under the Gun)",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Folded to you",
      hand: "A♠ J♦",
      context: "6-max cash game. Standard table with no reads on opponents."
    },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "AJo is a strong hand in most positions. Folding here is too tight." },
      { id: "B", text: "Limp", quality: "worst", explanation: "Limping from UTG shows weakness and builds no pot with a premium hand. Always avoid limping." },
      { id: "C", text: "Raise to 2.5 BB", quality: "best", explanation: "Correct! AJo is in our standard UTG opening range. A 2.5 BB raise is optimal sizing." },
      { id: "D", text: "Raise to 5 BB", quality: "good", explanation: "While raising is correct, 5 BB is too large. It prices out worse hands and commits too much with a hand that plays well postflop." }
    ],
    tags: ["preflop", "opening", "position"]
  },
  {
    id: 2,
    title: "Continuation Bet Decision",
    difficulty: "beginner",
    elo: 1050,
    scenario: {
      position: "Button",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "You raised preflop, BB called. Flop: K♥ 7♣ 2♦ (Pot: $12)",
      hand: "A♣ Q♣",
      context: "Heads-up to the flop. Villain check to you."
    },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "With two overcards and position, checking misses value from worse hands and doesn't apply pressure." },
      { id: "B", text: "Bet $4 (33% pot)", quality: "best", explanation: "Correct! A small c-bet on this dry board applies pressure. You have two overcards and can improve. Small sizing works well on dry boards." },
      { id: "C", text: "Bet $9 (75% pot)", quality: "good", explanation: "Betting is right but sizing is too large. On dry boards, smaller bets accomplish the same goal more efficiently." },
      { id: "D", text: "Bet $12 (pot)", quality: "bad", explanation: "Way too large. This over-commits with a hand that has no made value yet." }
    ],
    tags: ["postflop", "c-bet", "sizing"]
  },
  {
    id: 3,
    title: "Facing a 3-Bet",
    difficulty: "beginner",
    elo: 1100,
    scenario: {
      position: "CO (Cutoff)",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised to $6, Button 3-bets to $20",
      hand: "J♠ J♣",
      context: "Button is a tight regular. Blinds fold."
    },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "JJ is way too strong to fold to a single 3-bet. You're ahead of most 3-bet ranges." },
      { id: "B", text: "Call", quality: "best", explanation: "Correct! Calling keeps in their bluffs and worse value hands. JJ plays well postflop and you have position." },
      { id: "C", text: "4-bet to $55", quality: "good", explanation: "4-betting is reasonable against some opponents, but against a tight player, calling preserves your range advantage." },
      { id: "D", text: "4-bet all-in", quality: "bad", explanation: "Shoving 100 BB with JJ is too aggressive. You turn your hand into a bluff against a tight range." }
    ],
    tags: ["preflop", "3-bet", "defense"]
  },
  {
    id: 4,
    title: "River Value Bet",
    difficulty: "intermediate",
    elo: 1200,
    scenario: {
      position: "Button",
      stackSize: "85 BB",
      blinds: "$1/$2",
      action: "Flop K♦ 9♣ 4♠, Turn 2♥, River 7♦. You bet flop and turn, villain called both. Pot: $48",
      hand: "K♠ Q♠",
      context: "Villain is a calling station. River checked to you."
    },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "Against a calling station with top pair good kicker, checking leaves money on the table." },
      { id: "B", text: "Bet $15 (30% pot)", quality: "good", explanation: "Betting is correct, but you can go bigger against a calling station who will pay off with worse kings and pairs." },
      { id: "C", text: "Bet $36 (75% pot)", quality: "best", explanation: "Correct! Against a calling station, maximize value with large bets. They'll call with K-worse, nines, and even pocket pairs." },
      { id: "D", text: "Bet $48 (pot)", quality: "good", explanation: "Pot-sized is slightly too large - even stations have limits. 75% extracts more value on average." }
    ],
    tags: ["postflop", "value-betting", "player-types"]
  },
  {
    id: 5,
    title: "Bluff Catching",
    difficulty: "intermediate",
    elo: 1250,
    scenario: {
      position: "Big Blind",
      stackSize: "92 BB",
      blinds: "$1/$2",
      action: "Button raised, you called. Board: Q♥ 8♠ 3♣ 4♦ 7♠. Villain bet all streets, river bet is $45 into $60.",
      hand: "Q♣ T♣",
      context: "Aggressive villain with high river bet frequency."
    },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Top pair is too strong to fold against an aggressive player. You beat all bluffs and many value hands." },
      { id: "B", text: "Call", quality: "best", explanation: "Correct! QT is a good bluff catcher here. Against an aggressive villain, you beat enough of their range to make this profitable." },
      { id: "C", text: "Raise to $120", quality: "worst", explanation: "Raising accomplishes nothing - you fold out bluffs and get called only by better hands." },
      { id: "D", text: "Raise all-in", quality: "worst", explanation: "Turning your hand into a bluff when you can win at showdown is a major mistake." }
    ],
    tags: ["postflop", "bluff-catching", "player-types"]
  },
  {
    id: 6,
    title: "Set Mining",
    difficulty: "beginner",
    elo: 1050,
    scenario: {
      position: "Big Blind",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "UTG raises to $6, folds to you",
      hand: "5♥ 5♦",
      context: "UTG is a tight player. Effective stacks 100 BB."
    },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "55 has implied odds to set mine. With 100 BB effective, we have the stack depth to call." },
      { id: "B", text: "Call", quality: "best", explanation: "Correct! With 100 BB deep, we have proper implied odds to set mine. We're getting 15:1+ implied when we hit." },
      { id: "C", text: "3-bet to $20", quality: "worst", explanation: "3-betting small pairs is a major leak. We turn our hand into a bluff that can't withstand a 4-bet." },
      { id: "D", text: "3-bet all-in", quality: "worst", explanation: "Catastrophic play. We're crushed by UTG's opening range." }
    ],
    tags: ["preflop", "implied-odds", "small-pairs"]
  },
  {
    id: 7,
    title: "Squeeze Play",
    difficulty: "intermediate",
    elo: 1300,
    scenario: {
      position: "Small Blind",
      stackSize: "75 BB",
      blinds: "$1/$2",
      action: "MP opens to $6, Button flat calls",
      hand: "A♦ K♦",
      context: "Both villains are recreational players who call too much."
    },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "AKs is premium. Folding is never correct in this spot." },
      { id: "B", text: "Call", quality: "bad", explanation: "Calling invites the BB and plays a multiway pot out of position. AKs wants isolation." },
      { id: "C", text: "3-bet to $28", quality: "best", explanation: "Correct! A squeeze to $28 isolates against weaker ranges. AKs plays great heads-up against recreational players." },
      { id: "D", text: "3-bet to $18", quality: "good", explanation: "Squeezing is right, but $18 is too small. With a caller already, you need to go larger to isolate effectively." }
    ],
    tags: ["preflop", "3-bet", "isolation"]
  },
  {
    id: 8,
    title: "Pot Control",
    difficulty: "intermediate",
    elo: 1200,
    scenario: {
      position: "UTG",
      stackSize: "90 BB",
      blinds: "$1/$2",
      action: "You raised, BB called. Flop: A♣ K♥ T♠ (Pot: $12). BB checks.",
      hand: "Q♠ Q♦",
      context: "Coordinated board with two overcards to your pair."
    },
    options: [
      { id: "A", text: "Check back", quality: "best", explanation: "Correct! On AKT, QQ is a bluff catcher. Checking controls pot size and induces bluffs from worse hands." },
      { id: "B", text: "Bet $4 (33% pot)", quality: "good", explanation: "Small bet is acceptable to deny equity, but checking is superior for pot control with a vulnerable hand." },
      { id: "C", text: "Bet $9 (75% pot)", quality: "bad", explanation: "Large bet builds a pot you don't want. Any A, K, T, or J has you in bad shape." },
      { id: "D", text: "Bet $12 (pot)", quality: "worst", explanation: "Pot-sized on this scary board turns QQ into a bluff. All better hands continue, worse hands fold." }
    ],
    tags: ["postflop", "pot-control", "made-hands"]
  },
  {
    id: 9,
    title: "Drawing Hand",
    difficulty: "beginner",
    elo: 1100,
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You called a CO raise. Flop: 9♥ 8♥ 2♣ (Pot: $14). CO bets $7.",
      hand: "T♥ J♥",
      context: "You have open-ended straight draw + flush draw (15 outs)."
    },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "With 15 outs (~54% equity), folding is a massive mistake. This is a monster draw." },
      { id: "B", text: "Call", quality: "good", explanation: "Calling is fine - you have great implied odds. But raising has more EV as a semi-bluff." },
      { id: "C", text: "Raise to $22", quality: "best", explanation: "Correct! Semi-bluff raising with 15 outs is highly +EV. You can win immediately or improve to the best hand." },
      { id: "D", text: "Raise all-in", quality: "bad", explanation: "All-in is too aggressive. A smaller raise applies pressure while keeping options open." }
    ],
    tags: ["postflop", "draws", "semi-bluff"]
  },
  {
    id: 10,
    title: "Blind vs Blind",
    difficulty: "intermediate",
    elo: 1250,
    scenario: {
      position: "Small Blind",
      stackSize: "50 BB",
      blinds: "$1/$2",
      action: "Folded to you in SB",
      hand: "K♦ 5♠",
      context: "BB is a tight player who folds too much to steals."
    },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "Against a tight BB, K5o has enough equity and fold equity to attack profitably." },
      { id: "B", text: "Limp", quality: "worst", explanation: "Limping shows weakness and lets a tight player see a free flop with their entire range." },
      { id: "C", text: "Raise to 2.5 BB", quality: "best", explanation: "Correct! K5o is a profitable steal against a tight BB. Small sizing keeps your bluffs cheap." },
      { id: "D", text: "Raise to 4 BB", quality: "good", explanation: "Raising is right, but 4 BB is unnecessarily large. 2-2.5 BB accomplishes the same with less risk." }
    ],
    tags: ["preflop", "stealing", "blinds"]
  },
  {
    id: 11,
    title: "Thin Value",
    difficulty: "advanced",
    elo: 1400,
    scenario: {
      position: "Cutoff",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "Heads up to river. Board: K♠ 7♥ 4♣ 2♦ 9♠ (Pot: $45). Villain checks.",
      hand: "K♣ 8♣",
      context: "Villain called flop and turn bets. Unknown player type."
    },
    options: [
      { id: "A", text: "Check back", quality: "good", explanation: "Safe play - K8 beats bluffs at showdown. But against unknown players, thin value is often correct." },
      { id: "B", text: "Bet $15 (33% pot)", quality: "best", explanation: "Correct! K8 is ahead of Kx with worse kickers, 7x, 4x, missed draws. Thin value extracts from second-best hands." },
      { id: "C", text: "Bet $35 (75% pot)", quality: "bad", explanation: "Too large for thin value. You only get called by better hands at this sizing." },
      { id: "D", text: "Bet $45 (pot)", quality: "worst", explanation: "Massive overbet turns your hand into a bluff. Terrible line with a hand that wants showdown value." }
    ],
    tags: ["postflop", "value-betting", "thin-value"]
  },
  {
    id: 12,
    title: "Multiway Pot",
    difficulty: "intermediate",
    elo: 1300,
    scenario: {
      position: "Button",
      stackSize: "80 BB",
      blinds: "$1/$2",
      action: "4 players to flop. Board: A♥ 7♥ 6♠ (Pot: $20). Checked to you.",
      hand: "8♥ 9♥",
      context: "You have a flush draw and gutshot (12 outs)."
    },
    options: [
      { id: "A", text: "Check back", quality: "best", explanation: "Correct! In multiway pots, draws should play passively. Too many players can have strong hands that won't fold." },
      { id: "B", text: "Bet $8 (40% pot)", quality: "bad", explanation: "Semi-bluffing multiway is a major leak. You'll rarely get enough folds to make this profitable." },
      { id: "C", text: "Bet $16 (80% pot)", quality: "worst", explanation: "Large bet into 4 players with a draw is burning money. Someone has an ace or better." },
      { id: "D", text: "Bet $6 (30% pot)", quality: "bad", explanation: "Even small bets multiway are unprofitable. Check and realize your equity cheaply." }
    ],
    tags: ["postflop", "multiway", "draws"]
  },
  {
    id: 13,
    title: "4-Bet Pot Decision",
    difficulty: "advanced",
    elo: 1450,
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$2/$5",
      action: "You opened $15, SB 3-bet to $55, you 4-bet to $130, SB shoves $500",
      hand: "A♠ K♠",
      context: "SB is aggressive but capable of 5-bet bluffing."
    },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "AKs is too strong to fold. You have great blockers and equity against even QQ+." },
      { id: "B", text: "Call", quality: "best", explanation: "Correct! With 100 BB effective, calling is optimal. You're getting good odds and have 40%+ equity vs their range." },
      { id: "C", text: "Tank then fold", quality: "bad", explanation: "This is just a slow fold. AKs should never be folded in this spot." },
      { id: "D", text: "Snap call", quality: "good", explanation: "Calling is right but snapping gives away information. Take your time to think through the hand." }
    ],
    tags: ["preflop", "4-bet", "all-in"]
  },
  {
    id: 14,
    title: "Short Stack Strategy",
    difficulty: "intermediate",
    elo: 1200,
    scenario: {
      position: "Button",
      stackSize: "20 BB",
      blinds: "$1/$2",
      action: "Folded to you",
      hand: "A♣ 9♦",
      context: "Tournament with antes. You're at 20 BB."
    },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "A9o is way too strong to fold on the button with 20 BB. You're missing profitable shove opportunities." },
      { id: "B", text: "Min-raise to $4", quality: "bad", explanation: "At 20 BB, raise/fold is a mistake. Either shove or fold (and A9o is definitely a shove)." },
      { id: "C", text: "Raise to $5", quality: "bad", explanation: "Still a raise/fold situation. With 20 BB, shoving is more profitable." },
      { id: "D", text: "All-in", quality: "best", explanation: "Correct! With 20 BB on the button, A9o is a mandatory shove. You have fold equity plus decent equity when called." }
    ],
    tags: ["preflop", "tournament", "short-stack"]
  },
  {
    id: 15,
    title: "River Bluff",
    difficulty: "advanced",
    elo: 1500,
    scenario: {
      position: "Button",
      stackSize: "85 BB",
      blinds: "$1/$2",
      action: "Heads up. Board: K♠ Q♣ 7♦ 3♥ 2♠ (Pot: $55). Villain checks river.",
      hand: "J♥ T♥",
      context: "You barreled flop and turn with a straight draw that missed. Villain called both."
    },
    options: [
      { id: "A", text: "Give up and check", quality: "good", explanation: "Giving up is reasonable. Villain called twice, showing strength. But a well-sized bluff can work here." },
      { id: "B", text: "Bet $20 (36% pot)", quality: "bad", explanation: "If you're bluffing, bet big enough to fold out marginal hands. Small bets get called too often." },
      { id: "C", text: "Bet $45 (82% pot)", quality: "best", explanation: "Correct! A large river bluff represents strong value hands. You need folds to profit, and big bets get more folds." },
      { id: "D", text: "Bet $55 (pot)", quality: "good", explanation: "Pot-sized works too, but $45 accomplishes the same fold equity more efficiently." }
    ],
    tags: ["postflop", "bluffing", "river"]
  },
  {
    id: 16,
    title: "Overpair Defense",
    difficulty: "intermediate",
    elo: 1350,
    scenario: {
      position: "UTG",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised, BTN called. Flop: 8♥ 5♣ 3♦ (Pot: $14). You bet $7, BTN raises to $24.",
      hand: "A♠ A♣",
      context: "Dry board with your overpair. Button is aggressive."
    },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding aces on 853? Never. You have a massive overpair on a dry board." },
      { id: "B", text: "Call", quality: "best", explanation: "Correct! Calling keeps in bluffs and worse hands. Re-raising folds out everything you beat." },
      { id: "C", text: "3-bet to $60", quality: "good", explanation: "Not terrible, but flatting is better. 3-betting folds out most bluffs and only gets action from sets." },
      { id: "D", text: "3-bet all-in", quality: "bad", explanation: "Shoving 100 BB over a small raise is a massive overreaction. You fold out everything worse." }
    ],
    tags: ["postflop", "overpairs", "defense"]
  },
  {
    id: 17,
    title: "Pocket Kings Preflop",
    difficulty: "beginner",
    elo: 1000,
    scenario: {
      position: "MP",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "UTG raises to $6",
      hand: "K♠ K♥",
      context: "Second best starting hand. UTG opened."
    },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding kings? This is one of the biggest mistakes possible in poker." },
      { id: "B", text: "Call", quality: "bad", explanation: "Slow-playing KK preflop is a major leak. You let hands catch up and build no value." },
      { id: "C", text: "3-bet to $20", quality: "best", explanation: "Correct! Always 3-bet KK for value. You want to build the pot and isolate against UTG's range." },
      { id: "D", text: "3-bet to $35", quality: "good", explanation: "3-betting is correct but $35 is slightly large. $18-22 is optimal sizing." }
    ],
    tags: ["preflop", "premium-hands", "3-bet"]
  },
  {
    id: 18,
    title: "Donk Bet Response",
    difficulty: "advanced",
    elo: 1400,
    scenario: {
      position: "Button",
      stackSize: "95 BB",
      blinds: "$1/$2",
      action: "You raised, BB called. Flop: T♠ 6♥ 2♣ (Pot: $14). BB leads $10.",
      hand: "A♣ A♦",
      context: "BB donk bets into the preflop raiser. Unusual line."
    },
    options: [
      { id: "A", text: "Fold", quality: "worst", explanation: "Folding aces to a donk bet on T62? This is giving up way too easily." },
      { id: "B", text: "Call", quality: "good", explanation: "Calling is reasonable to keep in bluffs, but raising extracts more value from worse made hands." },
      { id: "C", text: "Raise to $32", quality: "best", explanation: "Correct! Raising punishes the weak donk bet range. You get value from Tx, 6x, and draws." },
      { id: "D", text: "Raise to $55", quality: "bad", explanation: "Too large. You fold out all bluffs and worse hands, only getting action from sets." }
    ],
    tags: ["postflop", "donk-bet", "overpairs"]
  },
  {
    id: 19,
    title: "Double Barrel",
    difficulty: "intermediate",
    elo: 1300,
    scenario: {
      position: "Cutoff",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised, BB called. Flop A♥ 9♠ 4♣, you bet $6, called. Turn: K♦ (Pot: $26).",
      hand: "Q♦ J♦",
      context: "You have a gutshot and two overcards. BB checks."
    },
    options: [
      { id: "A", text: "Check back", quality: "bad", explanation: "Checking surrenders all fold equity. The K is a great scare card to barrel." },
      { id: "B", text: "Bet $10 (38% pot)", quality: "bad", explanation: "If you're betting, go larger. Small bets don't apply enough pressure to fold Ax." },
      { id: "C", text: "Bet $18 (70% pot)", quality: "best", explanation: "Correct! Double barrel the K scare card. This folds out 9x, pocket pairs, and even weak aces." },
      { id: "D", text: "Bet $26 (pot)", quality: "good", explanation: "Pot-sized works but is slightly too large. 60-70% pot is more efficient." }
    ],
    tags: ["postflop", "bluffing", "barrel"]
  },
  {
    id: 20,
    title: "Facing a Check-Raise",
    difficulty: "advanced",
    elo: 1450,
    scenario: {
      position: "Button",
      stackSize: "100 BB",
      blinds: "$1/$2",
      action: "You raised, SB called. Flop: J♥ T♣ 4♠ (Pot: $14). SB checks, you bet $8, SB raises to $28.",
      hand: "A♥ J♠",
      context: "SB check-raises on a coordinated board. You have top pair top kicker."
    },
    options: [
      { id: "A", text: "Fold", quality: "bad", explanation: "TPTK is too strong to fold to one raise. You beat many hands in their range." },
      { id: "B", text: "Call", quality: "best", explanation: "Correct! Calling keeps you in against bluffs and worse hands. 3-betting only gets called by better." },
      { id: "C", text: "3-bet to $75", quality: "bad", explanation: "3-betting turns your hand into a bluff. You fold out worse and get called by better." },
      { id: "D", text: "All-in", quality: "worst", explanation: "Shoving 100 BB with TPTK is massively over-aggressive. You're only called by hands that crush you." }
    ],
    tags: ["postflop", "check-raise", "defense"]
  }
]

// Helper function to get puzzles by difficulty
export function getPuzzlesByDifficulty(difficulty) {
  return puzzles.filter(p => p.difficulty === difficulty)
}

// Helper function to get a puzzle by ELO range
export function getPuzzlesByEloRange(minElo, maxElo) {
  return puzzles.filter(p => p.elo >= minElo && p.elo <= maxElo)
}

// Helper to get a random puzzle appropriate for player ELO
export function getNextPuzzle(playerElo, solvedPuzzleIds = []) {
  // Target puzzles slightly above or below player ELO for challenge
  const targetMin = playerElo - 150
  const targetMax = playerElo + 200
  
  // Filter to unsolved puzzles in range
  let candidates = puzzles.filter(
    p => !solvedPuzzleIds.includes(p.id) && 
         p.elo >= targetMin && 
         p.elo <= targetMax
  )
  
  // If no puzzles in range, expand search
  if (candidates.length === 0) {
    candidates = puzzles.filter(p => !solvedPuzzleIds.includes(p.id))
  }
  
  // If all puzzles solved, return any puzzle
  if (candidates.length === 0) {
    candidates = puzzles
  }
  
  // Return random puzzle from candidates
  return candidates[Math.floor(Math.random() * candidates.length)]
}

export default puzzles
