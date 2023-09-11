import { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/Haskell.jpeg";
import bathroom from "../../assets/bathroom.png";
import food from "../../assets/food.png";
import FloorPlan from "../../components/FloorPlan/FloorPlan";

import GFloor from "../../assets/floor/Haskell/HaskellG.png";
import OneFloor from "../../assets/floor/Haskell/Haskell1.png";
import TwoFloor from "../../assets/floor/Haskell/Haskell2.png";
import ThreeFloor from "../../assets/floor/Haskell/Haskell3.png";
import FourFloor from "../../assets/floor/Haskell/Haskell4.png";

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

const Content = [
  {
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
  },
];

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
    <div className={styles.container}>
      {" "}
      {Content.map((value, index) => (
        <Details
          index={value.index}
          key={value.title}
          title={value.title}
          path={value.path}
          path2={value.path2}
          path3={value.path3}
          available={value.available}
          bed_laundry={value.bed_laundry}
          rooms={value.rooms}
          moreInfo={value.moreInfo}
          description={value.description}
          location={value.location}
          pic={value.pic}
          pro={Pro}
          con={Con}
          changeDetail={() => changeDetail()}
        />
      ))}
      {displayDetail ? <div className={styles.placeholder}> </div> : null}{" "}
      <FloorPlan displayDetail={displayDetail} floor={floor} />
    </div>
  );
}

export default Haskell;
