import { Step } from "@/types/dynamicFormTypes";

export const CreateCourseFields: Step[] = [
  {
    title: "Create Course",
    fields: [
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
    ],
  },
];
