import { useState } from "react";
import MediaQuery from "react-responsive";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Details from "components/details/details";
import FloorPlan from "components/FloorPlan/FloorPlan";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";

import pic from "assets/hhall.jpeg";
import bathroom from "assets/bathroom.png";
import elevator from "assets/elevator.png";
import Location from "assets/location.png";

import OneFloor from "assets/floor/Harleston/1Harleston.png";
import TwoFloor from "assets/floor/Harleston/2Harleston.png";
import ThreeFloor from "assets/floor/Harleston/3Harleston.png";

import styles from "./harleston.module.css";

const floor = [
  {
    title: 3,
    pic: ThreeFloor,
    unit: "45",
    name: "45 Winthrop Street",
  },
  {
    title: 2,
    pic: TwoFloor,
    unit: "44",
    name: "44 Winthrop Street",
  },
  {
    title: 1,
    pic: OneFloor,
    unit: "43",
    name: "43 Winthrop Street",
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
  pic: pic,
};

const Pro = [
  {
    title: "Single Person Bathrooms",
    pic: bathroom,
  },
  {
    title: "Elevator",
    pic: elevator,
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: Location,
  },
];

function Harleston() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const pathname = window.location.pathname;

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  return (
    <>
      <MediaQuery maxWidth={860}>
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
      </MediaQuery>

      <MediaQuery minWidth={861}>
        <div className={styles.container}>
          <Details
            title={
              pathname.includes("coho")
                ? floor.find(
                    (f) =>
                      f.unit ===
                      window.location.pathname.slice(
                        pathname.lastIndexOf("/") + 1,
                      ),
                  ).name
                : "Harleston Hall"
            }
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
      </MediaQuery>
    </>
  );
}

export default Harleston;
