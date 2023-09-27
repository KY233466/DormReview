import { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/sogo.jpeg";
import bathroom from "../../assets/bathroom.png";
import elevator from "../../assets/elevator.png";
import kitchen from "../../assets/Kitchen.png";
import Hard from "../../assets/Hard.jpg";
import FloorPlan from "../../components/FloorPlan/FloorPlan";

import OneFloor from "../../assets/floor/SoGo/SoGo1.png";
import TwoFloor from "../../assets/floor/SoGo/SoGo2.png";
import ThreeFloor from "../../assets/floor/SoGo/SoGo3.png";
import FourFloor from "../../assets/floor/SoGo/SoGo4.png";
import FiveFloor from "../../assets/floor/SoGo/SoGo5.png";

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
];

const Content = [
  {
    title: "Sophia Gordon Hall",
    path: "Sogo",
    path2: "Sogo-room",
    path3: "Sogo-rate",
    available: "Junior ✅ Senior ✅",
    bed_laundry: "Extra-long twin bed · 4 washers · 4 dryers",
    rooms:
      "Sixteen 4-person apartments all singles · One 6-person apartment all singles · Seven 10-person apartments with 6 singles and 2 doubles · Three 10-person apartments with 4 singles and 3 doubles",
    moreInfo:
      "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/sophia-gordon-hall",
    description:
      "Sophia Gordon is located on Talbot Avenue, and is separated into East and West buildings by a large staircase.",
    location: "Downhill",
    pic: pic,
  },
];

const Pro = [
  {
    title: "Single Person Bathrooms",
    pic: bathroom,
  },
  {
    title: "Elevator",
    pic: elevator,
  },
  {
    title: "Private Kitchen",
    pic: kitchen,
  },
];

const Con = [
  {
    title: "Hard to Get",
    pic: Hard,
  },
];

function SoGo() {
  const [displayDetail, setDisplayDetail] = useState(true);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
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
  );
}

export default SoGo;
