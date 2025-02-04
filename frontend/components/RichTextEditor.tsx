"use client";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>Hello World! </p>`,
  });

  return (
    <div className="editor border p-3">
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
