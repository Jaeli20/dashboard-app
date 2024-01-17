import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import UserController from "../../../Utils/Controllers/UserController";
import Cookies from "js-cookie";
import AppContext from "../../../Utils/AppContext/AppContext";
const defaultTheme = createTheme();

export default function Login() {
  const userController = new UserController();
  const [isChecked, setChecked] = React.useState(false);
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const navigate = useNavigate();
  const { dispatch } = React.useContext(AppContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const { status, data } = await userController.getUserAdminLogin({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    console.log(status);
    if (status) {
      if (!data.profile.active) {
        alert("Usuario no autorizado");
      }

      Cookies.set("user_name", data.profile.name);
      Cookies.set("user_email", data.profile.email);
      Cookies.set("user_id", data.profile._id);
      dispatch({ type: "SET_PERMISSION", payload: data.profile.active });
      navigate("/inicio");
    }
  };

  React.useEffect(() => {
    const handleGetActiveStatus = async () => {
      dispatch({ type: "SET_PERMISSION", payload: false });
      if (Cookies.get("user_id")) {
        const { isActive } = await userController.getUserAdminStatus(
          Cookies.get("user_id")
        );

        console.log(isActive);
        dispatch({ type: "SET_PERMISSION", payload: false });
        navigate("/inicio");
      }
    };

    handleGetActiveStatus();
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Bienvenido
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  onChange={handleCheckboxChange}
                />
              }
              label="Guardar datos"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
