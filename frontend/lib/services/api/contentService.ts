import apiClient from "./apiClient";
import jwt from "jsonwebtoken";
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

export const createCourse = async (data: any) => {
  try {
    const response = await apiClient.post("/courses", data);
    return response.data;
  } catch (error) {
    console.error("Error creating course: ", error);
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



// MODULES

export const getCourseModules = async (courseId: string) => {
  try {
    const response = await apiClient.get(`/courses/${courseId}/modules/`);
    return response.data;
  } catch (error) {
    console.error("Error getting course modules: ", error);
  }
};

export const getOneCourseModule = async (
  courseId: string,
  moduleId: string
) => {
  try {
    const response = await apiClient.get(
      `/courses/${courseId}/modules/${moduleId}`
    );

    return response.data;
  } catch (err) {
    console.error("Error fetching module: ", err);
  }
};

export const createCourseModule = async (courseId: string, data: Module) => {
  try {
    const response = await apiClient.post(`/courses/${courseId}/modules/`, {
      ...data,
      course: courseId,
    });
  } catch (err) {
    console.error("error creating course module: ", err);
  }
};

// CONTENT

export const getModuleContent = async (courseId: string, moduleId: string) => {
  try {
    const response = await apiClient.get(
      `/courses/${courseId}/modules/${moduleId}/content`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting module content: ", error);
  }
};

export const getOneContent = async (
  courseId: string,
  moduleId: string,
  contentId: string
) => {
  try {
    const response = await apiClient.get(
      `/courses/${courseId}/modules/${moduleId}/content/${contentId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting content: ", error);
  }
};

export const addContent = async (
  courseId: string,
  moduleId: string,
  data: any
) => {
  try {
    const response = await apiClient.post(
      `/courses/${courseId}/modules/${moduleId}/content`,
      { ...data, module: moduleId }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding content: ", error);
  }
};
