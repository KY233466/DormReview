import Header from "../Header/header";
import ProCon from "../ProCon";
import Review from "../Review";
import RatingDisplay from "../RatingDisplay/RatingDisplay";

import styles from "./details.module.css";

const content = ({
  title,
  dormName,
  location,
  pic,
  altRatingDisplayBlock,
  available,
  bed_laundry,
  path,
  path2,
  path3,
  rooms,
  pro,
  con,
  moreInfo,
  description,
  fetchReviews,
  altReviewBlock,
}) => {
  return (
    <>
      <Header key={dormName} title={title} location={location} />
      <img alt="dorm" src={pic} className={styles.dormPic} />
      <div className={styles.info}>
        <div className={styles.sum}>
          {altRatingDisplayBlock ? (
            altRatingDisplayBlock
          ) : (
            <RatingDisplay path3={path3} />
          )}
          <div> {available} </div>
          <div> {bed_laundry} </div>
          <div style={{ fontSize: "14px" }}> {rooms} </div>
        </div>

        <hr />
        <ProCon key={pro} pro={pro} con={con} />
        <a
          className={styles.link}
          href={moreInfo}
          target={"_blank"}
          rel="noreferrer"
        >
          View more about room, bathroom, and amenities
        </a>
        <hr />
        <div className={styles.text}>
          <div style={{ fontSize: "14px" }}> {description} </div>
        </div>
        {fetchReviews ? (
          <>
            <hr />
            {altReviewBlock ? (
              altReviewBlock
            ) : (
              <Review path={path} path2={path2} path3={path3} />
            )}
          </>
        ) : (
          <div style={{ paddingBottom: "20px" }}></div>
        )}
      </div>
    </>
  );
};

export default content;
