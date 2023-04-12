import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import profile from "../../assets/profile.png";
import Divider from "@mui/material/Divider";
import { useUserAuth } from "../../context/userAuthContext";
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/profile`;
    navigate(path);
  };

  const { logOut, user } = useUserAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("logged out");
      // navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
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
        <Avatar
          sx={{
            width: 45,
            height: 45,
          }}
          alt="Profile"
          src={profile}
        />{" "}
      </IconButton>{" "}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <MenuItem onClick={handleClose}> Profile </MenuItem>{" "} */}
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}{" "}
        {user ? (
          <div>
            <MenuItem onClick={routeChange}>Profile</MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}> Logout </MenuItem>
          </div>
        ) : null}{" "}
      </Menu>{" "}
    </div>
  );
}
