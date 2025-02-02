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
