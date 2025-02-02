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
  console.log("🚀 Submitting form...");

  try {
    console.log("📌 Form Data:", data);

    const response = await userRegister(data); // ✅ Ensure this is awaited

    if (!response || response.error) {
      console.error(
        "❌ Registration failed:",
        response?.error || "Unknown error"
      );

      alert(
        `⚠️ Registration failed: ${response?.error || "Please try again."}`
      );
      return; // 🚨 Prevent redirect if registration fails
    }

    console.log("✅ Registration successful:", response);
    router.push("/dashboard"); // ✅ Only redirect if registration is successful
  } catch (error: any) {
    console.error("❌ Submission error:", error);

    // If API response contains error details
    if (error.response) {
      console.error("🔍 API Error Details:", error.response.data);
      alert(
        `⚠️ Error: ${error.response.data?.message || "Something went wrong!"}`
      );
    } else {
      alert("⚠️ Network error. Please check your connection.");
    }
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
