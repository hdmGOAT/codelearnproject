import CodeEditor from "@/components/CodeEditor";
import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";

const ActivityPage = () => {
  return (
    <div className="app-wrapper flex flex-row h-screen w-full">
      <div className="prompt-container flex flex-col flex-1 space-y-3 p-4">
        <h1 className="font-bold text-3xl">Welcome to Python! </h1>
        <div className="flex flex-col space-y-3">
          <p>Lets begin with a simple print statement</p>
          <p>
            In Python, the print() function is used to display output on the
            screen. By writing print("Hello, World!"), the program instructs the
            computer to output the text "Hello, World!" exactly as written. This
            small yet foundational exercise helps new programmers understand how
            to run a Python script and see immediate results, building
            confidence for more complex programming tasks.
          </p>
          <code className="bg-zinc-700 text-white">print(hello World)</code>
        </div>
      </div>
      <div className="code-container flex flex-1 overflow-hidden ">
        <CodeEditor />
      </div>
    </div>
  );
};

export default ActivityPage;
