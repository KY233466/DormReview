import React, { useState } from "react";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { CoursesList } from "../../components/courses/ CoursesList";
import styles from "./details.module.css";
// import Title from "../../components/title/Title";
// import { AddCourse } from "../../components/AddCourse/AddCourse";
// import MediaQuery from "react-responsive";
// import pic from "../../assets/hhall.jpeg"
import Header from "../Header/header";
import Lottery from "../Lottery/lottery"
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

  function changeLeft() {
    changeDetail();
    setDisplayLeft(!displayLeft);
  }

  return (
    <div className={styles.container}>
      {displayLeft ? (
        <div className={styles.leftContainer}>
          <Header key={dormName} title={dormName} location={location} />
          <img alt="harleston hall" src={pic} className={styles.dormPic}></img>
          <div className={styles.info}>
            <div className={styles.sum}>
              <div className={styles.data}>
                <div>🌟 🌟 🌟 🌟 🌟</div>
                <div>{available} </div>
              </div>

              <div>
                <div>{bed_laundry} </div>
                <div>{rooms}</div>
              </div>
            </div>

            <hr />

            <ProCon key={pro} pro={pro} con={con} />

            <a href={moreInfo} target={"_blank"} rel="noreferrer">
              View more about room, bathroom, and amenities
            </a>

            <Lottery />

            <hr />

            <div className={styles.text}>
              <div>{description}</div>
              {/* <div> This hall houses mostly Second-Year students.</div> */}
            </div>

            <hr />

            <Review />
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
