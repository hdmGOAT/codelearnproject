const runPython = async (code: string) => {
  try {
    const pyodide = await import("pyodide").then((mod) => mod.loadPyodide());

    const result = await pyodide.runPython(code);

    return result;
  } catch (err) {
    console.error("Trouble running code: ", err);
  }
};
