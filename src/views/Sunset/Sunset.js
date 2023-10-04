import { useState } from "react";
import MediaQuery from "react-responsive";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import Details from "components/details/details";
import pic from "assets/Sunset.png";
import bathroom from "assets/bathroom.png";
import kitchen from "assets/Kitchen.png";
import Location from "assets/location.png";

import FloorPlan from "components/FloorPlan/FloorPlan";

import TwoFloor from "assets/floor/Sunset/Sunset2.png";
import OneFloor from "assets/floor/Sunset/Sunset1.png";

import styles from "./sogo.module.css";

const Content = {
  title: "9-11 Sunset Road",
  path: "Sunset",
  path2: "Sunset-room",
  path3: "Sunset-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Extra-long twin bed · 1 washer · 1 dryer",
  rooms: "Two 3-person unit with 3 singles",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/9-11-sunset-road",
  description:
    "9-11 Sunset is located off Curtis Street near Carmichael Dining Hall, and contains a full kitchen, and one washer/dryer for the two apartments.",
  location: "Uphill",
  pic: pic,
};

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
    pic: Location,
  },
];

function Sunset() {
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

export default Sunset;
