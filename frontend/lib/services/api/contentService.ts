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

export const getCourses = async () => {
  try {
    const response = await apiClient.get("/courses");
    return response.data;
  } catch (error) {
    console.error("Error getting courses: ", error);
  }
};

export const getCourse = async (id: string) => {
  try {
    const response = await apiClient.get(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting course: ", error);
  }
};

export const addCourse = async (course: any) => {
  try {
    const response = await apiClient.post("/courses", course);
    return response.data;
  } catch (error) {
    console.error("Error adding course: ", error);
  }
};

export const deleteCourse = async (id: string) => {
  try {
    const response = await apiClient.delete(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting course: ", error);
  }
};

export const updateCourse = async (id: string, course: any) => {
  try {
    const response = await apiClient.put(`/courses/${id}`, course);
    return response.data;
  } catch (error) {
    console.error("Error updating course: ", error);
  }
};



// MODULES

// CONTENT
