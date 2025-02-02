import { Field, Step } from "@/types/dynamicFormTypes";

export const SignUpFields: Field[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter chosen email",
  },
  {
    name: "username",
    label: "Give a unique username",
    type: "text",
    placeholder: "Enter username",
  },
  {
    name: "display_name",
    label: "Give a Display Name",
    type: "text",
    placeholder: "what should we call you?",
  },
  {
    name: "password1",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
  },
  {
    name: "password2",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm password",
  },
];
