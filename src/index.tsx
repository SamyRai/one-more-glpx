import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import App from "./App";
import "./styles/globals.css";

const rootElement = document.querySelector("#root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
