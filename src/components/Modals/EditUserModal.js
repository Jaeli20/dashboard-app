import React, { useState, useEffect } from "react";
import UserController from "../../Utils/Controllers/UserController";
import {
  Button,
  TextField,
  Grid,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";

import ArticleIcon from "@mui/icons-material/Article";
import Popup from "../Popups/Popup";
import ChangePasswordModal from "./ChangePasswordModal";
import AppContext from "../../Utils/AppContext/AppContext";
export default function EditUserModal(props) {
  const { dispatch } = React.useContext(AppContext);
  const userController = new UserController();
  const { setOpenPopup, userData } = props;
  const [age, setAge] = React.useState("");
  const { name, email, occupation } = userData;
  const [editUserData, setEditUserData] = useState({
    name: name,
    email: email,
    occupation: occupation,
    role: "",
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
    userController.updateUser(userData._id, editUserData, updateData);
  };
  const updateData = async () => {
    await fetch("http://localhost:3001/user/test")
      .then((data) => data.json())
      .then((dataJson) => {
        dispatch({ type: "SET_GLOBALUSERDATA", payload: dataJson });
      });
  };
  return (
    <>
      <FormControl fullWidth>
        <Grid container spacing={5}>
          <Grid item xs={6}>
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
            </div>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="occupation"
              label="Ocupación"
              value={editUserData.occupation}
              onChange={handleInputChange}
              sx={{ my: 1 }}
            />

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
        </Grid>
      </FormControl>
      <Popup
        setOpenPopup={setOpenPopupP}
        openPopup={openPopupP}
        title={`Cambiar contraseña del usuario "${name}"`}
      >
        <ChangePasswordModal isAdmin={false} />
      </Popup>
    </>
  );
}
