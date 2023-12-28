import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppContext from "../../Utils/AppContext/AppContext";
import { TextField } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const { dispatch, state } = React.useContext(AppContext);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={state.TransitionsModalVisibility}
        onClose={() =>
          dispatch({
            type: "TOGGLE_TRANSITIONMODALVISIBILITY",
            payload: false,
          })
        }
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={state.TransitionsModalVisibility}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
