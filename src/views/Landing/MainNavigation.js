import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import LoginModal from "../../components/signUp/signin_modal";
import SignupModal from "../../components/signUp/signup_modal";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

//search as JSX
const search = (
  <StyledSearch>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Suchen…"
      inputProps={{ "aria-label": "search" }}
    />
  </StyledSearch>
);

export default function MainNavigation() {
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    // toggleDrawer(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // toggleDrawer(false);
  };

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    // setState(open);
  };

  return (
    <AppBar sx={{ backgroundColor: "#2c5a7b" }} position="static">
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            DormReview
          </Typography>

          {/* <Box
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            {search}
          </Box> */}

          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              width: "auto",
              marginRight: "3rem",
            }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>

          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton> */}

          <Dialog onClose={handleClose} open={open}>
            <div>lol</div>
          </Dialog>

          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div>
              <div>lol</div>
            </div>
          </Menu> */}

          {/* The outside of the drawer */}
          {/* <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "white",
              }}
            >
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton>
                  <ListItemIcon>
                    <ImageIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Pictures" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <DescriptionIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Documents" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <FolderIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Other" />
                </ListItemButton>
              </Box>

              {search}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  marginBottom: "50px",
                }}
              >
                <LoginModal />
                <SignupModal />
              </Box>
            </Box>
          </Drawer> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
