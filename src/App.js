import React, { useEffect } from "react";
import Cookies from "js-cookie";

import Dashboard from "./components/Pages/Dasboard/Dahsboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContext from "./Utils/AppContext/AppContext";
function App() {
  const { state, dispatch } = React.useContext(AppContext);

  useEffect(() => {
    const storageState = Cookies.get("themeState");

    if (storageState) {
      dispatch({
        type: "SET_DARKMODE",
        payload: storageState,
      });
    }

    Cookies.set("themeState", true);
  }, []);

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
