import { get } from "http";
import apiClient from "./apiClient";
import axios from "axios";


export const userRegister = async (formData: {
  username: string;
  email: string;
  display_name: string;
  password1: string;
  password2: string;
}) => {
  try {
    const response = await apiClient.post("/auth/registration/", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("✅ Registration successful:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "❌ Registration failed:",
      error.response?.data?.message || error
    );

    return { error: error.response?.data || "Unknown error" };
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
  if (!token) {
    console.error("❌ No token provided for verification.");
    return null;
  }

  try {
    const response = await apiClient.post(
      "/auth/token/verify/",
      { token }, // ✅ Ensure correct JSON payload
      {
        withCredentials: true, // ✅ Sends cookies if needed
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Token verification successful:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "❌ Token verification failed:",
      error.response?.data || error
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

