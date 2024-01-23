import { Box, Button, Typography } from "@mui/material";

import React, { useEffect, useState, lazy, Suspense, useContext } from "react";
import AppContext from "../../../../Utils/AppContext/AppContext";
import TransitionsModal from "../../../Modals/TransitionModal";
import Modalpopup from "../../../Modals/CreaterNewUserModal";
import DeleteUserModal from "../../../Modals/DeleteUserModal";
import Protected from "../../../Wigets/ProtectedWidget/Protected";
import Cookies from "js-cookie";
const UserDataGridLazy = lazy(() => import("../../../Particles/UserDataGrid"));

export default function User({ setSelectedLink, link }) {
  const { dispatch, state } = useContext(AppContext);
  const [data, setData] = React.useState([]);
  useEffect(() => {
    GetUserData();
    setSelectedLink(link);
    console.log(state.userDataObject);
  }, []);

  const GetUserData = async () => {
    await fetch("http://localhost:3001/user/test")
      .then((data) => data.json())
      .then((dataJson) => {
        setData(dataJson);
        dispatch({ type: "SET_GLOBALUSERDATA", payload: dataJson });
      });
  };

  return (
    <>
      <Protected>
        <Box
          sx={{
            height: 500,
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: "center", mt: 3, mb: 3 }}
          >
            Usuarios
          </Typography>
          <Button
            onClick={() =>
              dispatch({
                type: "TOGGLE_TRANSITIONMODALVISIBILITY",
                payload: true,
              })
            }
          >
            Agregar nuevo usuarios
          </Button>
          <Suspense fallback={"cargando"}>
            {data && <UserDataGridLazy data={data} key={0} />}
          </Suspense>

          <Modalpopup />
          <DeleteUserModal />
        </Box>
      </Protected>
    </>
  );
}
