import React from "react";
import SignUpForm from "./SignUpForm";

const SignupPage = () => {
  return (
    <div className="flex h-screen items-center p-4">
      <div className="flex flex-1 w-full justify-center">
        <h1 className="text-3xl">SIGN UP</h1>
      </div>
      <div className="flex flex-1 w-full">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignupPage;
