import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css' // ✅ Make sure this imports Tailwind
// You can remove './App.css' if not needed anymore

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="flex gap-6 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-16 hover:scale-110 transition-transform duration-200" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-16 hover:scale-110 transition-transform duration-200" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Vite + React + Tailwind 🎉
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          count is {count}
        </button>
        <p className="mt-3 text-sm text-gray-600">
          Edit <code className="bg-gray-200 px-1 py-0.5 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
