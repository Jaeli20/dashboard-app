import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  DataGrid,
  GridActionsCellItem,
  GridDeleteIcon,
  gridClasses,
} from "@mui/x-data-grid";
import React, { useMemo, useState } from "react";
import AppContext from "../../Utils/AppContext/AppContext";

export default function LogDataGrid({ data }) {
  const { state } = React.useContext(AppContext);
  const [rowId, setRowId] = useState(null);

  const columns = useMemo(
    () => [
      {
        field: "severity",
        headerName: "Gravedad",
        width: 200,
      },
      { field: "message", headerName: "Log", width: 400 },
      { field: "origin", headerName: "Origen", width: 200 },
      {
        field: "created_at",
        headerName: "Fecha",
        width: 200,
        renderCell: (params) => <Box>{formatDate(params.row.created_at)}</Box>,
      },
    ],
    [rowId]
  );

  const row = [
    {
      _id: "65ad7ec803fcad89ad228723",
      message: "test log",
      severity: "info",
      origin: "65a1d89f47c9ce96473c0b81",
      created_at: "2024-01-21T20:30:00.145Z",
      __v: 0,
    },
    {
      _id: "65ad8668869e1449e5b5ad0a",
      message: "Usuario administrador creado: undefined",
      severity: "info",
      origin: "65ad8668869e1449e5b5ad08",
      created_at: "2024-01-21T21:02:32.850Z",
      __v: 0,
    },
    {
      _id: "65ad86d4b018cd508dddf82e",
      message: "Usuario administrador creado: probando log",
      severity: "info",
      origin: "65ad86d4b018cd508dddf82c",
      created_at: "2024-01-21T21:04:20.817Z",
      __v: 0,
    },
    {
      _id: "65ad8accf8b529bc9efbe997",
      message: "Usuario administrador creado",
      severity: "info",
      created_at: "2024-01-21T21:21:16.583Z",
      __v: 0,
    },
    {
      _id: "65ad8e18024f60de771e0b48",
      message: "Usuario administrador creado",
      severity: "info",
      created_at: "2024-01-21T21:35:20.259Z",
      __v: 0,
    },
    {
      _id: "65ad8e6d56f432981ec50b20",
      message: "Usuario administrador actualizado",
      severity: "info",
      created_at: "2024-01-21T21:36:45.283Z",
      __v: 0,
    },
    {
      _id: "65ad8eb5069814085d2e7b59",
      message: "Usuario administrador Habilitado",
      severity: "warning",
      created_at: "2024-01-21T21:37:57.006Z",
      __v: 0,
    },
    {
      _id: "65ad8ebd069814085d2e7b5f",
      message: "Usuario administrador Deshabilitado",
      severity: "warning",
      created_at: "2024-01-21T21:38:05.753Z",
      __v: 0,
    },
    {
      _id: "65ad90c6e8a840e8dd577859",
      message: "Usuario administrador eliminado",
      severity: "alert",
      created_at: "2024-01-21T21:46:46.786Z",
      __v: 0,
    },
    {
      _id: "65ad90dbe8a840e8dd577959",
      message: "Usuario administrador eliminado",
      severity: "alert",
      created_at: "2024-01-21T21:47:07.664Z",
      __v: 0,
    },
    {
      _id: "65ad9131e8a840e8dd577a58",
      message: "Usuario administrador eliminado",
      severity: "alert",
      created_at: "2024-01-21T21:48:33.726Z",
      __v: 0,
    },
    {
      _id: "65ad91a5e8a840e8dd577b56",
      message: "Usuario administrador eliminado",
      severity: "alert",
      created_at: "2024-01-21T21:50:29.545Z",
      __v: 0,
    },
    {
      _id: "65ad91aee8a840e8dd577c55",
      message: "Usuario administrador eliminado",
      severity: "alert",
      created_at: "2024-01-21T21:50:38.420Z",
      __v: 0,
    },
  ];

  const formatDate = (date) => {
    const format = new Date(date);
    const year = format.getFullYear();
    const month = (format.getMonth() + 1).toString().padStart(2, "0");
    const day = format.getDate().toString().padStart(2, "0");
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <DataGrid
        columns={columns}
        rows={state.logData}
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
    </>
  );
}
