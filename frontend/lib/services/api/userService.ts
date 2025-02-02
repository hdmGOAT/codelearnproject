import apiClient from "./apiClient";

export const fetchUsers = async () => {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users: ", error);
  }
};
