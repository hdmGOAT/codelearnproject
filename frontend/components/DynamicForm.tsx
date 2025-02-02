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
import { format } from "date-fns";
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
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Slider } from "./ui/slider";

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
    | "textarea"
    | "select"
    | "checkbox"
    | "radio"
    | "file" //
    | "date"
    | "datetime-local" //
    | "month" //
    | "week" //
    | "time" //
    | "range"
    | "color" //
    | "switch"
    | "hidden";
  placeholder?: string;
  options?: SelectOptions[] | RangeOptions;
  defaultValue?: string | boolean;
}

interface SelectOptions {
  label: string;
  value: string;
}

interface RangeOptions {
  min: number;
  max: number;
  step: number;
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
            {(field.options as SelectOptions[])?.map((op, index) => (
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
        {(field.options as SelectOptions[])?.map((op) => (
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

  const renderDate = (field: Field, formField: any) => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className="w-[240px] justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formField.value
              ? format(new Date(formField.value), "PPP")
              : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={formField.value ? new Date(formField.value) : undefined}
            onSelect={(date) => formField.onChange(date?.toISOString())} // ✅ Updates form state
            initialFocus
          />
        </PopoverContent>
      </Popover>
    );
  };

  const renderRange = (field: Field, formField: any) => {
    const { min, max, step } = (field.options as RangeOptions) || {
      min: 0,
      max: 100,
      step: 1,
    };

    return (
      <div className="flex flex-col items-center space-y-2">
        <span className="text-sm font-medium">{formField.value ?? min}</span>

        <Slider
          value={[formField.value ?? min]}
          min={min}
          max={max}
          step={step}
          onValueChange={(value) => formField.onChange(value)}
        />
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
              ) : field.type === "switch" ? (
                renderSwitch(field, formField)
              ) : field.type === "date" ? (
                renderDate(field, formField)
              ) : field.type === "range" ? (
                renderRange(field, formField)
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
