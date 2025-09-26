import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    try {
      const data = await fetchUserData(username); // ✅ still using fetchUserData
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    try {
      const data = await searchUsers({ username, location, minRepos });
      setResults(data);
    } catch (err) {
      setError("Something went wrong with advanced search");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>

      {/* Basic Search */}
      <form onSubmit={handleBasicSearch} className="mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {/* Advanced Search */}
      <form onSubmit={handleAdvancedSearch} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Advanced Search
        </button>
      </form>

      {/* Status */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Basic Search Result */}
      {user && (
        <div className="border p-4 rounded mb-4">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <p className="font-bold">{user.login}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}

      {/* Advanced Search Results */}
      {results.length > 0 && (
        <div>
          <h3 className="font-bold mb-2">Search Results:</h3>
          <ul className="space-y-4">
            {results.map((u) => (
              <li key={u.id} className="border p-3 rounded flex items-center space-x-4">
                <img src={u.avatar_url} alt={u.login} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold">{u.login}</p>
                  <a
                    href={u.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
