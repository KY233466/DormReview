import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Rating from "@mui/material/Rating";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { CoursesList } from "../../components/courses/ CoursesList";
import styles from "./details.module.css";
// import Title from "../../components/title/Title";
// import { AddCourse } from "../../components/AddCourse/AddCourse";
// import MediaQuery from "react-responsive";
// import pic from "../../assets/hhall.jpeg"
import Header from "../Header/header";
import Lottery from "../Lottery/lottery";
import Rooms from "../Rooms/rooms";
import ProCon from "../ProCon/ProCon";
import Review from "../Review/review";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Details({
  title,
  index,
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

  const [displayLeft, setDisplayLeft] = useState(true);
  const [reviews, setReviews] = useState(null);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(collection(db, path3));
      setReviews(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getReviews();
  }, []);

  function changeLeft() {
    changeDetail();
    setDisplayLeft(!displayLeft);
  }

  return (
    <div className={styles.container}>
      {displayLeft ? (
        <div className={styles.leftContainer}>
          <Header key={dormName} title={dormName} location={location} />
          <img alt="dorm" src={pic} className={styles.dormPic}></img>
          <div className={styles.info}>
            <div className={styles.sum}>
              <div className={styles.data}>
                {reviews?.map((element, index) => {
                  return (
                    <div
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
              <div>
                <div> {bed_laundry} </div> <div> {rooms} </div>
              </div>
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
              <div> {description} </div>
              {/* <div> This hall houses mostly Second-Year students.</div> */}
            </div>
            <hr />
            <Review path={path} path2={path2} path3={path3} />
          </div>
        </div>
      ) : null}
      <div className={styles.btn} onClick={() => changeLeft()}>
        {displayLeft ? (
          <img
            alt=""
            jstcache="10"
            src="//maps.gstatic.com/tactile/pane/arrow_left_2x.png"
            className={styles.img}
          ></img>
        ) : (
          <img
            alt=""
            jstcache="10"
            src="//maps.gstatic.com/tactile/pane/arrow_left_2x.png"
            className={styles.imgR}
          ></img>
        )}
      </div>
    </div>
  );
}

export default Details;
