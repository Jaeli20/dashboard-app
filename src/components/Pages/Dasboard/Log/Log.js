import React, { Suspense, lazy } from "react";
import Protected from "../../../Wigets/ProtectedWidget/Protected";
import AppContext from "../../../../Utils/AppContext/AppContext";
import { Box, Typography } from "@mui/material";
import LogController from "../../../../Utils/Controllers/LogController";
const LazyLogDataGrid = lazy(() => import("../../../Particles/LogDataGrid"));

export default function Log({ setSelectedLink, link }) {
  const { dispatch } = React.useContext(AppContext);
  const logController = new LogController();
  const [logData, setLogData] = React.useState([]);
  React.useEffect(() => {
    setSelectedLink(link);
    getLog();
  }, []);

  const getLog = async () => {
    const response = await logController.getLog();
    dispatch({ type: "SET_LOGDATA", payload: response });
    setLogData(response);
  };

  return (
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
          Log de la aplicación
        </Typography>

        <Suspense fallback={"cargando"}>
          {logData && <LazyLogDataGrid data={logData} key={0} />}
        </Suspense>
      </Box>
    </Protected>
  );
}
