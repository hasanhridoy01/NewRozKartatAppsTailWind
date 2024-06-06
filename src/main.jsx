import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Routes.jsx";
import ImageContext from "./context/ImageContext.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ImageContext>
        <RouterProvider router={route} />
      </ImageContext>
    </HelmetProvider>
  </React.StrictMode>
);
