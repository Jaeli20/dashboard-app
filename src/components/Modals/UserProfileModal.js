import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import UserWidget from "../Wigets/UserWidget/UserWidget";
import { useParams } from "react-router-dom";

const UserProfileModal = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget />

          <Box m="2rem 0" />
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfileModal;
