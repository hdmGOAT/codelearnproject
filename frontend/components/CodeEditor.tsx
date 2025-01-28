"use client";

import ReactCodeMirror, { EditorView } from "@uiw/react-codemirror";
import { basicSetup } from "codemirror";
import React from "react";
import { vscodeDark } from "@uiw/codemirror-themes-all";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { Button } from "./ui/button";

const CodeEditor = () => {
  return (
    <ReactCodeMirror
      theme={vscodeDark}
      extensions={[EditorView.lineWrapping, loadLanguage("python") || []]}
      height="100vh"
    />
  );
};

export default CodeEditor;

