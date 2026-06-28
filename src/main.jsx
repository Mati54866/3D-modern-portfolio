import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// Suppress the THREE.BufferGeometry NaN warning
const originalError = console.error;
console.error = function (...args) {
  if (
    typeof args[0] === "string" &&
    args[0].includes("THREE.BufferGeometry.computeBoundingSphere")
  ) {
    return; // Suppress this specific error
  }
  originalError.apply(console, args);
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
