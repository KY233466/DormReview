import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import Details from "components/details";
import FloorPlan from "components/FloorPlan/FloorPlan";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";

import getDormName from "common/string";

import pic from "assets/12Bellevue.png";
import washer from "assets/Washer.png";
import bathroom from "assets/bathroom.png";
import Bed from "assets/Bed.jpg";
import kitchen from "assets/Kitchen.png";
import Location from "assets/location.png";

import GFloor from "assets/floor/12Bellevue/12-bellevue-0.png";
import OneFloor from "assets/floor/12Bellevue/12-bellevue-1.png";
import TwoFloor from "assets/floor/12Bellevue/12-bellevue-2.png";
import ThreeFloor from "assets/floor/12Bellevue/12-bellevue-3.png";

import styles from "./coho.module.css";

const floor = [
  {
    title: 3,
    pic: ThreeFloor,
    unit: "3",
    name: "12 Bellevue Street - Unit 2",
  },
  {
    title: 2,
    pic: TwoFloor,
    unit: "2",
    name: "12 Bellevue Street - Unit 2",
  },
  {
    title: 1,
    pic: OneFloor,
    unit: "1",
    name: "12 Bellevue Street - Unit 1",
  },
  {
    title: "G",
    pic: GFloor,
    unit: "1",
    name: "12 Bellevue Street",
  },
];

const paths = {
  "12 Bellevue Street - Unit 1": {
    path: "12Bellevue-1",
    path2: "12Bellevue-1-room",
    path3: "12Bellevue-1-rate",
  },
  "12 Bellevue Street - Unit 2": {
    path: "12Bellevue-2",
    path2: "12Bellevue-2-room",
    path3: "12Bellevue-2-rate",
  },
};

const Content = {
  title: "12 Bellevue Street (Green House)",
  path: "12Bellevue",
  path2: "12Bellevue-room",
  path3: "12Bellevue-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms: "First unit with 4 single rooms · Second unit with 8 single rooms",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "Close to an array of stores, including the Campus Mini Mart and Dunkin' Donuts",
  location: "Uphill",
  pic: pic,
};

const Pro = [
  {
    title: "In-house Laundry Equipments",
    pic: washer,
  },
  {
    title: "Single Person Bathrooms",
    pic: bathroom,
  },
  {
    title: "Private Kitchen",
    pic: kitchen,
  },
  {
    title: "Full-size Bed",
    pic: Bed,
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: Location,
  },
];

function Bellevue12() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const dormName = getDormName(window.location.pathname, floor, Content);
  const path = paths[dormName];

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  return (
    <>
      <MediaQuery maxWidth={860}>
        <BackArrow href="/coho" />
        <FloorPlan displayDetail={displayDetail} floor={floor} />
        <MobileDetailBottomSheet
          title={dormName}
          path={path.path}
          path2={path.path2}
          path3={path.path3}
          content={Content}
          pro={Pro}
          con={Con}
        />
      </MediaQuery>

      <MediaQuery minWidth={861}>
        <div className={styles.container}>
          <Details
            title={dormName}
            path={path.path}
            path2={path.path2}
            path3={path.path3}
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

export default Bellevue12;
