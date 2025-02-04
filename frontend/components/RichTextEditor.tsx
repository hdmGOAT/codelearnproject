"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";

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
      <div className="toolbar  w-full">
        <Button onClick={() => editor?.chain().focus().toggleBold().run()}>
          Bold
        </Button>
        <Button onClick={() => editor?.chain().focus().toggleItalic().run()}>
          Italic
        </Button>
        <Button onClick={() => editor?.chain().focus().toggleStrike().run()}>
          Strike
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
        >
          Bullet List
        </Button>
        <Button
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        >
          Ordered List
        </Button>
      </div>
      <EditorContent className=" size-full" editor={editor} />
    </div>
  );
};

//NEEDS TOOLBAR

export default RichTextEditor;
