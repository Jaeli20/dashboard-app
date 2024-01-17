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
const UserWidget = () => {
  const { state } = useContext(AppContext);
  const [userData, setUserData] = useState(state.userData);
  return (
    <>
      {/* FIRST ROW */}
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <img
            style={{ objectFit: "cover", borderRadius: "50%" }}
            width={"90px"}
            height={"90px"}
            alt="user"
            src={userData.profilePhoto}
          />
          <Box>
            <Typography
              variant="h4"
              fontWeight="500"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {userData.name}
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <KeyIcon fontSize="large" />
          <Typography>
            {userData.rol !== undefined ? userData.rol : "rol no definido"}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" />
          <Typography>
            {userData.occupation !== undefined
              ? userData.occupation
              : "ocupación no definida"}
          </Typography>
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
          <Typography fontWeight="500">TODO</Typography>
        </FlexBetween>
      </Box>

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" fontWeight="500" mb="1rem">
          Documentos personales
        </Typography>

        <PersonalDocList key={0} personalDocList={userData.personalDocs} />
      </Box>
    </>
  );
};

export default UserWidget;

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const PersonalDocList = ({ personalDocList }) => {
  const handleOpenLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <FlexBetween gap="1rem" mb="0.5rem">
        <FlexBetween gap="1rem">
          <ArticleIcon />
          <Box>
            <Typography fontWeight="500">Antecedentes</Typography>
            {personalDocList.Antecedentes === null && (
              <Typography fontSize={"15px"} color={"red"}>
                No definido
              </Typography>
            )}
          </Box>
        </FlexBetween>
        {personalDocList.Antecedentes !== null && (
          <IconButton onClick={() => handleOpenLink(personalDocList.DUI)}>
            <VisibilityIcon />
          </IconButton>
        )}
      </FlexBetween>
      <FlexBetween gap="1rem" mb="0.5rem">
        <FlexBetween gap="1rem">
          <ArticleIcon />
          <Box>
            <Typography fontWeight="500">Solvencia</Typography>
            {personalDocList.Solvencia === null && (
              <Typography fontSize={"15px"} color={"red"}>
                No definido
              </Typography>
            )}
          </Box>
        </FlexBetween>
        {personalDocList.Solvencia !== null && (
          <IconButton onClick={() => handleOpenLink(personalDocList.DUI)}>
            <VisibilityIcon />
          </IconButton>
        )}
      </FlexBetween>
      <FlexBetween gap="1rem" mb="0.5rem">
        <FlexBetween gap="1rem">
          <ArticleIcon />
          <Box>
            <Typography fontWeight="500">DUI</Typography>
            {personalDocList.DUI === null && (
              <Typography fontSize={"15px"} color={"red"}>
                No definido
              </Typography>
            )}
          </Box>
        </FlexBetween>
        {personalDocList.DUI !== null && (
          <IconButton onClick={() => handleOpenLink(personalDocList.DUI)}>
            <VisibilityIcon />
          </IconButton>
        )}
      </FlexBetween>
    </>
  );
};
