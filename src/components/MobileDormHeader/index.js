import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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

export default function MobileDormHeader() {
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

  return (
    <AppBar sx={{ backgroundColor: "#2c5a7b" }} position="static">
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          sx={{
            minHeight: "auto",
            height: "auto",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          {/* <a href={isMobile ? "/map" : "/"} className={styles.btn}> */}
          <a href={"/map"}>
            <ArrowBackIosIcon />
          </a>
          {/* <Typography variant="body1" sx={{ fontWeight: 700 }}>
            DormReview
          </Typography> */}

          {/* <IconButton
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
          </IconButton> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
