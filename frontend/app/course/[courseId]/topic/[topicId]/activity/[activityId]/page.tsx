import CodeEditor from "@/components/CodeEditor";
import { Button } from "@/components/ui/button";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import React from "react";

const ActivityPage = () => {
  return (
    <div className=" h-screen w-screen">
      <ResizablePanelGroup direction="horizontal" className="w-full">
        <ResizablePanel defaultSize={50}>
          <div className="flex p-6 flex-col space-y-4">
            <h1 className="font-bold text-2xl">Welcome to Python!</h1>
            <p>
              PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON{" "}
              PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON{" "}
              PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON{" "}
              PYTHON PYTHON PYTHON
            </p>
            <p>
              PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON{" "}
              PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON{" "}
              PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON{" "}
              PYTHON PYTHON PYTHON
            </p>
            <p>
              PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON{" "}
              PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON{" "}
              PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON PYTHON{" "}
              PYTHON PYTHON PYTHON
            </p>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full flex-col">
                <div className="h-full flex overflow-y-scroll">
                  <CodeEditor />
                </div>
                <div className="flex flex-row">
                  <Button className="flex flex-[1]"> Run </Button>{" "}
                  <Button className="flex flex-[2]">Submit</Button>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="p-6">
                <span className="font-semibold">Output..</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ActivityPage;
