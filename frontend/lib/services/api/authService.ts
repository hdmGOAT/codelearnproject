import { get } from "http";
import apiClient from "./apiClient";
import axios from "axios";
import { getCookie } from "@/lib/utils/CookieUtils";

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
    const response = await apiClient.post("/auth/token/verify/", { token });
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
    const response: { data: { access: string } } = await apiClient.post(
      "/auth/token/refresh/",
      {
        refresh: getCookie("jwt-refresh"),
      }
    );

    return response.data.access;
  } catch (error) {
    console.error(
      "Error refreshing token:",
      (error as any).response?.data || error
    );
    return null;
  }
};
