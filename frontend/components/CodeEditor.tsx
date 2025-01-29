"use client";

import ReactCodeMirror, { EditorView } from "@uiw/react-codemirror";
import React, { useEffect, useRef, useState } from "react";
import { vscodeDark } from "@uiw/codemirror-themes-all";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { Button } from "./ui/button";
import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "./ui/resizable";
import { runPython } from "@/utils/ClientSideCodeRunners";

const CodeEditor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState(0);
  const [output, setOutput] = useState();
  const [code, setCode] = useState('print("Hello World")');

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

  const onChange = React.useCallback((val: any) => {
    setCode(val);
  }, []);

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full flex-col">
          <div className="h-full flex overflow-y-scroll">
            <div ref={containerRef} style={{ width: "100%" }}>
              <ReactCodeMirror
                theme={vscodeDark}
                value={code}
                onChange={onChange}
                extensions={[
                  EditorView.lineWrapping,
                  loadLanguage("python") || [],
                ]}
                minHeight={`${minHeight}px`}
              />
            </div>
          </div>
          <div className="flex flex-row">
            <Button
              className="flex flex-[1]"
              onClick={async () => {
                setOutput(await runPython(code));
              }}
            >
              Run
            </Button>
            <Button className="flex flex-[2]">Submit</Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="p-6 flex-col flex space-y-6">
          <span className="font-semibold">Output..</span>
          <p>{output}</p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default CodeEditor;

