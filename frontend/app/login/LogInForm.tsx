"use client";

import DynamicForm from "@/components/DynamicForm";
import React from "react";
import * as z from "zod";
import { LogInFields } from "./LogInFields";
import { userLogin } from "@/lib/services/api/authService";

const LogInForm = () => {
  const handleSubmit = async (data: any) => {
    console.log("submit", data);

    try {
      await userLogin(data);
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const LogInPageSchema = z.object({
    email: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  return (
    <DynamicForm
      fields={LogInFields}
      schema={LogInPageSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default LogInForm;
