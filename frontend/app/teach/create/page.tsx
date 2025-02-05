import RichTextEditor from "@/components/RichTextEditor";
import React from "react";
import CreateCourseForm from "./CreateCourseForm";

const CreatePage = () => {
  return (
    <div className="flex min-h-screen overflow-x-scroll px-2 mx-3 mt-3 border-2 rounded-xl ">
      <CreateCourseForm />
    </div>
  );
};

export default CreatePage;
