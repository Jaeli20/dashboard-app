import { Lock } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Container } from "@mui/material";
import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const AccessMessage = () => {
  const navigate = useNavigate();
  const handleCloseSession = () => {
    Cookies.remove("user_name");
    Cookies.remove("user_email");
    Cookies.remove("user_id");
    navigate("/");
  };
  return (
    <Container sx={{ py: 10 }}>
      <Alert severity="error" variant="outlined">
        <AlertTitle>Acceso denegado</AlertTitle>
        Algo salio mal, por favor inicie sesión de nuevo
        <Button
          onClick={handleCloseSession}
          variant="outlined"
          sx={{ ml: 2 }}
          startIcon={<Lock />}
        >
          Iniciar sesión
        </Button>
      </Alert>
    </Container>
  );
};

export default AccessMessage;
