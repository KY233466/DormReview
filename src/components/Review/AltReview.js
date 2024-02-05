/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import PropTypes from "prop-types";
import HomeIcon from "@mui/icons-material/Home";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import Chip from "@mui/material/Chip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import DormReview from "./dormReview/dormReview";
import RoomReview from "./roomReview/roomReview";
import MTabs from "./reviewTab/reviewTab";

import styles from "./review.module.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function AltReview({ paths }) {
  const [value, setValue] = useState(0);
  const path = paths[value];
  const [open, setOpen] = useState(false);
  const [openR, setOpenR] = useState(false);
  const isMobile = useMediaQuery("(max-width:860px)");
  const handleOpen = () => setOpen(true);
  const handleOpenR = () => setOpenR(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(paths, path);

  const contentBlock = () => {
    return (
      <div className={styles.container}>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          <Chip
            sx={{
              borderRadius: "25px",
              margin: "15px 0 5px 0",
              padding: isMobile ? "5px" : "22px 4px",
              fontWeight: 800,
              fontSize: isMobile ? 12 : 16,
              color: "white",
              backgroundColor: "#e96a34",
              "&:hover, &:focus": { backgroundColor: "#974421" },
            }}
            onClick={handleOpen}
            icon={
              <HomeIcon
                sx={{ marginRight: "7px", color: "#fad1bf !important" }}
              />
            }
            label="Review the Dorm"
          />
          <Chip
            sx={{
              borderRadius: "25px",
              margin: "15px 0 5px 0",
              padding: isMobile ? "5px" : "22px 4px",
              fontWeight: 800,
              fontSize: isMobile ? 12 : 16,
              color: "white",
              backgroundColor: "#e96a34",
              "&:hover, &:focus": { backgroundColor: "#974421" },
            }}
            onClick={handleOpenR}
            icon={
              <MeetingRoomIcon
                sx={{ marginRight: "7px", color: "#fad1bf !important" }}
              />
            }
            label="Review A Room"
          />
        </div>
        <DormReview
          name={path.path}
          path={path.path}
          path3={path.path3}
          open={open}
          setOpen={setOpen}
        />
        <RoomReview
          name={path.path}
          path={path.path2}
          open={openR}
          setOpen={setOpenR}
        />
        <div className={styles.reviewSection}>
          <MTabs path={path.path} path2={path.path2} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {paths.map((p, index) => (
          <Tab label={p.label} key={index} {...a11yProps(index)} />
        ))}
      </Tabs>
      {paths.map((index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {contentBlock()}
        </CustomTabPanel>
      ))}
    </div>
  );
}

export default AltReview;
