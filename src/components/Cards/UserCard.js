import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack, TextField } from "@mui/material";
import ProjectsUserInList from "../Lists/ProjectsUserInList";
import UserController from "../../Utils/Controllers/UserController";
import AppContext from "../../Utils/AppContext/AppContext";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function UserCard() {
  const [expanded, setExpanded] = React.useState(false);
  const { state } = React.useContext(AppContext);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const userController = new UserController();
  const [projects, setProjects] = React.useState();

  React.useEffect(() => {
    userController.getProjectImIn(state.DeleteUserData._id).then((project) => {
      setProjects(project);
    });
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={state.DeleteUserData._id} />}
        title={state.DeleteUserData.name}
      />

      <CardContent>
        <Stack spacing={2} margin={2}>
          <TextField
            label="ID"
            disabled
            value={state.DeleteUserData._id}
            id="outlined"
          />
          <TextField
            label="Correo"
            disabled
            value={state.DeleteUserData.email}
            id="outlined"
          />
          <TextField
            label="Ocupación"
            disabled
            value={
              state.DeleteUserData.occupation
                ? state.DeleteUserData.occupation
                : "No definido"
            }
            id="outlined"
          />
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Proyectos en los que participa:</Typography>
          <ProjectsUserInList data={projects} key={0} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
