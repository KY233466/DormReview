import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import Details from "components/details";
import FloorPlan from "components/FloorPlan/FloorPlan";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import AltRatingDisplayBlock from "./AltRatingDisplayBlock";
import { config } from "./CoHoConfig";

import getDormName from "common/string";

import pic from "assets/15Bellevue.png";
import bathroom from "assets/bathroom.png";
import kitchen from "assets/Kitchen.png";
import Location from "assets/location.png";
import Bed from "assets/Bed.jpg";

import OneFloor from "assets/floor/15Bellevue/15-bellevue-1.png";
import TwoFloor from "assets/floor/15Bellevue/15-bellevue-2.png";
import ThreeFloor from "assets/floor/15Bellevue/15-bellevue-3.png";

import styles from "./coho.module.css";

const floor = [
  {
    title: 3,
    pic: ThreeFloor,
    unit: "2",
    name: "15 Bellevue Street - Unit 2",
  },
  {
    title: 2,
    pic: TwoFloor,
    unit: "2",
    name: "15 Bellevue Street - Unit 1",
  },
  {
    title: 1,
    pic: OneFloor,
    unit: "1",
    name: "15 Bellevue Street - Unit 1",
  },
];

const Content = {
  title: "15 Bellevue Street (Loring W. Tu House)",
  path: "15Bellevue",
  path2: "15Bellevue-room",
  path3: "15Bellevue-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms:
    "First unit with 2 single rooms (Reserved for RA) · Second unit with 4 single rooms ",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "It is named after Loring W. Tu, a Tufts mathematics professor. Three of the COHO houses, standing side by side, resonated with his own positive undergraduate experience and his desire to honor his brothers and their Asian heritage. Read more here: https://alumniandfriends.tufts.edu/news/mathematics-professor-honors-his-brothers. This house is close to Wren Hall.",
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

function Bellevue15() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const dormName = getDormName(window.location.pathname, floor, Content);
  const { buildingConfig, unitConfig } = config(Content.title, dormName);

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
          path={unitConfig.path}
          path2={unitConfig.path2}
          path3={unitConfig.path3}
          content={Content}
          pro={Pro}
          con={Con}
          altRatingDisplayBlock={
            <AltRatingDisplayBlock unitsConfig={buildingConfig} />
          }
        />
      </MediaQuery>

      <MediaQuery minWidth={861}>
        <div className={styles.container}>
          <Details
            title={dormName}
            path={unitConfig.path}
            path2={unitConfig.path2}
            path3={unitConfig.path3}
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
          />
          {displayDetail ? <div className={styles.placeholder}> </div> : null}
          <FloorPlan displayDetail={displayDetail} floor={floor} />
        </div>
      </MediaQuery>
    </>
  );
}

export default Bellevue15;
