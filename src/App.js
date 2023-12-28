import React from "react";

import Dashboard from "./components/Pages/Dasboard/Dahsboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <Dashboard />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
