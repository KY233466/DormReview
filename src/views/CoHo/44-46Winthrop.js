import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import Details from "components/details";
import FloorPlan from "components/FloorPlan/FloorPlan";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";

import getDormName from "common/string";

import pic from "assets/43-45Winthrop.png";
import bathroom from "assets/bathroom.png";
import kitchen from "assets/Kitchen.png";
import Location from "assets/location.png";
import Bed from "assets/Bed.jpg";

import OneFloor from "assets/floor/44-46Winthrop/44-46-winthrop-1.png";
import TwoFloor from "assets/floor/44-46Winthrop/44-46-winthrop-2.png";

import styles from "./coho.module.css";

const floor = [
  {
    title: 2,
    pic: TwoFloor,
    unit: "2",
    name: "46 Winthrop Street",
  },
  {
    title: 1,
    pic: OneFloor,
    unit: "1",
    name: "44 Winthrop Street",
  },
];

const paths = {
  "44 Winthrop Street": {
    path: "44Winthrop",
    path2: "44Winthrop-room",
    path3: "44Winthrop-rate",
  },
  "46 Winthrop Street": {
    path: "46Winthrop",
    path2: "46Winthrop-room",
    path3: "46Winthrop-rate",
  },
};

const Content = {
  title: "44-46 Winthrop Street",
  path: "44-46Winthrop",
  path2: "44-46Winthrop-room",
  path3: "44-46Winthrop-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms:
    "First unit with 3 single rooms (Reserved for RA) · Second unit with 3 single rooms",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "Close to Breed Memorial Hall, the Interfaith Center, and an array of stores, including the Campus Mini Mart and Dunkin' Donuts",
  location: "Uphill",
  pic: pic,
};

const Pro = [
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

function Winthrop4446() {
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

export default Winthrop4446;
