import CodeEditor from "@/components/CodeEditor";
import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";

const page = () => {
  return (
    <div className="app-wraper flex flex-row h-screen w-full">
      <div className="flex flex-1"></div>
      <div className="flex flex-1 w-full break-words">
        <CodeEditor />
      </div>
    </div>
  );
};

export default page;
