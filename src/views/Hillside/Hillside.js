import { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/hillside.jpeg";
import kitchen from "../../assets/Kitchen.png";
import Location from "../../assets/location.png";
import FloorPlan from "../../components/FloorPlan/FloorPlan";

import GFloor from "../../assets/floor/Hillside/HillsideG.png";
import OneFloor from "../../assets/floor/Hillside/Hillside1.png";
import TwoFloor from "../../assets/floor/Hillside/Hillside2.png";
import ThreeFloor from "../../assets/floor/Hillside/Hillside3.png";
import FourFloor from "../../assets/floor/Hillside/Hillside4.png";

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
    title: "Hillside Apartments",
    path: "Hillside",
    path2: "Hillside-room",
    path3: "Hillside-rate",
    available: "Sophomore ✅ Junior ✅ Senior ✅",
    bed_laundry: "Extra-long twin bed · 6 washers · 6 dryers",
    rooms:
      "Five 10-person suites of 6 singles and 3 doubles · Twenty-three 6-person suites of 4 singles and 1 double",
    moreInfo:
      "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/hillside-apartments",
    description:
      "Hillsides Apartments are located uphill between Dowling and Hill with a parking lot behind the buildings.",
    location: "Uphill",
    pic: pic,
  },
];

const Pro = [
  {
    title: "Private Kitchen",
    pic: kitchen,
  },
  {
    title: "Near Mailroom",
    pic: Location,
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: Location,
  },
];

function Hillside() {
  const [displayDetail, setDisplayDetail] = useState(true);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <div className={styles.container}>
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
      {displayDetail ? <div className={styles.placeholder}> </div> : null}
      <FloorPlan displayDetail={displayDetail} floor={floor} />
    </div>
  );
}

export default Hillside;
