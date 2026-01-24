import { useState } from 'react'
import Day1Before from './components/Day1Before'
import Day1After from './components/Day1After'
import Day2Before from './components/Day2Before'
import Day2After from './components/Day2After'
import Day3Before from './components/Day3Before'
import Day3After from './components/Day3After'
import Day4Before from './components/Day4Before'
import Day4After from './components/Day4After'
import Day5Before from './components/Day5Before'
import Day5After from './components/Day5After'

function App() {
  const [currentView, setCurrentView] = useState('Day1Before')

  const renderView = () => {
    switch (currentView) {
      case 'Day1Before': return <Day1Before />
      case 'Day1After': return <Day1After />
      case 'Day2Before': return <Day2Before />
      case 'Day2After': return <Day2After />
      case 'Day3Before': return <Day3Before />
      case 'Day3After': return <Day3After />
      case 'Day4Before': return <Day4Before />
      case 'Day4After': return <Day4After />
      case 'Day5Before': return <Day5Before />
      case 'Day5After': return <Day5After />
      default: return <Day1Before />
    }
  }

  const buttons = [
    { id: 'Day1Before', label: 'Day1 Before' },
    { id: 'Day1After', label: 'Day1 After' },
    { id: 'Day2Before', label: 'Day2 Before' },
    { id: 'Day2After', label: 'Day2 After' },
    { id: 'Day3Before', label: 'Day3 Before' },
    { id: 'Day3After', label: 'Day3 After' },
    { id: 'Day4Before', label: 'Day4 Before' },
    { id: 'Day4After', label: 'Day4 After' },
    { id: 'Day5Before', label: 'Day5 Before' },
    { id: 'Day5After', label: 'Day5 After' },
  ]

  return (
    <div className="app-container">
      <header className="nav-section">
        <nav className="nav-bar">
          {buttons.map(btn => (
            <button
              key={btn.id}
              onClick={() => setCurrentView(btn.id)}
              className={`nav-button ${currentView === btn.id ? 'active' : ''}`}
            >
              {btn.label}
            </button>
          ))}
        </nav>
        <div className="lab-loop">
          Lab loop: Problem → Measure → Hypothesis → Fix → Verify
        </div>
      </header>
      <main className="content">
        {renderView()}
      </main>
    </div>
  )
}

export default App
