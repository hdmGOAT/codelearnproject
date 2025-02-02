import { get } from "http";
import apiClient from "./apiClient";
import axios from "axios";


export const userRegister = async (data: any) => {
  try {
    const response = await apiClient.post("/auth/registration/", data);
    return response.data;
  } catch (error) {
    console.error("Error signing up: ", error);
  }
};

export const userLogin = async (data: any) => {
  try {
    const response = await apiClient.post("/auth/login/", data);
    return response.data;
  } catch (error) {
    console.error("Error logging in: ", error);
  }
};

export const verifyToken = async (token: string) => {
  try {
    const response = await apiClient.post(
      "/auth/token/verify/",
      {},
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Token verification failed:",
      (error as any).response?.data || error
    );
    return null;
  }
};

export const refreshToken = async () => {
  console.log("🔄 Refreshing access token...");

  try {
    const response = await apiClient.post(
      "/auth/token/refresh/",
      {}, // Empty body (Django reads refresh token from cookie)
      {
        withCredentials: true, // ✅ Ensures HTTP-only cookie is sent
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Token refreshed:", response.data.access);
    return response.data.access;
  } catch (error) {
    console.error(
      "❌ Failed to refresh token:",
      (error as any).response?.data || (error as any).message
    );
    return null;
  }
};

