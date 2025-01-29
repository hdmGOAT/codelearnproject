export const runPython = async (code: string) => {
  try {
    const { loadPyodide } = await import("pyodide");

    const pyodide = await loadPyodide();

    const result = await pyodide.runPython(code);
    return result;
  } catch (err: any) {
    console.error("❌ Trouble running code:", err);
    return `Error: ${err.message}`;
  }
};
