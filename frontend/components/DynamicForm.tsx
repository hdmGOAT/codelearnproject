/*
Reusable Form component that can support multipage, as well as get readyu for api calls


*/
'use client';

import React from "react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
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


const DynamicForm = ({ schema, fields, onSubmit }: DynamicFormProps) => {
  const isMultiStep =
    Array.isArray(fields) && fields.every((f) => "title" in f);

  const form = useForm({
    resolver: zodResolver(schema),

    defaultValues: Object.fromEntries(
      (isMultiStep
        ? (fields as Step[]).flatMap((s) => s.fields)
        : (fields as Field[])
      ).map((f) => [f.name, f.defaultValue || ""])
    ),
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField />
        </form>
      </Form>
    </div>
  );
};

export default DynamicForm;
