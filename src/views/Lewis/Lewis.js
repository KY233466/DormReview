import { useState } from "react";
import MediaQuery from "react-responsive";

import Details from "components/details/details";
import FloorPlan from "components/FloorPlan/FloorPlan";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";

import pic from "../../assets/lewis.png";
import bathroom from "assets/bathroom.png";
import food from "assets/food.png";

import GFloor from "assets/floor/Lewis/LewisG.png";
import OneFloor from "assets/floor/Lewis/Lewis1.png";
import TwoFloor from "assets/floor/Lewis/Lewis2.png";
import ThreeFloor from "assets/floor/Lewis/Lewis3.png";
import FourFloor from "assets/floor/Lewis/Lewis4.png";

import styles from "./lewis.module.css";

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
  title: "Lewis Hall",
  path: "Lewis",
  path2: "Lewis-room",
  path3: "Lewis-rate",
  available: "Sophomore ✅",
  bed_laundry: "Extra-long twin bed · 6 washers · 6 dryers",
  rooms: "57 doubles · 74 singles · 3 triple",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/lewis-hall",
  description:
    "Lewis Hall is located downhill between Tilton Hall and Hodgdon Hall. The Crafts Center is located in the basement of Lewis Hall.",
  location: "Downhill",
  pic: pic,
};

const Pro = [
  {
    title: "Near dinning",
    pic: food,
  },
];

const Con = [
  {
    title: "Communal Bathrooms",
    pic: bathroom,
  },
];

function Lewis() {
  const [displayDetail, setDisplayDetail] = useState(true);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  return (
    <>
      <MediaQuery maxWidth={860}>
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

      <MediaQuery minWidth={861}>
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

export default Lewis;
