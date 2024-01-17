import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Dashboard from "./components/Pages/Dasboard/Dahsboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContext from "./Utils/AppContext/AppContext";
import Login from "./components/Pages/Login/Login";
import UserController from "./Utils/Controllers/UserController";
function App() {
  const { state, dispatch } = React.useContext(AppContext);


  useEffect(() => {
    fetch("http://localhost:3001/project/info")
      .then((data) => data.json())
      .then((dataJson) =>
        dispatch({ type: "SET_GLOBALINFO", payload: dataJson })
      );

  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/inicio",
      element: <Dashboard />,
    },
    {
      path: "/inicio/*",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
