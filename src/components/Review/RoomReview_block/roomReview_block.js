import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./roomReview_block.module.css";

export default function RoomReviewBlock({
  index,
  room,
  rate,
  year,
  lottery,
  schoolYear,
  message,
  divider,
}) {
  const isMobile = useMediaQuery("(max-width:899px)");

  const RoomLotterySchoolYear = () => {
    return isMobile ? (
      <div className={styles.header1Mobile}>
        <div> Room: {room} </div>
        {lottery !== -1 && <div> Lottery number: {lottery}</div>}
        <div
          className={styles.schoolYear}
          style={{ marginLeft: 0, marginTop: "10px" }}
        >
          {schoolYear}
        </div>
      </div>
    ) : (
      <div className={styles.header1}>
        <div> Room: {room} </div>
        {lottery !== -1 && <div> Lottery number: {lottery}</div>}
        <div className={styles.schoolYear}>{schoolYear}</div>
      </div>
    );
  };

  const RatingYear = () => {
    return isMobile ? (
      <div className={styles.headerMobile}>
        <Rating name="read-only" value={rate} precision={0.5} readOnly />
        <div>{year}</div>
      </div>
    ) : (
      <div className={styles.header}>
        <Rating name="read-only" value={rate} precision={0.5} readOnly />
        <div>{year}</div>
      </div>
    );
  };

  return (
    <div className={isMobile ? styles.container : null}>
      {RoomLotterySchoolYear()}
      {RatingYear()}
      {message !== "" ? (
        <div className={styles.message}> {message} </div>
      ) : null}
      {divider ? <hr /> : null}
    </div>
  );
}
