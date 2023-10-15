/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

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
        <div
          className={isMobile ? styles.btnMobile : styles.btn}
          onClick={handleOpen}
        >
          <HomeIcon
            className={isMobile ? styles.btnIconMobile : styles.btnIcon}
          />
          Write review for dorm
        </div>
        <div
          className={isMobile ? styles.btnMobile : styles.btn}
          onClick={handleOpenR}
        >
          <MeetingRoomIcon
            className={isMobile ? styles.btnIconMobile : styles.btnIcon}
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
