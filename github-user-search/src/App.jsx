// src/App.jsx
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <SearchBar />
      </main>
    </div>
  )
}

export default App
