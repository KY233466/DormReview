import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import Details from "components/details";
import FloorPlan from "components/FloorPlan/FloorPlan";

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

const paths = {
  "19 University Ave": {
    path: "19University",
    path2: "19University-room",
    path3: "19University-rate",
  },
  "21 University Ave": {
    path: "21University",
    path2: "21University-room",
    path3: "21University-rate",
  },
};

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

export default SoGo;
