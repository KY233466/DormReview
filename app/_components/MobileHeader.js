import { useState } from "react";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import SimpleDialog from "./MobileLandingPopup";
import ProfileAvatar from "/components/ProfileAvatar";
import { useUserAuth } from "/context/userAuthContext";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const { user } = useUserAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "#2c5a7b", boxShadow: "none" }}
      position="static"
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            DormReview
          </Typography>

          {user ? (
            <ProfileAvatar />
          ) : (
            <IconButton id="basic-button" onClick={handleClickOpen}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          )}

          <SimpleDialog open={open} onClose={handleClose} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
