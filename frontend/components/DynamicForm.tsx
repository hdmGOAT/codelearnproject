/*
Reusable Form component that can support multipage, as well as get readyu for api calls


*/
'use client';

import React from "react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { format } from "path";

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "select" | "checkbox" | "radio";
  placeholder?: string;
  options?: { label: string; value: string }[];
  defaultValue?: string | boolean;
}

interface Step {
  title: string;
  fields: Field[];
}

interface DynamicFormProps {
  fields: Field[] | Step[]; // Supports both single & multi-step forms
  schema: any; // Zod schema for validation
  onSubmit: (data: any) => void; // Function to handle form submission
  submitText?: string;
  isMultiStep?: boolean;
}

const DynamicForm = ({}: DynamicFormProps) => {

  return <div>
    <Form {...Form}>
      <form onSubmit={format}
    </Form>
  </div>;
};

export default DynamicForm;
