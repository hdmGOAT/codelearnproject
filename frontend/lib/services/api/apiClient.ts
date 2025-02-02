import { deleteCookie, getCookie, setCookie } from "@/lib/utils/CookieUtils";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // ✅ Ensures cookies are sent and received
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = getCookie("jwt-auth"); // Access token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        console.log("🔄 Refreshing access token...");

        const { data } = await axios.post(
          `${API_BASE_URL}auth/token/refresh/`,
          {},
          { withCredentials: true }
        );

        setCookie("jwt-auth", data.access, 5);

        originalRequest.headers.Authorization = `Bearer ${data.access}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error("🔒 Refresh token invalid. Redirecting to login.");
        deleteCookie("jwt-auth"); // Remove invalid access token
        deleteCookie("jwt-refresh"); // Remove invalid refresh token
        window.location.href = "/login"; // Redirect if refresh fails
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
