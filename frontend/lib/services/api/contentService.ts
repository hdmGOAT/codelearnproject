import apiClient from "./apiClient";

// TAGS

export const getTags = async () => {
  try {
    const response = await apiClient.get("/tags");
    return response.data;
  } catch (error) {
    console.error("Error getting tags: ", error);
  }
};

export const addTag = async (tag: string) => {
  try {
    const response = await apiClient.post("/tags", { tag });
    return response.data;
  } catch (error) {
    console.error("Error adding tag: ", error);
  }
};

export const deleteTag = async (tag: string) => {
  try {
    const response = await apiClient.delete(`/tags/${tag}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting tag: ", error);
  }
};

export const updateTag = async (tag: string, newTag: string) => {
  try {
    const response = await apiClient.put(`/tags/${tag}`, { tag: newTag });
    return response.data;
  } catch (error) {
    console.error("Error updating tag: ", error);
  }
};

// COURSES

// MODULES

// CONTENT
