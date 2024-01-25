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
      {
        field: "created_at",
        headerName: "Hora",
        width: 200,
        renderCell: (params) => <Box>{formatTime(params.row.created_at)}</Box>,
      },
    ],
    [rowId]
  );

  const formatDate = (date) => {
    const format = new Date(date);
    const year = format.getFullYear();
    const month = (format.getMonth() + 1).toString().padStart(2, "0");
    const day = format.getDate().toString().padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  const formatTime = (date) => {
    const time = new Date(date);
    const hour = time.getHours();
    const min = time.getMinutes();
    const second = time.getSeconds();
    return `${hour}:${min}:${second}`;
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
