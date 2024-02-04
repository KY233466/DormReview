import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import Details from "components/details";
import FloorPlan from "components/FloorPlan/FloorPlan";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";

import getDormName from "common/string";

import pic from "assets/22-bellevue.png";
import bathroom from "assets/bathroom.png";
import washer from "assets/Washer.png";
import Location from "assets/location.png";
import kitchen from "assets/Kitchen.png";
import Bed from "assets/Bed.jpg";

import OneFloor from "assets/floor/22Bellevue/22-bellevue-1.png";
import TwoFloor from "assets/floor/22Bellevue/22-bellevue-2.png";
import ThreeFloor from "assets/floor/22Bellevue/22-bellevue-3.png";

import styles from "./coho.module.css";

const floor = [
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
];

const Content = {
  title: "22 Bellevue Street",
  path: "22Bellevue",
  path2: "22Bellevue-room",
  path3: "22Bellevue-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms: "One unit with 7 single rooms",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "Behind Wren Hall. Laundry equipments weren't functional during the 2021-2022 school year.",
  location: "Uphill",
  pic: pic,
};

const Pro = [
  {
    title: "In-house/close to Laundry Equipments",
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

function Bellevue22() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const dormName = getDormName(window.location.pathname, floor, Content);

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
          path={Content.path}
          path2={Content.path2}
          path3={Content.path3}
          content={Content}
          pro={Pro}
          con={Con}
        />
      </MediaQuery>

      <MediaQuery minWidth={861}>
        <div className={styles.container}>
          <Details
            title={dormName}
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

export default Bellevue22;
