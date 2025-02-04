"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>Hello World! </p>`,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "border p-3 w-full min-h-64",
      },
    },
  });

  return (
    <div className="editor w-full h-screen">
      <div className="toolbar  w-full">Toolbar</div>
      <EditorContent className=" size-full" editor={editor} />
    </div>
  );
};

//NEEDS TOOLBAR

export default RichTextEditor;
