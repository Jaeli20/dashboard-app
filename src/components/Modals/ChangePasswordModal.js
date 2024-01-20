import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AppContext from "../../Utils/AppContext/AppContext";
import UserController from "../../Utils/Controllers/UserController";

export default function ChangePasswordModal() {
  const { state } = React.useContext(AppContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const [pass, setPass] = React.useState("");
  const userController = new UserController();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleUpdateUserPass = async () => {
    console.log(state.user_id);
    userController.updateUserPass(state.user_id, pass);
  };
  const handleChange = (event) => {
    const text = event.target.value;
    setPass(text);
  };
  return (
    <FormControl fullWidth>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          onChange={handleChange}
        />

        <Grid item xs={2}>
          <Button
            variant="contained"
            sx={{ my: 1, mx: 1 }}
            onClick={handleUpdateUserPass}
          >
            Actualizar
          </Button>
          <Button variant="outlined" sx={{ my: 1, mx: 1 }}>
            Cancelar
          </Button>
        </Grid>
      </Box>
    </FormControl>
  );
}
