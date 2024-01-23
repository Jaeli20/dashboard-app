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
const Modalpopup = () => {
  const userController = new UserController();
  const validations = new Validation();
  const { dispatch, state } = useContext(AppContext);

  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUserData((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
    console.log(newUserData);
  };

  const closepopup = () => {
    dispatch({
      type: "TOGGLE_TRANSITIONMODALVISIBILITY",
      payload: false,
    });
  };

  const handleCreateUser = async () => {
    console.log(newUserData);
    if (validations.validateNotNullData(newUserData)) {
      await userController.createUser(newUserData, async () => {
        await fetch("http://localhost:3001/user/test")
          .then((data) => data.json())
          .then((dataJson) => {
            dispatch({ type: "SET_GLOBALUSERDATA", payload: dataJson });
            closepopup();
          });
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
        open={state.TransitionsModalVisibility}
        onClose={closepopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Crear nuevo usuario
          <IconButton onClick={closepopup} style={{ float: "right" }}>
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

            <TextField
              variant="outlined"
              label="Ocupación"
              name="occupation"
              value={newUserData.occupation}
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

export default Modalpopup;
