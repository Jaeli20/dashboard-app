import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./Utils/AppContext/AppContext";
import AccessControlListener from "./Utils/Listeners/AccessControlListener";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <AccessControlListener>
        <App />
      </AccessControlListener>
    </AppProvider>
  </React.StrictMode>
);
