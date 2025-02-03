import apiClient from "./apiClient";

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
      "Registration failed:",
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
    console.error("No token provided for verification.");
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
    console.error("Token verification failed:", error.response?.data || error);
    return null;
  }
};

export const refreshToken = async () => {
  console.log("🔄 Refreshing access token...");

  try {
    const response = await apiClient.post(
      "/auth/token/refresh/",
      {},
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Token refreshed:", response.data.access);
    return response.data.access;
  } catch (error) {
    console.error(
      "Failed to refresh token:",
      (error as any).response?.data || (error as any).message
    );
    return null;
  }
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function middlewareRefresh(refresh: string) {
  console.log("Refreshing access token in middleware...");

  try {
    const response = await fetch(`${API_BASE_URL}/auth/token/refresh/`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh }), // Send empty body
    });

    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Token refreshed:", data.access);
    return data.access;
  } catch (error) {
    console.error("Middleware token refresh failed:", error);
    return null;
  }
}

export async function middlewareVerify(auth: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/token/verify/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ auth }),
    });

    const data = await response.json();

    console.log("Token verification successful:", data);
    return data;
  } catch (error: any) {
    console.error("Token verification failed:", error.response?.data || error);
    return null;
  }
}

