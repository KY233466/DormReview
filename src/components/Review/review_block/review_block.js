import React from "react";
import Rating from "@mui/material/Rating";
import styles from "./review_block.module.css";

export default function ReviewBlock({ index, divider, year, rate, message }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Rating name="read-only" value={rate} precision={0.5} readOnly />
        <div> {year} </div>
      </div>
      {message !== "" ? (
        <div className={styles.message}> {message} </div>
      ) : null}
      {divider ? <hr /> : null}
    </div>
  );
}
