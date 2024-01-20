import React from "react";
import AppContext from "../AppContext/AppContext";
import Cookies from "js-cookie";
import UserController from "../Controllers/UserController";
import { useNavigate } from "react-router-dom";
export default function AccessControlListener({ children }) {
  const { state, dispatch } = React.useContext(AppContext);
  const userController = new UserController();

  React.useEffect(() => {
    const handleGetActiveStatus = async () => {
      if (Cookies.get("user_id")) {
        const { isActive } = await userController.getUserAdminStatus(
          Cookies.get("user_id")
        );

        dispatch({ type: "SET_PERMISSION", payload: isActive });
      }
    };
    handleGetActiveStatus();
  }, []);

  return <>{children}</>;
}
