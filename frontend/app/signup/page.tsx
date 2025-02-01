"use client";

import DynamicForm from "@/components/DynamicForm";
import { Form, FormField } from "@/components/ui/form";
import { placeholder } from "@uiw/react-codemirror";
import React from "react";
import * as z from "zod";

const SignupPage = () => {
  const fields = [
    {
      name: "test",
      label: "test",
      type: "text" as "text",
      placeholder: "test",
      options: [
        {
          label: "test",
          value: "test",
        },
      ],
    },
    {
      name: "gay",
      label: "test",
      type: "text" as "text",
      placeholder: "test",
      options: [
        {
          label: "test",
          value: "test",
        },
      ],
    },
    {
      name: "bruh",
      label: "test",
      type: "text" as "text",
      placeholder: "test",
      options: [
        {
          label: "test",
          value: "test",
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
        fields={fields}
        onSubmit={() => {}}
        schema={SignupPageSchema}
      />
    </div>
  );
};

export default SignupPage;
