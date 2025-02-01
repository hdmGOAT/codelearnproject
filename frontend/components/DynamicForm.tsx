/*
Reusable Form component that can support multipage, as well as get readyu for api calls


*/
'use client';

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "path";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Select } from "./ui/select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

export interface Field {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "select"
    | "checkbox"
    | "radio"
    | "file";
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

  const renderField = (field: Field) => {
    return (
      <FormField
        key={field.name}
        control={form.control}
        name={field.name}
        render={({ field: formField }) => (
          <FormItem>
            <FormLabel>{field.label}</FormLabel>
            <FormControl>
              {field.type === "checkbox" ? (
                <Checkbox
                  checked={Boolean(formField.value)}
                  onCheckedChange={formField.onChange}
                />
              ) : field.type === "select" ? (
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="">
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  {...formField}
                  value={
                    typeof formField.value === "boolean"
                      ? ""
                      : formField.value ?? ""
                  }
                  type={field.type}
                  placeholder={field.placeholder || ""}
                />
              )}
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {(fields as Field[]).map(renderField)}
        </form>
      </Form>
    </div>
  );
};

export default DynamicForm;
