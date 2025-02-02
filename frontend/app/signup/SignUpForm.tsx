"use client";
import DynamicForm from "@/components/DynamicForm";
import React from "react";
import { SignUpFields } from "./SignUpFields";
import * as z from "zod";

const SignUpForm = () => {
  const SignupPageSchema = z.object({
    test: z.string().min(2, "tset"),
  });

  const handleSubmit = () => {};

  return (
    <div className="w-full">
      <DynamicForm
        fields={SignUpFields}
        schema={SignupPageSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignUpForm;
