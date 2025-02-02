import apiClient from "./apiClient";

export const fetchUsers = async () => {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users: ", error);
  }
};

export const fetchUserById = async (id: string) => {
  try {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by id: ", error);
  }
};
