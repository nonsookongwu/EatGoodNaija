import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import router from "./routing/router.tsx";
import { Toaster } from "react-hot-toast";
import UserContextProvider from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
        <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
