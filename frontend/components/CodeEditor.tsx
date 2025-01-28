"use client";

import ReactCodeMirror, { EditorView } from "@uiw/react-codemirror";
import { basicSetup } from "codemirror";
import React, { useEffect, useRef, useState } from "react";
import { vscodeDark } from "@uiw/codemirror-themes-all";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { Button } from "./ui/button";

const CodeEditor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setMinHeight(containerRef.current.offsetHeight);
    }

    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        setMinHeight(containerRef.current.offsetHeight);
      }
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <ReactCodeMirror
        theme={vscodeDark}
        extensions={[EditorView.lineWrapping, loadLanguage("python") || []]}
        minHeight={`${minHeight}px`}
      />
    </div>
  );
};

export default CodeEditor;

