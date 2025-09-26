// src/components/SearchBar.jsx
function SearchBar() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username"
          style={{ padding: '8px', width: '250px' }}
        />
        <button style={{ marginLeft: '8px', padding: '8px 12px' }}>
          Search
        </button>
      </div>
    )
  }
  
  export default SearchBar
  