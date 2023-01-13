/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

import styles from "./review.module.css";
import CreateIcon from "@mui/icons-material/Create";
import DormReview from "./dormReview/dormReview";
import RoomReview from "./roomReview/roomReview";
import Tabs from "./reviewTab/reviewTab";

function Review({ path, path2, path3 }) {
  const [open, setOpen] = useState(false);
  const [openR, setOpenR] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenR = () => setOpenR(true);

  return (
    <div className={styles.container}>
      <div className={styles.btn} onClick={handleOpen}>
        <CreateIcon
          sx={{
            marginRight: "7px",
            color: "#2C5A7B",
          }}
        />
        Write review for dorm{" "}
      </div>
      <div className={styles.btn} onClick={handleOpenR}>
        <CreateIcon
          sx={{
            marginRight: "7px",
            color: "#2C5A7B",
          }}
        />
        Write review for room{" "}
      </div>
      <DormReview path={path} path2={path3} open={open} setOpen={setOpen} />
      <RoomReview path={path2} open={openR} setOpen={setOpenR} />
      <div className={styles.reviewSection}>
        <Tabs path={path} path2={path2} />{" "}
      </div>{" "}
    </div>
  );
}

export default Review;
