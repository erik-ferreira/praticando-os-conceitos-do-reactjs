import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import { App } from "./App";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      toastStyle={{
        backgroundColor: "var(--gray-600)",
        color: "var(--gray-100)",
      }}
    />
  </React.StrictMode>
);
