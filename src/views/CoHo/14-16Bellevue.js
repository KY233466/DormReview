import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import Details from "components/details";
import FloorPlan from "components/FloorPlan/FloorPlan";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import AltReview from "components/Review/AltReview";
import AltRatingDisplayBlock from "./AltRatingDisplayBlock";
import { config } from "./CoHoConfig";

import pic from "assets/1416Bellevue.png";
import bathroom from "assets/bathroom.png";
import kitchen from "assets/Kitchen.png";
import Location from "assets/location.png";
import Bed from "assets/Bed.jpg";

import OneFloor from "assets/floor/14-16Bellevue/14-16-bellevue-1.png";
import TwoFloor from "assets/floor/14-16Bellevue/14-16-bellevue-2.png";
import ThreeFloor from "assets/floor/14-16Bellevue/14-16-bellevue-3.png";

import styles from "./coho.module.css";

const floor = [
  {
    title: 3,
    pic: ThreeFloor,
    unit: "3",
    name: "16 Bellevue Street",
  },
  {
    title: 2,
    pic: TwoFloor,
    unit: "2",
    name: "14 & 16 Bellevue Street",
  },
  {
    title: 1,
    pic: OneFloor,
    unit: "1",
    name: "14 & 16 Bellevue Street",
  },
];

const Content = {
  title: "14-16 Bellevue Street",
  path: "14-16Bellevue",
  path2: "14-16Bellevue-room",
  path3: "14-16Bellevue-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms:
    "First unit with 3 single rooms · Second unit with 9 single rooms ***** 14 Bellvue's bedrooms are located on the 2nd floor -- the three that's on the top half of the floor plan *****",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "Close to an array of stores, including the Campus Mini Mart and Dunkin' Donuts",
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

function Bellevue1416() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const { buildingConfig, unitConfig } = config(Content.title);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  return (
    <>
      <MediaQuery maxWidth={860}>
        <BackArrow href="/coho" />
        <FloorPlan displayDetail={displayDetail} floor={floor} />
        <MobileDetailBottomSheet
          title={Content.title}
          content={Content}
          pro={Pro}
          con={Con}
          altRatingDisplayBlock={
            <AltRatingDisplayBlock unitsConfig={buildingConfig} />
          }
          altReviewBlock={<AltReview paths={unitConfig} />}
        />
      </MediaQuery>

      <MediaQuery minWidth={861}>
        <div className={styles.container}>
          <Details
            title={Content.title}
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
            altRatingDisplayBlock={
              <AltRatingDisplayBlock unitsConfig={buildingConfig} />
            }
            altReviewBlock={<AltReview paths={unitConfig} />}
          />
          {displayDetail ? <div className={styles.placeholder}> </div> : null}
          <FloorPlan displayDetail={displayDetail} floor={floor} />
        </div>
      </MediaQuery>
    </>
  );
}

export default Bellevue1416;
