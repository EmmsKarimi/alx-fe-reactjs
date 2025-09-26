// src/services/githubService.js
import axios from 'axios'

// Function to fetch GitHub user data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data
  } catch (error) {
    throw error
  }
}
