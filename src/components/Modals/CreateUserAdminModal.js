import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useContext } from "react";
import AppContext from "../../Utils/AppContext/AppContext";
import UserController from "../../Utils/Controllers/UserController";
import Validation from "../../Utils/Validations/Validation";
import AdminUserController from "../../Utils/Controllers/AdminUserController";

const CreateUserAdminModal = ({
  openCreateUserPopup,
  setOpenCreateUserPopup,
  successCallback,
}) => {
  const userController = new UserController();
  const adminUserController = new AdminUserController();
  const validations = new Validation();
  const { dispatch, state } = useContext(AppContext);

  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUserData((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
    console.log(newUserData);
  };

  const handleCreateUser = async () => {
    console.log(newUserData);
    if (validations.validateNotNullData(newUserData)) {
      await adminUserController.createAdminUser(newUserData, async () => {
        await successCallback();
        setOpenCreateUserPopup(false);
      });

      alert("Usuario Creado");
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  return (
    <>
      <Dialog
        // fullScreen
        open={openCreateUserPopup}
        onClose={() => setOpenCreateUserPopup(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Crear nuevo usuario
          <IconButton
            onClose={() => setOpenCreateUserPopup(false)}
            style={{ float: "right" }}
          >
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <TextField
              variant="outlined"
              label="Nombre completo"
              name="name"
              value={newUserData.name}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Correo"
              name="email"
              value={newUserData.email}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Contraseña provisional"
              name="password"
              value={newUserData.password}
              onChange={handleInputChange}
            />

            <Button
              color="primary"
              variant="contained"
              onClick={handleCreateUser}
            >
              Crear usuario
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateUserAdminModal;
