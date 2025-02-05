import DynamicForm from "@/components/DynamicForm";
import React from "react";
import { CreateCourseFields } from "./CreateCourseFields";

import * as z from "zod";

const handleSubmit = (data: any) => {
  console.log(data);
};

const CreateCourseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

const CreateCourseForm = () => {
  return (
    <DynamicForm
      fields={CreateCourseFields}
      schema={CreateCourseSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default CreateCourseForm;
