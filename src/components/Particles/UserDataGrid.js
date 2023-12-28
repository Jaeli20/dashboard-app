import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  DataGrid,
  GridActionsCellItem,
  GridDeleteIcon,
  gridClasses,
} from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UserActions from "../Pages/Dasboard/User/UserActions";
export default function UserDataGrid({ data }) {
  const [rowId, setRowId] = useState(null);

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
      { field: "name", headerName: "Nombre", width: 200, editable: true },
      { field: "email", headerName: "Email", width: 200, editable: true },
      { field: "_id", headerName: "id", width: 200 },
      {
        field: "quick_save",
        headerName: "Cambios rápidos",
        type: "actions",
        width: 200,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <UserActions {...{ params, rowId, setRowId }} />
        ),
      },
      {
        field: "actions",
        headerName: "Opciones",
        type: "actions",
        width: 100,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<GridDeleteIcon />}
            label="Eliminar"
            onClick={() => console.log(params.row.name)}
          />,
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="Ver"
            onClick={() => alert(params)}
          />,
        ],
      },
    ],
    [rowId]
  );
  return (
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
  );
}
