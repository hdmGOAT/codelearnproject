"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

const lowlight = createLowlight(all);

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: `
    \`\`\`python
print("Hello, world!")
\`\`\`

    `,
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
        <Button onClick={() => editor?.chain().focus().toggleCodeBlock().run()}>
          Code Block
        </Button>
      </div>
      <EditorContent className=" size-full" editor={editor} />
    </div>
  );
};

//NEEDS TOOLBAR

export default RichTextEditor;
