import CodeEditor from "@/components/CodeEditor";
import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";

const ActivityPage = () => {
  return (
    <div className="app-wrapper flex flex-row h-screen w-full">
      <div className="prompt-container flex flex-1"></div>
      <div className="code-container flex flex-1 overflow-hidden ">
        <CodeEditor />
      </div>
    </div>
  );
};

export default ActivityPage;
