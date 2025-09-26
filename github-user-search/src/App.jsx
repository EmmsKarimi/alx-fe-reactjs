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
        <p>Project setup successful 🚀</p>
        <p>Next step: Build components and integrate GitHub API</p>
      </main>
    </div>
  )
}

export default App
