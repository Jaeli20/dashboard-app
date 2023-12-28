import { Box, Button, Typography } from "@mui/material";

import React, { useEffect, useState, lazy, Suspense, useContext } from "react";
import AppContext from "../../../../Utils/AppContext/AppContext";
import TransitionsModal from "../../../Modals/TransitionModal";
import Modalpopup from "../../../Modals/CreaterNewUserModal";
const UserDataGridLazy = lazy(() => import("../../../Particles/UserDataGrid"));

export default function User({ setSelectedLink, link }) {
  const [data, setData] = useState();
  const { dispatch, state } = useContext(AppContext);

  useEffect(() => {
    GetUserData();
    setSelectedLink(link);
  }, []);

  const GetUserData = async () => {
    await fetch("https://metriklass-api-dev-fgtq.4.us-1.fl0.io/user/test")
      .then((data) => data.json())
      .then((dataJson) => setData(dataJson));
  };

  return (
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
    </Box>
  );
}
