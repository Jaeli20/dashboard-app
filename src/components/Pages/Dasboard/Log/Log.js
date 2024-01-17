import React, { useEffect } from "react";
import Protected from "../../../Wigets/ProtectedWidget/Protected";
import Cookies from "js-cookie";
import AppContext from "../../../../Utils/AppContext/AppContext";

export default function Log({ setSelectedLink, link }) {
  const { state, dispatch } = React.useContext(AppContext);

  useEffect(() => {
    setSelectedLink(link);
    if (Cookies.get("user_id")) {
      dispatch({ type: "SET_PERMISSION", payload: true });
    }
  }, []);
  return (
    <Protected>
      <div>Log</div>
    </Protected>
  );
}
