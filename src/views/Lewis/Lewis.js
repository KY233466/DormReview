import { useState } from "react";
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
