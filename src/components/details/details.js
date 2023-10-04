import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import { db } from "../../firebase";
import Rating from "@mui/material/Rating";
import Header from "../Header/header";
import ProCon from "../ProCon/ProCon";
import Review from "../Review/review";
import styles from "./details.module.css";

function Details({
  title,
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
              {loading ? (
                <Skeleton width={"100%"} height={"35px"} />
              ) : (
                <div className={styles.data}>
                  {reviews?.map((element) => {
                    return (
                      <div
                        key={element.nReviews}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            marginTop: "2px",
                          }}
                        >
                          {element.Rate.toFixed(1)}
                        </div>
                        <Rating
                          key="{element}"
                          index={element.index}
                          name="read-only"
                          value={element.Rate}
                          precision={0.5}
                          readOnly
                        />
                        <div
                          style={{
                            marginTop: "2px",
                          }}
                        >
                          {element.nReviews} reviews
                        </div>
                      </div>
                    );
                  })}
                  <div> {available} </div>
                </div>
              )}
              <div>
                <div> {bed_laundry} </div> <div> {rooms} </div>
              </div>
            </div>

            <hr />
            <ProCon key={pro} pro={pro} con={con} />
            <a
              style={{ width: "fit-content" }}
              href={moreInfo}
              target={"_blank"}
              rel="noreferrer"
            >
              View more about room, bathroom, and amenities
            </a>
            <hr />
            <div className={styles.text}>
              <div> {description} </div>
            </div>
            <hr />
            <Review path={path} path2={path2} path3={path3} />
          </div>
        </div>
      )}
      <div className={styles.btn} onClick={() => changeLeft()}>
        {displayLeft ? (
          <img
            alt=""
            // jstcache="10"
            src="//maps.gstatic.com/tactile/pane/arrow_left_2x.png"
            className={styles.img}
          ></img>
        ) : (
          <img
            alt=""
            // jstcache="10"
            src="//maps.gstatic.com/tactile/pane/arrow_left_2x.png"
            className={styles.imgR}
          ></img>
        )}
      </div>
    </div>
  );
}

export default Details;
