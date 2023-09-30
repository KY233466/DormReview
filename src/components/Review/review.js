/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import styles from "./review.module.css";
import CreateIcon from "@mui/icons-material/Create";
import DormReview from "./dormReview/dormReview";
import RoomReview from "./roomReview/roomReview";
import Tabs from "./reviewTab/reviewTab";
import HomeIcon from "@mui/icons-material/Home";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

function Review({ path, path2, path3, isMobile }) {
  const [open, setOpen] = useState(false);
  const [openR, setOpenR] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenR = () => setOpenR(true);

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <div
          className={isMobile ? styles.btnMobile : styles.btn}
          onClick={handleOpen}
        >
          {/* <CreateIcon
            sx={{
              marginRight: "7px",
              color: "#2C5A7B",
            }}
          /> */}
          <HomeIcon
            sx={{
              marginRight: "7px",
              color: "#fad1bf",
            }}
          />
          Write review for dorm
        </div>
        <div
          className={isMobile ? styles.btnMobile : styles.btn}
          onClick={handleOpenR}
        >
          {/* <CreateIcon
            sx={{
              marginRight: "7px",
              color: "#2C5A7B",
            }}
          /> */}
          <MeetingRoomIcon
            sx={{
              marginRight: "7px",
              color: "#fad1bf",
            }}
          />
          Write review for room
        </div>
      </div>
      <DormReview
        name={path}
        path={path}
        path2={path3}
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
