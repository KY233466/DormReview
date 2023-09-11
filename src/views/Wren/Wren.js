import { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/Wren.jpeg";
import bathroom from "../../assets/bathroom.png";
import food from "../../assets/food.png";
import FloorPlan from "../../components/FloorPlan/FloorPlan";

import GFloor from "../../assets/floor/Wren/WrenG.png";
import OneFloor from "../../assets/floor/Wren/Wren1.png";
import TwoFloor from "../../assets/floor/Wren/Wren2.png";
import ThreeFloor from "../../assets/floor/Wren/Wren3.png";
import FourFloor from "../../assets/floor/Wren/Wren4.png";
import FiveFloor from "../../assets/floor/Wren/Wren5.png";

const floor = [
  {
    title: 5,
    pic: FiveFloor,
  },
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
    title: "Wren Hall",
    path: "Wren",
    path2: "Wren-room",
    path3: "Wren-rate",
    available: "Sophomore ✅",
    bed_laundry: "Extra-long twin bed",
    rooms: "Fourteen 10-person suites of 4 doubles and 2 singles",
    moreInfo:
      "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/wren-hall",
    description:
      "Wren Hall is mostly houses sophomores and is located uphill, next to the Granoff Family Hillel Center, and directly across from Carmichael Dining Hall and student parking spaces.",
    location: "Uphill",
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

function Wren() {
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

export default Wren;
