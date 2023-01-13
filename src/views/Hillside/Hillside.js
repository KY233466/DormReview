import React, { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/hillside.jpeg";
import bathroom from "../../assets/bathroom.png";
import elevator from "../../assets/elevator.png";
import kitchen from "../../assets/Kitchen.png";
import Hard from "../../assets/Hard.jpg";
import food from "../../assets/food.png";
import Bed from "../../assets/Bed.jpg";
import Location from "../../assets/location.png";
import Washer from "../../assets/Washer.png";

const Content = [
  {
    title: "Hillside Apartments",
    path: "Hillside",
    path2: "Hillside-room",
    path3: "Hillside-rate",
    available: "Sophomore ✅ Junior ✅ Senior ✅",
    bed_laundry: "Extra-long twin bed",
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
        <div>
          Processed floor plan not available.Please go to{" "}
          <a
            style={{
              textDecoration: "underline",
            }}
            href="https://dorm-review.com/harleston"
          >
            Harleston{" "}
          </a>{" "}
          to view what it would look like.{" "}
        </div>{" "}
        {/* <Lol></Lol> */}{" "}
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

export default Hillside;
