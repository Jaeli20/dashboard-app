import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import NewProjectsTable from "../../../Particles/NewProjectsTable";
export default function Home({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, []);
  const paperItems = [
    {
      title: "Total de proyectos",
      data: 100,
    },
    {
      title: "Proyectos activos",
      data: 100,
    },
    {
      title: "Proyectos cerrados",
      data: 100,
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: "repeat(3,1fr)",
          gridAutoRows: "minmax(100px,auto)",
          gap: 3,
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        {paperItems.map((item) => (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4">{item.title}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">{item.data}</Typography>
            </Box>
          </Paper>
        ))}
      </Box>

      <Box
        sx={{
          mt: 5,
        }}
      >
        <NewProjectsTable />
      </Box>
    </>
  );
}
