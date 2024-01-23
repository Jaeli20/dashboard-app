import React, { useState, useEffect } from "react";
import UserController from "../../Utils/Controllers/UserController";
import {
  Button,
  TextField,
  Grid,
  MenuItem,
  Select,
  FormControl,
  Box,
} from "@mui/material";

import ArticleIcon from "@mui/icons-material/Article";
import Popup from "../Popups/Popup";
import ChangePasswordModal from "./ChangePasswordModal";
import AdminUserController from "../../Utils/Controllers/AdminUserController";
import AppContext from "../../Utils/AppContext/AppContext";
import ChangeAdminPasswordModal from "./ChangeAdminPasswordModal";
export default function EditUserAdminModal(props) {
  const { dispatch } = React.useContext(AppContext);
  const userController = new UserController();
  const adminUserController = new AdminUserController();
  const { setOpenPopup, userData, updateUserCallback } = props;
  const [age, setAge] = React.useState("");
  const { name, email, active, _id } = userData;

  const [editUserData, setEditUserData] = useState({
    name: name,
    email: email,
    active: active,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditUserData((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };
  const [openPopupP, setOpenPopupP] = React.useState(false);

  const handleUpdateUser = () => {
    adminUserController.updateInfo(
      _id,
      editUserData.email,
      editUserData.name,
      () => updateUserCallback()
    );
  };

  const handleUpdateUserState = () => {
    adminUserController.updateActiveStatus(_id, !active, () => {
      setOpenPopup(false);
      updateUserCallback();
    });
  };
  return (
    <>
      <FormControl fullWidth>
        <Box>
          <Grid item xs={5}>
            <TextField
              name="name"
              label="Nombre"
              value={editUserData.name}
              sx={{ my: 1 }}
              onChange={handleInputChange}
            />
            <TextField
              label="Correo"
              name="email"
              value={editUserData.email}
              onChange={handleInputChange}
              sx={{ my: 1 }}
            />
            <div>
              <Button
                variant="contained"
                sx={{ my: 1, mx: 1 }}
                onClick={() => setOpenPopupP(true)}
              >
                Cambiar contraseña
              </Button>
              <Button
                variant="contained"
                sx={{ my: 1, mx: 1 }}
                onClick={handleUpdateUserState}
                color={editUserData.active ? "error" : "success"}
              >
                {editUserData.active
                  ? "Deshabilitar usuario"
                  : "Habilitar usuario"}
              </Button>
            </div>
            <div style={{ marginVertical: 1 }}>
              <Button
                variant="contained"
                sx={{ my: 1, mx: 1 }}
                onClick={handleUpdateUser}
              >
                Actualizar
              </Button>
              <Button
                variant="outlined"
                sx={{ my: 1, mx: 1 }}
                onClick={() => {
                  setOpenPopup(false);
                }}
              >
                Cancelar
              </Button>
            </div>
          </Grid>
        </Box>
      </FormControl>
      <Popup
        setOpenPopup={setOpenPopupP}
        openPopup={openPopupP}
        title={`Cambiar contraseña del usuario "${name}"`}
      >
        <ChangeAdminPasswordModal loca_user_id={_id} />
      </Popup>
    </>
  );
}
