import { useState } from "react";

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

const Content = [
  {
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
    pic: location,
  },
];

function Winthrop() {
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

export default Winthrop;
