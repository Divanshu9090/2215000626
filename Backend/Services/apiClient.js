const axios = require("axios");
const BASE_URL = "http://20.244.56.144/evaluation-service";

exports.fetchData = async (endpoint, token) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.get(`${BASE_URL}${endpoint}`, { headers });
    return response.data;
  } catch (err) {
    console.error(`Error fetching ${endpoint}:`, err.message); // 🐛
    throw new Error(`Failed to fetch ${endpoint}`);
  }
};
