import React, { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/Stratton.jpeg";
import bathroom from "../../assets/bathroom.png";
import elevator from "../../assets/elevator.png";
import kitchen from "../../assets/Kitchen.png";
import Hard from "../../assets/Hard.jpg";
import food from "../../assets/food.png";
import Bed from "../../assets/Bed.jpg";
import Washer from "../../assets/Washer.png";
import Location from "../../assets/location.png";

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
      <div className={styles.rightContainer}>
        {" "}
        {/* <Lol></Lol> */}
        Processed floor plan not available.Please go to{" "}
        <a
          style={{
            textDecoration: "underline",
          }}
          href="https://dorm-review.com/harleston"
        >
          {" "}
          Harleston{" "}
        </a>{" "}
        to view what it would look like.{" "}
      </div>{" "}
      {/* <div className={styles.compass}>
                            <img alt="compass" src={Compass} />
                          </div>
                          <div className={styles.legend}>
                            <img src={legend} alt="legend"></img>
                          </div> */}{" "}
    </div>
  );
}

export default Stratton;
