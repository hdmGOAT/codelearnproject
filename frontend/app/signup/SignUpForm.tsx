"use client";
import DynamicForm from "@/components/DynamicForm";
import React from "react";
import { SignUpFields } from "./SignUpFields";
import * as z from "zod";
import { userRegister } from "@/lib/services/api/authService";

const SignUpForm = () => {
  const SignupPageSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    notifications: z.boolean().optional(), // Switch field, not required
  });

  const handleSubmit = async (data: any) => {
    console.log("Submitting form...");

    try {
      console.log("Form Data:", data);
      userRegister(data);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

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
