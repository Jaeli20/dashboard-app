import React from "react";
import AccessMessage from "./AccessMessage";
import AppContext from "../../../Utils/AppContext/AppContext";

const Protected = ({ children }) => {
  const { state } = React.useContext(AppContext);
  const hasAccess = true;
  return state.hasPermission ? children : <AccessMessage />;
};

export default Protected;
