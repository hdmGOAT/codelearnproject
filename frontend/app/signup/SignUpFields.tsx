import { Step } from "@/types/dynamicFormTypes";

export const SignUpFields: Step[] = [
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
