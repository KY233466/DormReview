import React, { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/lewis.png";
import bathroom from "../../assets/bathroom.png";
import elevator from "../../assets/elevator.png";
import kitchen from "../../assets/Kitchen.png";

const Content = [
  {
    title: "Sophia Gordon Hall",
    available: "Junior ✅ Senior ✅",
    bed_laundry: "Extra-long twin bed · 4 washers · 4 dryers",
    rooms:
      "Sixteen 4-person apartments all singles · One 6-person apartment all singles · Seven 10-person apartments with 6 singles and 2 doubles · Three 10-person apartments with 4 singles and 3 doubles",
    moreInfo:
      "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/sophia-gordon-hall",
    description:
      "Sophia Gordon is located on Talbot Avenue, and is separated into East and West buildings by a large staircase.",
    location: "Central",
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
    title: "Communal Bathrooms",
    pic: bathroom,
  },
];


function SoGo() {
    const [displayDetail, setDisplayDetail] = useState(true);

    function changeDetail () {

    }
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <div className={styles.container}>
      {displayDetail
        ? Content.map((value, index) => (
            <Details
              index={value.index}
              key={value.title}
              title={value.title}
              available={value.available}
              bed_laundry={value.bed_laundry}
              rooms={value.rooms}
              moreInfo={value.moreInfo}
              description={value.description}
              location={value.location}
              pic={value.pic}
              pro={Pro}
              con={Con}
            />
          ))
        : null}
      {/* <h3>Hi! This is harleston :P</h3> */}
      {/* <Details /> */}
      {/* <Title />

      <Details changeDetail={changeDetail}/>

      <CoursesList />

      <MediaQuery maxWidth={768}>
        <div className={styles.AddContainer}>
          <AddCourse />
        </div>
      </MediaQuery> */}
    </div>
  );
}

export default SoGo;
