import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import NewProjectsTable from "../../../Particles/NewProjectsTable";
import AppContext from "../../../../Utils/AppContext/AppContext";
import { useContext } from "react";
export default function Home({ setSelectedLink, link }) {
  const [globalInfo, setGlobalInfo] = React.useState();
  const { state } = useContext(AppContext);
  useEffect(() => {
    setSelectedLink(link);
  }, []);

  const paperItems = React.useMemo(() => [
    {
      title: "Total de proyectos",
      data: state.globalInfo.total,
    },
    {
      title: "Proyectos activos",
      data: state.globalInfo.activeTotal,
    },
    {
      title: "Proyectos cerrados",
      data: state.globalInfo.closeTotal,
    },
  ]);
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
