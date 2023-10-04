import { useState } from "react";
import MediaQuery from "react-responsive";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import styles from "./sogo.module.css";
import Details from "components/details/details";
import pic from "assets/west.jpeg";
import bathroom from "assets/bathroom.png";
import Location from "assets/location.png";
import FloorPlan from "components/FloorPlan/FloorPlan";

import GFloor from "assets/floor/West/WestG.png";
import OneFloor from "assets/floor/West/West1.png";
import TwoFloor from "assets/floor/West/West2.png";
import ThreeFloor from "assets/floor/West/West3.png";
import FourFloor from "assets/floor/West/West4.png";

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
  title: "West Hall",
  path: "West",
  path2: "West-room",
  path3: "West-rate",
  available: "Sophomore ✅",
  bed_laundry: "Extra-long twin bed · 4 washers · 4 dryers",
  rooms:
    "doubles · triples · quads made up of 1 common room and 2 attached bedrooms",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/west-hall",
  description: "West Hall is located uphill on the academic quad.",
  location: "Uphill",
  pic: pic,
};

const Pro = [
  {
    title: "On the quad",
    pic: Location,
  },
];

const Con = [
  {
    title: "Communal Bathrooms",
    pic: bathroom,
  },
];

function West() {
  const [displayDetail, setDisplayDetail] = useState(true);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }
  // const instructorCourses = useAppSelector(selectInstructorCourses);
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

export default West;
