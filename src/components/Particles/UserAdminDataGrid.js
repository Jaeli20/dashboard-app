import { Button } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditUserModal from "../Modals/EditUserModal";
import UserProfileModal from "../Modals/UserProfileModal";
import {
  DataGrid,
  GridActionsCellItem,
  GridDeleteIcon,
  gridClasses,
} from "@mui/x-data-grid";
import { grey } from "@mui/material/colors";
import Popup from "../Popups/Popup";
import EditUserAdminModal from "../Modals/EditAdminUserModal";
import AppContext from "../../Utils/AppContext/AppContext";
import CreateUserAdminModal from "../Modals/CreateUserAdminModal";
import UserAdminProfileModal from "../Modals/UserAdminProfileModal";
import LogController from "../../Utils/Controllers/LogController";

export default function UserAdminDataGrid() {
  const [selectedUser, setSelectedUser] = React.useState();
  const [openPopup, setOpenPopup] = React.useState(false);
  const [openPopupInfo, setOpenPopupInfo] = React.useState(false);
  const { dispatch, state } = React.useContext(AppContext);
  const logController = new LogController();
  const columns = [
    { field: "name", headerName: "Nombre", width: 300 /**editable: true */ },
    { field: "email", headerName: "Email", width: 300 /**editable: true */ },
    { field: "_id", headerName: "id", width: 300 },

    {
      field: "actions",
      headerName: "Opciones",
      type: "actions",
      width: 120,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<GridDeleteIcon />}
          label="Eliminar"
          onClick={() => handleOpenModal(params.row)}
        />,
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label="Ver"
          onClick={() => {
            setOpenPopupInfo(true);
            dispatch({ type: "SET_SINGLEUSEADMINDATA", payload: params.row });
          }}
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Editar"
          onClick={() => {
            setSelectedUser(params.row);
            setOpenPopup(true);
          }}
        />,
      ],
    },
  ];

  const updateData = () => {
    fetch("http://localhost:3001/admin")
      .then((res) => res.json())
      .then((res) =>
        dispatch({ type: "SET_USEADMINDATA", payload: res.adminUsers })
      );

    const response = logController.getLog();
    dispatch({ type: "SET_LOGDATA", payload: response });
  };
  const handleOpenModal = (rowData) => {
    dispatch({
      type: "TOGGLE_DELETEUSERMODALVISIBILITY",
      payload: true,
    });
    dispatch({
      type: "SET_DELETEUSERDATA",
      payload: rowData,
    });
    dispatch({
      type: "SET_ADMINUSERID",
      payload: rowData._id,
    });
  };

  return (
    <>
      <DataGrid
        columns={columns}
        rows={state.userAdminData}
        getRowId={(row) => row._id}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 6,
          bottom: params.isLastVisible ? 0 : 6,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? grey[200] : grey[900],
          },
        }}
      />
      <Popup
        setOpenPopup={setOpenPopup}
        openPopup={openPopup}
        title={"Editar usuario administrador"}
      >
        <EditUserAdminModal
          setOpenPopup={setOpenPopup}
          userData={selectedUser}
          updateUserCallback={updateData}
        />
      </Popup>
      <Popup
        setOpenPopup={setOpenPopupInfo}
        openPopup={openPopupInfo}
        title={"Información usuario administrador"}
      >
        <UserAdminProfileModal />
      </Popup>
    </>
  );
}
