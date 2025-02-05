"use client";

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
    <div className="flex min-h-screen w-full">
      <DynamicForm
        fields={CreateCourseFields}
        schema={CreateCourseSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateCourseForm;
