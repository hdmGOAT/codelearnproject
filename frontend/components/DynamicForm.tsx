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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export interface Field {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "textarea" //
    | "select"
    | "checkbox"
    | "radio"
    | "file" //
    | "date" //
    | "datetime-local" //
    | "month" //
    | "week" //
    | "time" //
    | "range" //
    | "color" //
    | "switch"
    | "hidden";
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

  const renderSelect = (field: Field, formField: any) => {
    return (
      <Select
        onValueChange={formField.onChange}
        defaultValue={formField.value as string}
      >
        <SelectTrigger>
          <SelectValue placeholder={field.placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{field.label}</SelectLabel>
            {field.options?.map((op, index) => (
              <SelectItem key={index} value={op.value}>
                {op.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  };

  const renderRadio = (field: Field, formField: any) => {
    return (
      <RadioGroup
        onValueChange={formField.onChange}
        defaultValue={formField.value as string}
      >
        {field.options?.map((op) => (
          <div key={op.label} className="flex items-center space-x-2">
            <RadioGroupItem id={op.label} value={op.value} />
            <Label htmlFor={op.label}>{op.label}</Label>
          </div>
        ))}
      </RadioGroup>
    );
  };

  const renderSwitch = (field: Field, formField: any) => {
    return (
      <div className="">
        <Switch
          id={field.name}
          checked={Boolean(formField.value)}
          onCheckedChange={formField.onChange}
        />
        <Label htmlFor={field.name}>{field.label}</Label>
      </div>
    );
  };

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
                renderSelect(field, formField)
              ) : field.type === "radio" ? (
                renderRadio(field, formField)
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
