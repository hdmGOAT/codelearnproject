"use client";

import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";

const CodeEditor = () => {
  return (
    <div
      className="w-full h-full break-words"
      style={{
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
      }}
    >
      <ReactCodeMirror />
    </div>
  );
};

export default CodeEditor;

