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
import {
  Field,
  Step,
  RangeOptions,
  SelectOptions,
} from "@/types/dynamicFormTypes";

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

  const [step, setStep] = React.useState(0); // Track current step

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {isMultiStep ? (
            <>
              <h2 className="text-xl font-semibold mb-4">
                {(fields as Step[])[step].title}
              </h2>
              {(fields as Step[])[step].fields.map(renderField)}

              <div className="flex justify-between mt-4">
                {step > 0 && (
                  <Button type="button" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}
                {step < (fields as Step[]).length - 1 ? (
                  <Button
                    type="button"
                    onClick={async () => {
                      const isValid = await form.trigger(
                        (fields as Step[])[step].fields.map((f) => f.name) // Validate current step fields
                      );
                      if (isValid) setStep(step + 1); // Only go to the next step if valid
                    }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button type="submit">Submit</Button>
                )}
              </div>
            </>
          ) : (
            <div>
              {(fields as Field[]).map(renderField)}
              <Button type="submit">Submit</Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default DynamicForm;
