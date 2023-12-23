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
import UserActions from "./UserActions";
export default function User({ setSelectedLink, link }) {
  const [data, setData] = useState();
  const [rowId, setRowId] = useState(null);

  useEffect(() => {
    fetch("https://metriklass-api-dev-fgtq.4.us-1.fl0.io/user/test")
      .then((data) => data.json())
      .then((dataJson) => setData(dataJson));
    setSelectedLink(link);
  }, []);
  const GetUserData = async () => {
    await fetch("https://metriklass-api-dev-fgtq.4.us-1.fl0.io/user/test")
      .then((data) => data.json())
      .then((dataJson) => setData(dataJson));
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

  const data2 = [
    {
      personalDocs: {
        Antecedentes:
          "https://firebasestorage.googleapis.com/v0/b/pasantias-storage.appspot.com/o/users%2FpersonalDocs%2F6516094b91620132c9e11d81%2FAntecedentes%20penales?alt=media&token=3042a53d-fc10-4a69-b69b-74e4fbebd1dd",
        DUI: "https://firebasestorage.googleapis.com/v0/b/pasantias-storage.appspot.com/o/users%2FpersonalDocs%2F6516094b91620132c9e11d81%2FDUI?alt=media&token=6d0ce9e9-4110-407c-8a36-afae4410bb0d",
        Solvencia:
          "https://firebasestorage.googleapis.com/v0/b/pasantias-storage.appspot.com/o/users%2FpersonalDocs%2F6516094b91620132c9e11d81%2FSolvencia%20PNC?alt=media&token=4186b3dd-afcb-4f1d-a0c8-fd45fd949bae",
      },
      _id: "6516094b91620132c9e11d81",
      id: "usertest",
      name: "William Ernesto",
      email: "werramos1420@gmil.com",
      bornDate: "2023/09/30",
      profilePhoto:
        "https://firebasestorage.googleapis.com/v0/b/pasantias-storage.appspot.com/o/users%2FprofilePhotos%2F6516094b91620132c9e11d81?alt=media&token=e31db773-7662-407f-9a92-e5f8403a5852",
      __v: 0,
      password: "$2b$10$y77ll0mdJG8FthYMjYbRju39Z3GpjWEuahzS0GmyN9NGVUT.7YXHS",
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "651888c180eaed35ebe6ef03",
      name: "test",
      email: "test",
      password: "$2b$10$.aUz7Zq3TA09vkFtv4vcL.kqQTbecqbzG/9Z1kukK7.MDtT7M4aIe",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "65189396ef2031a613976306",
      name: "user login test",
      email: "werramos1420@gmial.com",
      password: "$2b$10$u8Pko/ilSoIQcrThnkEeEOnPGrzNAMmH24MAoCYIIE4nQfttzKDja",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "651b330c99880d3f45332907",
      name: "Will",
      email: "w@s.com",
      password: "$2b$10$QVeaqNjiv0usqu5aENBdX.edIGsCbvArW.OyqwDOeRttl/Ni2l3iq",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "651b334799880d3f45332909",
      name: "res22",
      email: "test2",
      password: "$2b$10$r8CmiePG3GySXkYyP6NRbuT8fomC8FjgD9davW.pc8pwTbWzhNcLe",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "65288823843e4beca394319a",
      name: "prubea",
      email: "test",
      password: "$2b$10$VY1k6Lf/So.19RWZ/gPZ0ekYONFoaF1KlXQ8tTHmeqen5eI4J45TW",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "65288853843e4beca394319d",
      name: "prubea",
      email: "test2",
      password: "$2b$10$0LlKQn9J42g7t/ntHB8wFeltfWbskdZYQpL45AMh53h1Kjec0lJtu",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "652888fc337c9ee0f80103be",
      name: "prubea",
      email: "test22",
      password: "$2b$10$PiMRuOj6525rXD5UjKgvW.kJm8gfecpdOcTCnkgVm2ppCdfv1LdgO",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "65288905337c9ee0f80103c4",
      name: "prubea",
      email: "test222",
      password: "$2b$10$PYjd9WXaRJm3RO/W/5/hMedpUYfnXlUQb5lwrinpCw85RQpcuDdRW",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "65288bfa3f29a37330f36ae6",
      name: "prubea",
      email: "test@gmail.com",
      password: "$2b$10$cO3yJXR13tcr3kSSvTig6eF.C1ossZlxBllzuRvojBlsQmtTJwGLK",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "65288c0e74e7e19ec50b35b6",
      name: "prubea",
      email: "test2@gmail.com",
      occupation: "OCUPATION",
      password: "$2b$10$frG/wQmsyitQ9sC0KYdA2ubz2Ps6PCZWKxXzcO/RHp6J2nzzQ/X6O",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "652895e17232d1bf87885f25",
      name: "William",
      email: "werramos1420@gmail.com",
      occupation: "Test",
      password: "$2b$10$yjeqJxRFjMA1WoVVpf8XWeRfLVjf0kGAvuLDpccqUnLHL5MJ7NnZO",
      profilePhoto:
        "https://firebasestorage.googleapis.com/v0/b/pasantias-storage.appspot.com/o/users%2FprofilePhotos%2F652895e17232d1bf87885f25?alt=media&token=6de31a53-ff65-4008-9bf0-52868e885dda",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "652970477232d1bf8788667a",
      name: "usuario",
      email: "usuario@cuido.com",
      occupation: "rere",
      password: "$2b$10$NN65W7w/8T2ZKUo9m9aBluXnua2BAZj0AuSJupoW47J5XVPPSvn0W",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "6551a140ee7d92a0b4e68127",
      password: "$2b$10$unbyhEDVOcxzuN.2WOVZtOd5HCx9RQzFzL4MNXWqORPfeqj5hnJpe",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "6551a2b966f9720afeb96e19",
      password: "$2b$10$q0oJBjPGc/R77IC58kGctuKUiHjYcus38lVKAaVo55JGYJRpZbqQe",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "6559579228feb2b15f56cd1c",
      name: "Ken",
      email: "kenya@gmail.com",
      occupation: "Doseñador",
      password: "$2b$10$P5M26/7luibm7N1mdotLfuFvtMbsxJlNLgZh.AYy9TI6exo6h.pnS",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "6559a9c828feb2b15f56ce85",
      name: "willi",
      email: "werr@s.com",
      occupation: "will",
      password: "$2b$10$8kLVwbLFCPEKuKXO6VpIDOU34SfmlQZBBC2TSSV1e4KgkyZs7gZtO",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "655a829f28feb2b15f56d1a0",
      name: "Kenn",
      email: "27kenyapalma09@gmail.com",
      occupation: "Programador jr",
      password: "$2b$10$6DRDRut07ouseh/RKlp06.uhpfxG6KowdpWYfV44sKiZV5vGlq0fe",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "655cbc8922de59169979e121",
      name: "Kevin",
      email: "kmjh140217@gmail.com",
      occupation: "Docente",
      password: "$2b$10$OCjYr9S0YujPdmjT0EIi4.ea0vo6/IGcETARIgP3m8OU3srU.vPpm",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
    {
      personalDocs: {
        DUI: null,
        Antecedentes: null,
        Solvencia: null,
      },
      _id: "657c8d2275c49a18a4db2543",
      name: "Hola",
      email: "hola@gmail.com",
      occupation: "Hola",
      password: "$2b$10$Xa.AdiaGVGYSw6GcHmSOYO/30C/9JjCnJbVulE5px8s8ECjB82CoC",
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      __v: 0,
    },
  ];
  return (
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
        Usuarios
      </Typography>
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
        onCellEditCommit={(params) => setRowId(params.id)}
      />
    </Box>
  );
}
