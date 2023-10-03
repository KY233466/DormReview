import { useState } from "react";
import styles from "./latinway.module.css";
import Details from "components/details/details";
import pic from "assets/latin-way1.jpeg";
import bathroom from "assets/bathroom.png";
import food from "assets/food.png";
import kitchen from "assets/Kitchen.png";
import FloorPlan from "components/FloorPlan/FloorPlan";

import OneFloor from "assets/floor/Latinway/Latinway1.png";
import TwoFloor from "assets/floor/Latinway/Latinway2.png";
import ThreeFloor from "assets/floor/Latinway/Latinway3.png";
import FourFloor from "assets/floor/Latinway/Latinway4.png";

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
];

const Content = [
  {
    title: "Latin Way",
    path: "Latin-way",
    path2: "Latin-way-room",
    path3: "Latin-way-rate",
    available: "Sophomore ✅ Junior ✅ Senior ✅",
    bed_laundry: "Extra-long twin bed · 9 washers · 9 dryers",
    rooms:
      "Sixteen 4-person apartments all singles · One 6-person apartment all singles · Seven 10-person apartments with 6 singles and 2 doubles · Three 10-person apartments with 4 singles and 3 doubles",
    moreInfo:
      "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/latin-way",
    description:
      "Latin Way is located downhill between Haskell Hall and Harleston Hall. There is student parking in front of the residence. Latin Way is separated by towers A-F.",
    location: "Downhill",
    pic: pic,
  },
];

const Pro = [
  {
    title: "Near Dinning",
    pic: food,
  },
  {
    title: "Private Kitchens",
    pic: kitchen,
  },
];

const Con = [
  {
    title: "Communal Bathrooms",
    pic: bathroom,
  },
];

function LatinWay() {
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

export default LatinWay;
