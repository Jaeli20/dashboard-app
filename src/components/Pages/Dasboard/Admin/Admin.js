import React, { Suspense, lazy } from "react";
import Protected from "../../../Wigets/ProtectedWidget/Protected";
import { Box, Button, Typography } from "@mui/material";
import Modalpopup from "../../../Modals/CreaterNewUserModal";
import DeleteUserModal from "../../../Modals/DeleteUserModal";
import UserAdminDataGrid from "../../../Particles/UserAdminDataGrid";
import UserController from "../../../../Utils/Controllers/UserController";
import Cookies from "js-cookie";
import AppContext from "../../../../Utils/AppContext/AppContext";
const LazyUserAdminDataGrid = lazy(() =>
  import("../../../Particles/UserAdminDataGrid")
);
export default function Admin({ setSelectedLink, link }) {
  const [data, setData] = React.useState([]);
  const { dispatch, state } = React.useContext(AppContext);

  const userController = new UserController();
  React.useEffect(() => {
    setSelectedLink(link);

    handleGetData();
    if (Cookies.get("user_id")) {
      dispatch({ type: "SET_PERMISSION", payload: true });
    }
  }, []);

  const handleGetData = async () => {
    const user = await fetch("http://localhost:3001/admin");
    const userJson = await user.json();

    setData(userJson);
    console.log(userJson.users);
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
            Usuarios administradores
          </Typography>
          <Button>Agregar nuevo usuario administrador</Button>
          <Suspense fallback={"cargando"}>
            {data && <LazyUserAdminDataGrid data={data} key={0} />}
          </Suspense>
          <Modalpopup />
          <DeleteUserModal />
        </Box>
      </Protected>
    </>
  );
}
