import React, { useState } from "react";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { CoursesList } from "../../components/courses/ CoursesList";
import styles from "./latinway.module.css";
// import Title from "../../components/title/Title";
// import { AddCourse } from "../../components/AddCourse/AddCourse";
// import MediaQuery from "react-responsive";
import Details from "../../components/details/details";
import pic from "../../assets/lewis.png";
import bathroom from "../../assets/bathroom.png";
import food from "../../assets/food.png";

const Content = [
  {
    title: "Latin Way",
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
    title: "Near dinning",
    pic: food,
  },
];

const Con = [
  {
    title: "Communal Bathrooms",
    pic: bathroom,
  },
];


function Lewis() {
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

export default Lewis;
