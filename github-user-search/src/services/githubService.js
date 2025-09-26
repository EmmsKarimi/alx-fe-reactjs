import axios from "axios";

// 🔹 Basic search (single user by username)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 🔹 Advanced search (username + location + min repos)
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    // Build the query string
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data.items; // GitHub returns items array
  } catch (error) {
    throw error;
  }
};
