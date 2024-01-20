import { EditOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import {
  Box,
  Typography,
  Divider,
  useTheme,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useContext } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AppContext from "../../../Utils/AppContext/AppContext";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import ProjectController from "../../../Utils/Controllers/ProjectController";
const UserAdminWidget = () => {
  const projectController = new ProjectController();
  const { state } = useContext(AppContext);
  const [userData, setUserData] = useState(state.singleUserAdminData);

  const formatDate = (date) => {
    const format = new Date(date);
    const year = format.getFullYear();
    const month = (format.getMonth() + 1).toString().padStart(2, "0"); // Suma 1 porque los meses son indexados desde 0
    const day = format.getDate().toString().padStart(2, "0");
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      {/* FIRST ROW */}
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <Box>
            <Typography variant="h4" fontWeight="500">
              {userData.name}
            </Typography>
            <FlexBetween
              sx={{
                m: 1,
              }}
            >
              <Typography variant="h7" fontWeight="200">
                Estado:
              </Typography>
              <Typography
                variant="h7"
                fontWeight="200"
                color={userData.active ? "green" : "red"}
              >
                {userData.active ? "Activo" : "No activo"}
              </Typography>
            </FlexBetween>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" />
          <Typography>administrador</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <EmailIcon fontSize="large" />
          <Typography> {userData.email}</Typography>
        </Box>
      </Box>

      <Divider />
      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography>Fecha de creación</Typography>
          <Typography fontWeight="500">
            {userData.created_at != undefined
              ? formatDate(userData.created_at)
              : "no definido"}
          </Typography>
        </FlexBetween>

        <FlexBetween mb="0.5rem">
          <Typography>Ultima actualización</Typography>
          <Typography fontWeight="500">
            {userData.updated_at != undefined
              ? formatDate(userData.updated_at)
              : "no definido"}
          </Typography>
        </FlexBetween>
      </Box>
    </>
  );
};

export default UserAdminWidget;

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
