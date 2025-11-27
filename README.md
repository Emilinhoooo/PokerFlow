# PokerFlow 🃏

**Chess.com puzzles meets Duolingo for poker.** Train your poker decision-making skills through interactive puzzles with an ELO rating system.

![PokerFlow](https://img.shields.io/badge/version-1.0.0--beta-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- 🎯 **20 Poker Puzzles** - Pre-flop, post-flop, and advanced scenarios
- 📊 **ELO Rating System** - Track your progress with chess-style ratings
- 🔥 **Streak Tracking** - Maintain daily streaks for motivation
- 📱 **Mobile Responsive** - Works great on desktop and mobile
- 🎨 **Poker-themed UI** - Beautiful felt green design with card animations
- 💾 **Progress Persistence** - Save progress with Supabase or localStorage

## Quick Start

### Option 1: Demo Mode (No Setup Required)

The app works immediately in demo mode - just run it and start playing! Progress saves to your browser's localStorage.

```bash
# Clone the repo
git clone https://github.com/yourusername/pokerflow.git
cd pokerflow

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 and start training!

### Option 2: Full Setup with Supabase

For persistent user accounts and multi-device sync:

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Run the database schema**
   - Go to SQL Editor in your Supabase dashboard
   - Copy contents of `supabase/schema.sql`
   - Run the SQL

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Start the app**
   ```bash
   npm run dev
   ```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Add environment variables in Site Settings
5. Deploy!

## Project Structure

```
pokerflow/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navigation.jsx
│   │   ├── PlayingCard.jsx
│   │   ├── PuzzleCard.jsx
│   │   ├── OptionButton.jsx
│   │   ├── FeedbackPanel.jsx
│   │   └── ELODisplay.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Play.jsx
│   │   ├── Profile.jsx
│   │   ├── Login.jsx
│   │   └── Admin.jsx
│   ├── hooks/           # Custom React hooks
│   │   └── useAuth.jsx  # Auth context & state management
│   ├── lib/             # Utilities
│   │   ├── supabase.js  # Supabase client
│   │   └── elo.js       # ELO calculations
│   ├── data/            # Static data
│   │   └── puzzles.js   # Puzzle database
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── supabase/
│   └── schema.sql       # Database schema
├── public/
│   └── favicon.svg
├── package.json
├── vite.config.js
├── tailwind.config.js
├── vercel.json
├── netlify.toml
└── README.md
```

## Adding New Puzzles

### Using the Admin Panel

1. Navigate to `/admin` in your running app
2. Fill out the puzzle form:
   - Title, difficulty, and target ELO
   - Scenario details (position, stack, hand, action)
   - Four answer options with quality ratings
3. Click "Generate JSON"
4. Copy the JSON and add it to `src/data/puzzles.js`

### Manual Addition

Add puzzles directly to `src/data/puzzles.js`:

```javascript
{
  id: 21, // Unique ID
  title: "Your Puzzle Title",
  difficulty: "intermediate", // beginner, intermediate, advanced, expert
  elo: 1250, // Target ELO difficulty
  scenario: {
    position: "Button",
    stackSize: "100 BB",
    blinds: "$1/$2",
    action: "Describe the action here",
    hand: "A♠ K♦", // Use unicode suits
    context: "Optional context about opponents"
  },
  options: [
    { id: "A", text: "Option A", quality: "best", explanation: "Why this is best" },
    { id: "B", text: "Option B", quality: "good", explanation: "Why this is okay" },
    { id: "C", text: "Option C", quality: "bad", explanation: "Why this is bad" },
    { id: "D", text: "Option D", quality: "worst", explanation: "Why this is worst" }
  ],
  tags: ["preflop", "position", "value-betting"]
}
```

### Quality Ratings

- `best` - Optimal play, full ELO gain
- `good` - Acceptable, small ELO gain
- `bad` - Suboptimal, small ELO loss
- `worst` - Major mistake, larger ELO loss

## ELO System

The ELO system is adapted from chess ratings:

- **Starting ELO**: 1200
- **Correct answer**: +5 to +20 ELO (based on puzzle difficulty)
- **Wrong answer**: -5 to -12 ELO
- **Minimum ELO**: 100

### Ranks

| ELO Range | Rank |
|-----------|------|
| < 1000 | Fish |
| 1000-1099 | Novice |
| 1100-1199 | Amateur |
| 1200-1299 | Regular |
| 1300-1399 | Skilled |
| 1400-1499 | Veteran |
| 1500-1599 | Expert |
| 1600-1699 | Master |
| 1700-1799 | Grandmaster |
| 1800+ | Poker Legend |

## Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Auth + Database)
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Adding Puzzles

We'd love more puzzles! When submitting puzzle contributions:
- Ensure scenarios are realistic
- Provide clear explanations
- Balance difficulty appropriately
- Use proper poker terminology

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- Inspired by [Chess.com](https://chess.com) puzzle training
- UI inspired by poker felt aesthetics
- ELO system adapted from chess ratings

---

**Built with ♠️ by poker enthusiasts**
