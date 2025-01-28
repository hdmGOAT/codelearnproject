import React, { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: any;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  value,
  onChange,
  language = javascript,
}) => {
  const editorRef = useRef(null);
  const editorViewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const startState = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        language(),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            const updatedValue = update.state.doc.toString();
            onChange(updatedValue);
          }
        }),
      ],
    });

    editorViewRef.current = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    return () => {
      editorViewRef.current?.destroy();
    };
  }, [value, onChange, language]);

  return (
    <div
      ref={editorRef}
      style={{ border: "1px solid #ddd", borderRadius: "4px" }}
    />
  );
};

export default CodeEditor;
