import { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/Stratton.jpeg";
import bathroom from "../../assets/bathroom.png";
import Location from "../../assets/location.png";
import FloorPlan from "../../components/FloorPlan/FloorPlan";

import GFloor from "../../assets/floor/Stratton/StrattonG.png";
import OneFloor from "../../assets/floor/Stratton/Stratton1.png";
import TwoFloor from "../../assets/floor/Stratton/Stratton2.png";
import ThreeFloor from "../../assets/floor/Stratton/Stratton3.png";

const floor = [
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
    title: "Stratton Hall",
    path: "Stratton",
    path2: "Stratton-room",
    path3: "Stratton-rate",
    available: "Sophomore ✅",
    bed_laundry: "Extra-long twin bed · 4 washers · 4 dryers",
    rooms: "41 doubles · 13 triples · 2 singles",
    moreInfo: "https://students.tufts.edu/continuing-undergrad/stratton-hall",
    description:
      "Stratton Hall is located downhill, directly across from Cohen Auditorium and Jackson Gymnasium, and it houses Sophomore students in 2018-2019. Stratton Hall was renovated in Summer 2018 to create rooms on the ground floor, increased accessibility, and new lounge areas on each floor.",
    location: "Downhill",
    pic: pic,
  },
];

const Pro = [
  {
    title: "Central Location",
    pic: Location,
  },
];

const Con = [
  {
    title: "Communal Bathrooms",
    pic: bathroom,
  },
];

function Stratton() {
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

export default Stratton;
