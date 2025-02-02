"use client";

import DynamicForm, { Field, Step } from "@/components/DynamicForm";
import { Form, FormField } from "@/components/ui/form";
import { placeholder } from "@uiw/react-codemirror";
import React from "react";
import * as z from "zod";

const SignupPage = () => {
  const multiStepFields: Step[] = [
    {
      title: "Step 1: Personal Information",
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          placeholder: "Enter first name",
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
          placeholder: "Enter last name",
        },
      ],
    },
    {
      title: "Step 2: Account Details",
      fields: [
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      ],
    },
    {
      title: "Step 3: Preferences",
      fields: [
        {
          name: "notifications",
          label: "Receive Notifications",
          type: "switch",
        },
      ],
    },
  ];

  const SignupPageSchema = z.object({
    test: z.string().min(2, "tset"),
  });

  return (
    <div>
      <DynamicForm
        fields={multiStepFields}
        onSubmit={() => {}}
        schema={SignupPageSchema}
      />
    </div>
  );
};

export default SignupPage;
