import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function NewProjectsTable() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch("https://metriklass-api-dev-fgtq.4.us-1.fl0.io/test")
      .then((res) => res.json())
      .then((resjson) => {
        // Mapear y establecer los primeros 5 elementos
        const mappedData = resjson.slice(0, 5).map((item) => {
          return createData(item.projectName, item.projectOwner, item.progress);
        });
        setData(mappedData);
      });
  }, []);

  function createData(projectName, owner, progress, team) {
    return { projectName, owner, progress };
  }

  const rows = data || [];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Nuevos proyectos">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Creador</TableCell>
            <TableCell align="right">Progreso</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.projectName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.projectName}
              </TableCell>
              <TableCell align="right">{row.owner}</TableCell>
              <TableCell align="right">{row.progress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
