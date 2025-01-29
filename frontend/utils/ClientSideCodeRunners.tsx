"use client";

import * as Sk from "skulpt";

export const runPython = async (code: string) => {
  try {
    return new Promise((resolve, reject) => {
      let output = "";

      const outf = (text: string) => {
        output += text + "\n";
      };

      Sk.configure({
        output: outf,
        read: (x: string) => {
          if (
            Sk.builtinFiles === undefined ||
            Sk.builtinFiles.files[x] === undefined
          ) {
            throw new Error("File not found: " + x);
          }
          return Sk.builtinFiles.files[x];
        },
      });

      Sk.misceval
        .asyncToPromise(() =>
          Sk.importMainWithBody("<stdin>", false, code, true)
        )
        .then(() => resolve(output.trim()))
        .catch((err: any) => {
          console.error("❌ Skulpt Error:", err);
          reject(`Error: ${err.toString()}`);
        });
    });
  } catch (err: any) {
    console.error("❌ Trouble running code:", err);
    return `Error: ${err.message}`;
  }
};
