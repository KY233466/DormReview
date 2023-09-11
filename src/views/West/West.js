import { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/west.jpeg";
import bathroom from "../../assets/bathroom.png";
import Location from "../../assets/location.png";
import FloorPlan from "../../components/FloorPlan/FloorPlan";

import GFloor from "../../assets/floor/West/WestG.png";
import OneFloor from "../../assets/floor/West/West1.png";
import TwoFloor from "../../assets/floor/West/West2.png";
import ThreeFloor from "../../assets/floor/West/West3.png";
import FourFloor from "../../assets/floor/West/West4.png";

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
  },
];

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

export default West;
