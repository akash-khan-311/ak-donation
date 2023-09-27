import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Route.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <RouterProvider router={Router}>
          <App />
        </RouterProvider>
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
