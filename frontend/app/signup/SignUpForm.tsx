"use client";
import DynamicForm from "@/components/DynamicForm";
import React from "react";
import { SignUpFields } from "./SignUpFields";
import * as z from "zod";
import { userRegister } from "@/lib/services/api/authService";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();

  const SignupPageSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    password1: z.string().min(6, "Password must be at least 6 characters"),
    password2: z.string().min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = async (data: any) => {
    console.log("Submitting form...");

    try {
      console.log("Form Data:", data);
      userRegister(data);
      router.push("/dashboard");
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
