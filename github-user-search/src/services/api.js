// src/services/api.js
// Placeholder for GitHub API calls

import axios from 'axios'

// Create an axios instance
const api = axios.create({
  baseURL: 'https://api.github.com', // GitHub API base
})

// Example placeholder function
export const fetchUser = async (username) => {
  try {
    const response = await api.get(`/users/${username}`)
    return response.data
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}

export default api
