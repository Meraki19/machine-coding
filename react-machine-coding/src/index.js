import React from "react";
import { createRoot } from "react-dom/client";

import { routes } from "./routes";
import App from "./app";
import { RouterProvider } from "react-router-dom";
const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);
