import React, { useMemo, useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  styled,
  Typography,
} from "@mui/material";
import Home from "./Home/Home";
import User from "./User/User";
import Log from "./Log/Log";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Admin from "./Admin/Admin";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const SideList = ({ open, setOpen }) => {
  const [selectedLink, setSelectedLink] = useState("");

  const list = useMemo(
    () => [
      {
        title: "Inicio",
        icon: <HomeIcon />,
        component: <Home {...{ setSelectedLink, link: "" }} />,
        link: "",
      },
      {
        title: "Usuarios",
        icon: <GroupIcon />,
        component: <User {...{ setSelectedLink, link: "usuarios" }} />,
        link: "usuarios",
      },
      {
        title: "Administradores",
        icon: <AdminPanelSettingsIcon />,
        component: <Admin {...{ setSelectedLink, link: "admin" }} />,
        link: "admin",
      },
      {
        title: "Log",
        icon: <FeaturedPlayListIcon />,
        component: <Log {...{ setSelectedLink, link: "log" }} />,
        link: "log",
      },
    ],
    []
  );

  const navigate = useNavigate();

  const handleCloseSession = () => {
    Cookies.remove("user_name");
    Cookies.remove("user_email");
    Cookies.remove("user_id");
    navigate("/");
  };
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {list.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => navigate(item.link)}
                selected={selectedLink === item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <Box sx={{ textAlign: "center" }}>
          {open && (
            <>
              <Typography>{Cookies.get("user_name")}</Typography>
              <Typography variant="body2">{"Administrador"}</Typography>
              <Typography variant="body2">
                {Cookies.get("user_email")}
              </Typography>
              <Typography variant="body2">{Cookies.get("user_id")}</Typography>
            </>
          )}
          <Tooltip title="Cerrar sesión" sx={{ mt: 1 }}>
            <IconButton onClick={handleCloseSession}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Toolbar />

          <Routes>
            {list.map((item) => (
              <Route
                key={item.title}
                path={item.link}
                element={item.component}
              />
            ))}
          </Routes>
        </Container>
      </Box>
    </>
  );
};
export default SideList;
