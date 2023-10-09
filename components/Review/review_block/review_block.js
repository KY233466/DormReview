import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./review_block.module.css";

export default function ReviewBlock({ index, divider, year, rate, message }) {
  const isMobile = useMediaQuery("(max-width:899px)");

  return (
    <div className={isMobile ? styles.container : null}>
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
