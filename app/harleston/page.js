"use client";

import { useState } from "react";
import MediaQuery from "react-responsive";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useMediaQuery from "@mui/material/useMediaQuery";

import Details from "/components/Details";
import FloorPlan from "/components/FloorPlan";

import styles from "./harleston.module.css";

import MobileDetailBottomSheet from "/components/MobileDetailBottomSheet";

const GFloor = "/floor/Harleston/HarlestionG.png";
const OneFloor = "/floor/Harleston/1Harleston.png";
const TwoFloor = "/floor/Harleston/2Harleston.png";
const ThreeFloor = "/floor/Harleston/3Harleston.png";
const FourFloor = "/floor/Harleston/4Harleston.png";

const floor = [
  {
    title: 4,
    pic: FourFloor,
  },
  {
    title: 3,
    pic: ThreeFloor,
  },
  {
    title: 2,
    pic: TwoFloor,
  },
  {
    title: 1,
    pic: OneFloor,
  },
  {
    title: "G",
    pic: GFloor,
  },
];

const Content = {
  title: "Harleston Hall",
  path: "Harleston",
  path2: "Harleston-room",
  path3: "Harleston-rate",
  available: "Sophomore ✅",
  bed_laundry: "Extra-long twin bed · 13 washers · 14 dryers",
  rooms: "167 doubles · 51 singles · 1 triple",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/harleston-hall",
  description:
    "Once known as South Hall, it is located downhill next to basketball courts, tennis courts, and the Ellis Oval with an adjacent student parking lot. This hall houses mostly Second-Year students.",
  location: "Downhill",
  pic: "/hhall.jpeg",
};

const Pro = [
  {
    title: "Single Person Bathrooms",
    pic: "/bathroom.png",
  },
  {
    title: "Elevator",
    pic: "/elevator.png",
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: "/location.png",
  },
];

function Harleston() {
  const [displayDetail, setDisplayDetail] = useState(true);

  const isMobile = useMediaQuery("(max-width:899px)");

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  return (
    <>
      {!isMobile ? (
        <div className={styles.container}>
          <Details
            title={Content.title}
            path={Content.path}
            path2={Content.path2}
            path3={Content.path3}
            available={Content.available}
            bed_laundry={Content.bed_laundry}
            rooms={Content.rooms}
            moreInfo={Content.moreInfo}
            description={Content.description}
            location={Content.location}
            pic={Content.pic}
            pro={Pro}
            con={Con}
            changeDetail={() => changeDetail()}
          />
          {displayDetail ? <div className={styles.placeholder}> </div> : null}
          <FloorPlan displayDetail={displayDetail} floor={floor} />
        </div>
      ) : (
        <>
          <a
            href={"/map"}
            style={{
              position: "absolute",
              padding: "5px",
              paddingLeft: "3px",
              left: "12px",
              top: "20px",
              zIndex: 1,
              height: "15px",
              width: "15px",
            }}
          >
            <ArrowBackIosIcon style={{ height: "15px", color: "#2f2f2f" }} />
          </a>
          <FloorPlan displayDetail={displayDetail} floor={floor} />
          <MobileDetailBottomSheet content={Content} pro={Pro} con={Con} />
        </>
      )}
    </>
  );
}

export default Harleston;
