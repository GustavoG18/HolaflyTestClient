import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { NavProvider } from "./context/NavContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </UserProvider>
  </React.StrictMode>
);
