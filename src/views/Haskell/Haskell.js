import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import Details from "components/details";
import pic from "assets/Haskell.jpeg";
import bathroom from "assets/bathroom.png";
import food from "assets/food.png";
import FloorPlan from "components/FloorPlan/FloorPlan";

import GFloor from "assets/floor/Haskell/HaskellG.png";
import OneFloor from "assets/floor/Haskell/Haskell1.png";
import TwoFloor from "assets/floor/Haskell/Haskell2.png";
import ThreeFloor from "assets/floor/Haskell/Haskell3.png";
import FourFloor from "assets/floor/Haskell/Haskell4.png";

import styles from "./sogo.module.css";

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
  title: "Haskell Hall",
  path: "Haskell",
  path2: "Haskell-room",
  path3: "Haskell-rate",
  available: "Sophomore ✅",
  bed_laundry: "Extra-long twin bed · 6 washers · 6 dryers",
  rooms: "Eleven 10-person suites of 4 doubles and 2 singles · 2 triples",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/haskell-hall",
  description:
    "Haskell Hall is located downhill, opposite Tilton Hall. It is next to the Dewick-MacPhie Dining Hall, and also near Hodgdon Take-Out.",
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

function Haskell() {
  const [displayDetail, setDisplayDetail] = useState(true);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <>
      <MediaQuery maxWidth={860}>
        <BackArrow href="/map" />
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

export default Haskell;
