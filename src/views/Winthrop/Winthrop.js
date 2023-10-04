import { useState } from "react";
import MediaQuery from "react-responsive";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import styles from "./sogo.module.css";
import Details from "components/details/details";
import pic from "assets/10Winthrop.jpeg";
import bathroom from "assets/bathroom.png";
import kitchen from "assets/Kitchen.png";
import location from "assets/location.png";
import FloorPlan from "components/FloorPlan/FloorPlan";

import OneFloor from "assets/floor/Winthrop/1Win.png";
import TwoFloor from "assets/floor/Winthrop/2Win.png";

const floor = [
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
  title: "10 Winthrop Street",
  path: "Winthrop",
  path2: "Winthrop-room",
  path3: "Winthrop-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Extra-long twin bed · 1 washer · 1 dryer",
  rooms: "Two 3-person units of 3 singles",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/10-winthrop-street",
  description:
    "Two apartments for upper-class students located uphill, across from Carmichael Dining Hall.",
  location: "Uphill",
  pic: pic,
};

const Pro = [
  {
    title: "Single Person Bathroom",
    pic: bathroom,
  },
  {
    title: "Private Kitchen",
    pic: kitchen,
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: location,
  },
];

function Winthrop() {
  const [displayDetail, setDisplayDetail] = useState(true);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  return (
    <>
      <MediaQuery maxWidth={899}>
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

export default Winthrop;
