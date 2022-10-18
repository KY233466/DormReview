import React, { useState } from "react";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { CoursesList } from "../../components/courses/ CoursesList";
import styles from "./lewis.module.css";
// import Title from "../../components/title/Title";
// import { AddCourse } from "../../components/AddCourse/AddCourse";
// import MediaQuery from "react-responsive";
import Details from "../../components/details/details";
import pic from "../../assets/lewis.png";
import bathroom from "../../assets/bathroom.png";
import food from "../../assets/food.png";

const Content = [
  {
    title: "Lewis Hall",
    available: "Sophomore ✅ Junior ✅ Senior ✅",
    bed_laundry: "Extra-long twin bed · 6 washers · 6 dryers",
    rooms: "57 doubles · 74 singles · 3 triple",
    moreInfo:
      "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/lewis-hall",
    description:
      "Lewis Hall is located downhill between Tilton Hall and Hodgdon Hall. The Crafts Center is located in the basement of Lewis Hall.",
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
