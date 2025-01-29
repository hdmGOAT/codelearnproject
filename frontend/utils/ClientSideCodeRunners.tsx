"use client";

let pyodideInstance: any = null; // Cache Pyodide instance

export const runPython = async (code: string) => {
  try {
    console.log("Python Code:", code);

    // Load Pyodide only once
    if (!pyodideInstance) {
      const { loadPyodide } = await import("pyodide");
      pyodideInstance = await loadPyodide();
      console.log("✅ Pyodide Loaded!");
    }

    // Run Python Code
    const result = await pyodideInstance.runPython(code);
    return result;
  } catch (err: any) {
    console.error("❌ Trouble running code:", err);
    return `Error: ${err.message}`;
  }
};
