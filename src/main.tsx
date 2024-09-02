import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import "./index.css";

let root = document.getElementById("root") as HTMLElement;
// renders contents -- App component -- into div 'root' element from index.html
ReactDOM.createRoot(root).render(<App />);
