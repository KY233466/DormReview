/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import Chip from "@mui/material/Chip";

import DormReview from "./dormReview/dormReview";
import RoomReview from "./roomReview/roomReview";
import Tabs from "./reviewTab/reviewTab";

import styles from "./review.module.css";

function Review({ path, path2, path3, isMobile }) {
  const [open, setOpen] = useState(false);
  const [openR, setOpenR] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenR = () => setOpenR(true);

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <Chip
          className={isMobile ? styles.btnMobile : styles.btn}
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
          className={isMobile ? styles.btnMobile : styles.btn}
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
        name={path}
        path={path}
        path3={path3}
        open={open}
        setOpen={setOpen}
      />
      <RoomReview name={path} path={path2} open={openR} setOpen={setOpenR} />
      <div className={styles.reviewSection}>
        <Tabs path={path} path2={path2} />
      </div>
    </div>
  );
}

export default Review;
