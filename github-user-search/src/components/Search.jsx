// src/components/SearchBar.jsx
import { useState } from 'react'
import { fetchUserData } from '../services/githubService'

function SearchBar() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username) return
    setLoading(true)
    setError(null)
    setUser(null)

    try {
      const data = await fetchUserData(username)
      setUser(data)
    } catch (err) {
      setError('Looks like we can’t find the user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: '8px', width: '250px' }}
        />
        <button type="submit" style={{ marginLeft: '8px', padding: '8px 12px' }}>
          Search
        </button>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div style={{ marginTop: '16px' }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  )
}

export default SearchBar
