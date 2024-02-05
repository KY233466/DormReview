import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import Details from "components/details";
import FloorPlan from "components/FloorPlan/FloorPlan";
import AltRatingDisplayBlock from "./AltRatingDisplayBlock";
import { config } from "./CoHoConfig";

import getDormName from "common/string";

import pic from "assets/19University.png";
import kitchen from "assets/Kitchen.png";
import Bed from "assets/Bed.jpg";
import Washer from "assets/Washer.png";
import Location from "assets/location.png";
import bathroom from "assets/bathroom.png";

import OneFloor from "assets/floor/19-21University/19-21-university-1.png";
import TwoFloor from "assets/floor/19-21University/19-21-university-2.png";
import ThreeFloor from "assets/floor/19-21University/19-21-university-3.png";

import styles from "./sogo.module.css";

const floor = [
  {
    title: 3,
    pic: ThreeFloor,
    unit: "3",
    name: "19 University Ave",
  },
  {
    title: 2,
    pic: TwoFloor,
    unit: "2",
    name: "19 University Ave",
  },
  {
    title: 1,
    pic: OneFloor,
    unit: "1",
    name: "21 University Ave",
  },
];

const Content = {
  title: "19-21 University Avenue",
  path: "19-21University",
  path2: "19-21University-room",
  path3: "19-21University-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms: "First unit with 8 single rooms · Second unit with 4 single rooms",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description: "Right next to Hill Hall and close to the mail room",
  location: "Uphill",
  pic: pic,
};

const Pro = [
  {
    title: "Single Person Bathrooms",
    pic: bathroom,
  },
  {
    title: "Full-size Bed",
    pic: Bed,
  },
  {
    title: "Private Kitchen",
    pic: kitchen,
  },
  {
    title: "Near Mailroom",
    pic: Location,
  },
];

const Con = [
  {
    title: "Far From Laundry Equipment",
    pic: Washer,
  },
];

function SoGo() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const dormName = getDormName(window.location.pathname, floor, Content);
  /*
    There are 3 types of dorms:
    
    1. Building with only one unit
    2. Building with multiple units, and have separate url paths for each
      like coho/19-21University/1 for 21 University
      and coho/19-21University/2 for 19 University
    3. Building with multiple units, but they share the same url path, because 
      there isn't a floor plan

    For type #1, only buildingConfig is needed
    For type #2, buildingConfig and unitConfig are both needed
    For type #3, buildingConfig and unitConfig are both needed, but the
      second parameter, aka unitName, shouldn't be passed in
  */
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

export default SoGo;
