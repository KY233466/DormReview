import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import { db } from "../../firebase";
import Rating from "@mui/material/Rating";
import Header from "../Header/header";
import ProCon from "../ProCon";
import Review from "../Review";
import RatingDisplay from "../RatingDisplay/RatingDisplay";
import styles from "./details.module.css";

function Details({
  title,
  fetchReviews = true,
  path,
  path2,
  path3,
  available,
  bed_laundry,
  rooms,
  moreInfo,
  description,
  location,
  pic,
  pro,
  con,
  changeDetail,
  alternativeBlock,
}) {
  const dormName = title;

  const [loading, setLoading] = useState(true);
  const [displayLeft, setDisplayLeft] = useState(true);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getDocs(collection(db, path3));
        setReviews(data.docs.map((doc) => ({ ...doc.data() })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    getReviews();
  }, [path3]);

  function changeLeft() {
    changeDetail();
    setDisplayLeft(!displayLeft);
  }

  return (
    <div className={styles.container}>
      {displayLeft && (
        <div className={styles.leftContainer}>
          <Header key={dormName} title={dormName} location={location} />
          <img alt="dorm" src={pic} className={styles.dormPic} />
          <div className={styles.info}>
            <div className={styles.sum}>
              {alternativeBlock ? alternativeBlock : <RatingDisplay />}
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
                <hr /> <Review path={path} path2={path2} path3={path3} />
              </>
            ) : (
              <div style={{ paddingBottom: "20px" }}></div>
            )}
          </div>
        </div>
      )}
      <div className={styles.btn} onClick={() => changeLeft()}>
        {displayLeft ? (
          <img
            alt=""
            src="//maps.gstatic.com/tactile/pane/arrow_left_2x.png"
            className={styles.img}
          ></img>
        ) : (
          <img
            alt=""
            src="//maps.gstatic.com/tactile/pane/arrow_left_2x.png"
            className={styles.imgR}
          ></img>
        )}
      </div>
    </div>
  );
}

export default Details;
