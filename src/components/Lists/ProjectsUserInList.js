import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UserController from "../../Utils/Controllers/UserController";
export default function ProjectsUserInList({ data }) {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Grid
        container
        spacing={2}
        padding={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <List>
          {data.length != 0 ? (
            data.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.projectName} />
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))
          ) : (
            <div>No hay datos</div>
          )}
        </List>
      </Grid>
    </Box>
  );
}
