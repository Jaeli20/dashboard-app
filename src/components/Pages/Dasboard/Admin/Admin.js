import React, { Suspense, lazy } from "react";
import Protected from "../../../Wigets/ProtectedWidget/Protected";
import { Box, Button, Typography } from "@mui/material";
import Modalpopup from "../../../Modals/CreaterNewUserModal";
import DeleteUserModal from "../../../Modals/DeleteUserModal";
import UserAdminDataGrid from "../../../Particles/UserAdminDataGrid";
import UserController from "../../../../Utils/Controllers/UserController";
import Cookies from "js-cookie";
import AppContext from "../../../../Utils/AppContext/AppContext";
import CreateUserAdminModal from "../../../Modals/CreateUserAdminModal";
import Popup from "../../../Popups/Popup";
const LazyUserAdminDataGrid = lazy(() =>
  import("../../../Particles/UserAdminDataGrid")
);
export default function Admin({ setSelectedLink, link }) {
  const [data, setData] = React.useState([]);
  const { dispatch, state } = React.useContext(AppContext);
  const [openCreateUserPopup, setOpenCreateUserPopup] = React.useState(false);

  const userController = new UserController();

  React.useEffect(() => {
    setSelectedLink(link);
    updateData();
  }, []);

  const updateData = () => {
    fetch("http://localhost:3001/admin")
      .then((res) => res.json())
      .then((res) =>
        dispatch({ type: "SET_USEADMINDATA", payload: res.adminUsers })
      );
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
          <Button onClick={() => setOpenCreateUserPopup(true)}>
            Agregar nuevo usuario administrador
          </Button>
          <Suspense fallback={"cargando"}>
            {data && <LazyUserAdminDataGrid data={data.adminUsers} key={0} />}
          </Suspense>
          <Modalpopup />

          <Popup
            setOpenPopup={setOpenCreateUserPopup}
            openPopup={openCreateUserPopup}
            title={"Crear usuario administrador"}
          >
            <CreateUserAdminModal
              successCallback={updateData}
              openCreateUserPopup={openCreateUserPopup}
              setOpenCreateUserPopup={setOpenCreateUserPopup}
            />
          </Popup>
          <DeleteUserModal />
        </Box>
      </Protected>
    </>
  );
}
