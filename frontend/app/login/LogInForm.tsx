"use client";

import DynamicForm from "@/components/DynamicForm";
import React from "react";
import * as z from "zod";
import { LogInFields } from "./LogInFields";
import { refreshToken, userLogin } from "@/lib/services/api/authService";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const LogInForm = () => {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    console.log("submit", data);

    try {
      const response = await userLogin(data);

      if (!response || response.error) {
        console.error("Login failed:", response?.error || "Unknown error");
        return;
      }

      console.log("Login successful:", response);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const LogInPageSchema = z.object({
    email: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  return (
    <div>
      <DynamicForm
        fields={LogInFields}
        schema={LogInPageSchema}
        onSubmit={handleSubmit}
      />
      <Button onClick={refreshToken}>REFRESH</Button>
    </div>
  );
};

export default LogInForm;
