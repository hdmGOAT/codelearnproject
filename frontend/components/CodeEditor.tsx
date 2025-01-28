"use client";

import ReactCodeMirror, { EditorView } from "@uiw/react-codemirror";
import { basicSetup } from "codemirror";
import React from "react";
import { vscodeDark } from "@uiw/codemirror-themes-all";

const CodeEditor = () => {
  return (
    <div
      className="w-full h-full break-words"
      style={{
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
      }}
    >
      <ReactCodeMirror
        theme={vscodeDark}
        extensions={[basicSetup, EditorView.lineWrapping]}
      />
    </div>
  );
};

export default CodeEditor;

