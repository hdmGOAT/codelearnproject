import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // ✅ Ensures cookies are sent and received
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Remove Authorization header from localStorage (Django will handle via cookies)
apiClient.interceptors.request.use(
  (config) => {
    // The server will handle authentication via HttpOnly cookies, so no need for manual tokens
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
