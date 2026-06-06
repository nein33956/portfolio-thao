import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* BrowserRouter cho URL sạch trên Vercel; vercel.json rewrite về index.html */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
