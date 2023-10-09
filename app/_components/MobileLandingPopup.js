import { useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Signin from "../../components/SignUp/signin";
import Signup from "../../components/SignUp/signup";

const mobileStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "18px",
  p: 4,
  display: "flex",
  alignItems: "center",
};

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleOpenSignin = () => setIsSigninOpen(true);

  const handleCloseModal = () => {
    setIsSigninOpen(false);
    setIsSignupOpen(false);
  };

  const handleOpenSignup = () => setIsSignupOpen(true);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          minWidth: 150,
          fontWeight: 800,
          paddingTop: "30px",
        }}
      >
        Hi!
      </DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem>
          <ListItemButton onClick={handleOpenSignin}>Login</ListItemButton>
        </ListItem>
      </List>
      <List sx={{ pt: 0, marginBottom: "20px" }}>
        <ListItem>
          <ListItemButton onClick={handleOpenSignup}>Sign up</ListItemButton>
        </ListItem>
      </List>

      <Modal
        open={isSigninOpen || isSignupOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={mobileStyle}>
          {isSigninOpen && <Signin />}
          {isSignupOpen && <Signup />}
        </Box>
      </Modal>
    </Dialog>
  );
}
