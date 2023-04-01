import React, { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/Sunset.png";
import bathroom from "../../assets/bathroom.png";
import kitchen from "../../assets/Kitchen.png";
import Location from "../../assets/location.png";

import FloorPlan from "../../components/FloorPlan/FloorPlan";

import TwoFloor from "../../assets/floor/Sunset/Sunset2.png";
import OneFloor from "../../assets/floor/Sunset/Sunset1.png";

const Content = [
  {
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
  },
];

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

export default Sunset;
