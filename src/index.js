import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Button from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Button />);

export { default as Button } from "./Button";
