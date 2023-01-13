import React, { useState } from "react";
import styles from "./lewis.module.css";
import Details from "../../components/details/details";
import pic from "../../assets/lewis.png";
import bathroom from "../../assets/bathroom.png";
import food from "../../assets/food.png";

const Content = [
  {
    title: "Lewis Hall",
    path: "Lewis",
    path2: "Lewis-room",
    path3: "Lewis-rate",
    available: "Sophomore ✅",
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

export default Lewis;
