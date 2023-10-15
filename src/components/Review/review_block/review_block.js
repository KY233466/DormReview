import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./review_block.module.css";

export default function ReviewBlock({ divider, year, rate, message }) {
  const isMobile = useMediaQuery("(max-width:860px)");

  return (
    <div className={isMobile ? styles.containerMobile : null}>
      <div className={isMobile ? styles.headerMobile : styles.header}>
        <Rating name="read-only" value={rate} precision={0.5} readOnly />
        <div> {year} </div>
      </div>
      {message !== "" && (
        <div className={isMobile ? styles.messageMobile : styles.message}>
          {message}
        </div>
      )}
      {divider && <hr />}
    </div>
  );
}
