import * as React from "react";
import * as ReactDOM from "react-dom";
import Config from "./config";
import "./index.css";

// @ts-ignore
const vscode = window.acquireVsCodeApi();
const container = document.getElementById("root");
// @ts-ignore
const root = ReactDOM.createRoot(container);
// @ts-ignore
root.render(<Config vscode={vscode} initialData={window.initialData} />);
