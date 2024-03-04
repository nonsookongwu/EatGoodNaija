import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import UserContextProvider from "./context/UserContext.tsx";
import "./index.css";
import router from "./routing/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
        <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
