import React from "react";
import Rating from "@mui/material/Rating";
import styles from "./roomReview_block.module.css";

export default function RoomReviewBlock({
  index,
  room,
  rate,
  year,
  lottery,
  schoolYear,
  message,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header1}>
        <div> Room: {room} </div>{" "}
        {lottery !== -1 ? <div> Lottery number : {lottery} </div> : null}{" "}
        <div className={styles.schoolYear}> {schoolYear} </div>{" "}
      </div>{" "}
      <div className={styles.header}>
        <Rating name="read-only" value={rate} precision={0.5} readOnly />
        <div> {year} </div>{" "}
      </div>{" "}
      {message !== "" ? (
        <div className={styles.message}> {message} </div>
      ) : null}{" "}
      <hr />
    </div>
  );
}
