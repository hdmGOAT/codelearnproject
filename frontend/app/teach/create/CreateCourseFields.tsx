import { Field, Step } from "@/types/dynamicFormTypes";

export const CreateCourseFields: Field[] = [
  {
    name: "title",
    label: "Course Title",
    type: "text",
  },
  {
    name: "description",
    label: "Course Description",
    type: "rich-text",
  },
  {
    name: "thumbnail",
    label: "Course Thumbnail",
    type: "file",
  },
];
