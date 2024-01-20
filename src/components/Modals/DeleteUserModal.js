import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import AppContext from "../../Utils/AppContext/AppContext";
import UserCard from "../Cards/UserCard";
import UserController from "../../Utils/Controllers/UserController";
import AdminUserController from "../../Utils/Controllers/AdminUserController";

const DeleteUserModal = () => {
  const userController = new UserController();
  const adminUserController = new AdminUserController();
  const { dispatch, state } = useContext(AppContext);

  const closepopup = () => {
    dispatch({
      type: "TOGGLE_DELETEUSERMODALVISIBILITY",
      payload: false,
    });
    dispatch({
      type: "SET_DELETEUSERDATA",
      payload: {},
    });
  };
  const handleDeleteUser = async () => {
    if (state.DeleteUserData.active) {
      adminUserController.deleteUserAdminByID(
        state.DeleteUserData._id,
        onSuccess
      );

      fetch("http://localhost:3001/admin")
        .then((res) => res.json())
        .then((res) =>
          dispatch({ type: "SET_USEADMINDATA", payload: res.adminUsers })
        );
    } else {
      await userController.DeleteUserByID(state.DeleteUserData._id, onSuccess);
    }
  };
  const onSuccess = () => {
    dispatch({
      type: "TOGGLE_DELETEUSERMODALVISIBILITY",
      payload: false,
    });
    alert("Usuario eliminado");
  };
  return (
    <Dialog
      // fullScreen
      open={state.DeleteUserModalVisibility}
      onClose={closepopup}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        ¿Seguro de eliminar este usuario?
        <IconButton onClick={closepopup} style={{ float: "right" }}>
          <CloseIcon color="primary"></CloseIcon>
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Toda la información relacionada al usuario se eliminara
        </DialogContentText>
        <Box display="flex" justifyContent="center" alignItems="center">
          <UserCard />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={closepopup}>
          Cancelar
        </Button>
        <Button color="error" variant="contained" onClick={handleDeleteUser}>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserModal;
