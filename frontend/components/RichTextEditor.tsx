"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

const lowlight = createLowlight(all);

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: value,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "border p-3 w-full min-h-64",
      },
    },
  });

  useEffect(() => {
    if (editor) {
      editor.on("update", () => {
        onChange(editor.getHTML());
      });
    }
  }, [editor, onChange]);

  return (
    <div className="rich-editor">
      <div className="  toolbar flex gap-2 p-2 border-b bg-gray-100 w-full overflow-x-auto">
        {/* Text Formatting */}
        <Button onClick={() => editor?.chain().focus().toggleBold().run()}>
          Bold
        </Button>
        <Button onClick={() => editor?.chain().focus().toggleItalic().run()}>
          Italic
        </Button>
        <Button onClick={() => editor?.chain().focus().toggleStrike().run()}>
          Strike
        </Button>

        {/* Headers */}
        <Button onClick={() => editor?.chain().focus().setParagraph().run()}>
          Paragraph
        </Button>
        <Button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </Button>
        <Button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </Button>
        <Button
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          H3
        </Button>

        {/* Lists */}
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

        {/* Blockquote */}
        <Button
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        >
          Blockquote
        </Button>

        {/* Code Block */}
        <Button onClick={() => editor?.chain().focus().toggleCodeBlock().run()}>
          Code Block
        </Button>

        {/* Undo/Redo */}
        <Button onClick={() => editor?.chain().focus().undo().run()}>
          Undo
        </Button>
        <Button onClick={() => editor?.chain().focus().redo().run()}>
          Redo
        </Button>
      </div>
      <EditorContent className=" size-full" editor={editor} />
    </div>
  );
};

//NEEDS TOOLBAR

export default RichTextEditor;
