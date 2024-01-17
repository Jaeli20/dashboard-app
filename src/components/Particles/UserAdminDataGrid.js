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

export default function UserAdminDataGrid({ data }) {
  React.useEffect(() => {
    const a = async () => {
      try {
        const user = await fetch("http://localhost:3001/admin");
        if (!user.ok) {
          throw new Error(`Error en la solicitud: ${user.status}`);
        }

        const userJson = await user.json();
        console.log(userJson.users);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    a();
  }, []);

  const data2 = [
    {
      _id: "65a1cb899e29bc11188b38d8",
      name: "name",
      email: "abc",
      password: "$2b$10$bbln/S0vQw51faPVU/UZqOcwTK1b8fK9WyaNMdI.M5jcD0KQsLPmG",
      active: true,
      __v: 0,
      created_at: "2024-01-17T02:18:22.448Z",
      updated_at: "2024-01-17T02:18:22.448Z",
    },
    {
      _id: "65a1d21b13812c6af285ffaf",
      name: "a2",
      email: "abc2",
      password: "$2b$10$C7wJ3jPlpG8i8n14m/c7P.HlYZ/j/dskk.A6xBdEFS0RSDjtTXiJi",
      active: false,
      created_at: "2024-01-12T23:58:19.282Z",
      updated_at: "2024-01-13T00:02:14.553Z",
      __v: 0,
    },
    {
      _id: "65a1d89f47c9ce96473c0b81",
      name: "a2",
      email: "a",
      password: "$2b$10$vBmP5.ZVenabBzzCu7z.feMH.impsWlp75C59xenPnYDW8xSuE8Ve",
      active: true,
      created_at: "2024-01-13T00:26:07.721Z",
      updated_at: "2024-01-13T00:26:07.722Z",
      __v: 0,
    },
  ];

  const columns = [
    { field: "name", headerName: "Nombre", width: 200 /**editable: true */ },
    { field: "email", headerName: "Email", width: 200 /**editable: true */ },
    { field: "_id", headerName: "id", width: 200 },

    {
      field: "actions",
      headerName: "Opciones",
      type: "actions",
      width: 120,
      getActions: (params) => [
        <GridActionsCellItem icon={<GridDeleteIcon />} label="Eliminar" />,
        <GridActionsCellItem icon={<VisibilityIcon />} label="Ver" />,
        <GridActionsCellItem icon={<EditIcon />} label="Editar" />,
      ],
    },
  ];

  return (
    <>
      <DataGrid
        columns={columns}
        rows={data2}
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
    </>
  );
}
