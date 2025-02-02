import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // ✅ Ensures cookies are sent and received
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
