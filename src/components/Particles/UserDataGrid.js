import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  DataGrid,
  GridActionsCellItem,
  GridDeleteIcon,
  gridClasses,
} from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState, useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UserActions from "../Pages/Dasboard/User/UserActions";
import AppContext from "../../Utils/AppContext/AppContext";
import Popup from "../Popups/Popup";
import EditUserModal from "../Modals/EditUserModal";
import UserProfileModal from "../Modals/UserProfileModal";
export default function UserDataGrid({ data }) {
  const [rowId, setRowId] = useState(null);
  const { dispatch } = useContext(AppContext);

  const [selectedUser, setSelectedUser] = React.useState();

  const handleOpenModal = (rowData) => {
    dispatch({
      type: "TOGGLE_DELETEUSERMODALVISIBILITY",
      payload: true,
    });
    dispatch({
      type: "SET_DELETEUSERDATA",
      payload: rowData,
    });
  };
  const columns = useMemo(
    () => [
      {
        field: "profilePhoto",
        headerName: "Foto",
        width: 200,
        renderCell: (params) => <Avatar src={params.row.profilePhoto} />,
        sortable: false,
        filterable: false,
      },
      { field: "name", headerName: "Nombre", width: 200 /**editable: true */ },
      { field: "email", headerName: "Email", width: 200 /**editable: true */ },
      { field: "_id", headerName: "id", width: 200 },
      /** {
        field: "quick_save",
        headerName: "Cambios rápidos",
        type: "actions",
        width: 200,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <UserActions {...{ params, rowId, setRowId }} />
        ),
      }, */
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
              dispatch({
                type: "SET_USERDATA",
                payload: params.row,
              });
            }}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Editar"
            onClick={() => {
              setOpenPopup(true);
              setSelectedUser(params.row);
              dispatch({ type: "SET_USERID", payload: params.row._id });
            }}
          />,
        ],
      },
    ],
    [rowId]
  );

  const [openPopup, setOpenPopup] = React.useState(false);
  const [openPopupInfo, setOpenPopupInfo] = React.useState(false);
  return (
    <>
      <DataGrid
        columns={columns}
        rows={data}
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
        onCellEditCommit={(params) => setRowId(params.id)}
      />
      <Popup
        setOpenPopup={setOpenPopup}
        openPopup={openPopup}
        title={"Editar usuario"}
      >
        <EditUserModal setOpenPopup={setOpenPopup} userData={selectedUser} />
      </Popup>
      <Popup
        setOpenPopup={setOpenPopupInfo}
        openPopup={openPopupInfo}
        title={"Información de usuario"}
      >
        <UserProfileModal />
      </Popup>
    </>
  );
}
