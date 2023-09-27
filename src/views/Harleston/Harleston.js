import { useState } from "react";
import MediaQuery from "react-responsive";

import Details from "../../components/details/details";
import FloorPlan from "../../components/FloorPlan/FloorPlan";

import pic from "../../assets/hhall.jpeg";
import bathroom from "../../assets/bathroom.png";
import elevator from "../../assets/elevator.png";
import Location from "../../assets/location.png";

import GFloor from "../../assets/floor/Harleston/HarlestionG.png";
import OneFloor from "../../assets/floor/Harleston/1Harleston.png";
import TwoFloor from "../../assets/floor/Harleston/2Harleston.png";
import ThreeFloor from "../../assets/floor/Harleston/3Harleston.png";
import FourFloor from "../../assets/floor/Harleston/4Harleston.png";

import styles from "./harleston.module.css";

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

// console.log(Harleston-rate)

function Harleston() {
  const [displayDetail, setDisplayDetail] = useState(true);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  return (
    <>
      <MediaQuery maxWidth={899}>
        <div>lol</div>
        <FloorPlan displayDetail={displayDetail} floor={floor} />
      </MediaQuery>

      <MediaQuery minWidth={900}>
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
      </MediaQuery>
    </>
  );
}

export default Harleston;
