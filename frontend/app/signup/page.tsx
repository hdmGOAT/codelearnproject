"use client";

import DynamicForm, { Field } from "@/components/DynamicForm";
import { Form, FormField } from "@/components/ui/form";
import { placeholder } from "@uiw/react-codemirror";
import React from "react";
import * as z from "zod";

const SignupPage = () => {
const fields: Field[] = [
  {
    name: "textInput",
    label: "Text Input",
    type: "text",
    placeholder: "Enter text...",
    defaultValue: "Hello, world!",
  },
  {
    name: "emailInput",
    label: "Email Input",
    type: "email",
    placeholder: "Enter your email...",
    defaultValue: "test@example.com",
  },
  {
    name: "passwordInput",
    label: "Password Input",
    type: "password",
    placeholder: "Enter password...",
    defaultValue: "",
  },
  {
    name: "selectInput",
    label: "Select Option",
    type: "select",
    placeholder: "Choose an option",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
  {
    name: "volume",
    label: "Adjust Volume",
    type: "range",
    options: { min: 0, max: 100, step: 5 },
  },

  {
    name: "radioInput",
    label: "Choose a Plan",
    type: "radio",
    options: [
      { label: "Basic", value: "basic" },
      { label: "Premium", value: "premium" },
      { label: "Enterprise", value: "enterprise" },
    ],
  },
  {
    name: "fileInput",
    label: "Upload File",
    type: "file",
    placeholder: "Choose a file...",
  },
];


  const SignupPageSchema = z.object({
    test: z.string().min(2, "tset"),
  });

  return (
    <div>
      <DynamicForm
        fields={fields}
        onSubmit={() => {}}
        schema={SignupPageSchema}
      />
    </div>
  );
};

export default SignupPage;
