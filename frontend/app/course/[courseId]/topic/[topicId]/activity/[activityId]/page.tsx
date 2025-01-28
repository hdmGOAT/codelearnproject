import CodeEditor from "@/components/CodeEditor";
import { Button } from "@/components/ui/button";
import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";

const ActivityPage = () => {
  return (
    <div className="app-wrapper flex flex-row h-screen w-full">
      <div className="prompt-container flex flex-col flex-1 space-y-3 p-4">
        <h1 className="font-bold text-3xl">asdfa </h1>
        <div className="flex flex-col space-y-3">
          <p>Lets begin with a simple print statement</p>
          <p>asdfasfdasdfasdf</p>
          <code className="bg-zinc-700 text-white">print(hello World)</code>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="code-container flex flex-col flex-1 overflow-hidden ">
          <CodeEditor />
        </div>
        <div>
          <Button className="w-full">Run</Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
