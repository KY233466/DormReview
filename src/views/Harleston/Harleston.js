import React, { useState } from "react";
import styles from "./harleston.module.css";
import Details from "../../components/details/details";
import FloorPlan from "../../components/FloorPlan/FloorPlan";

import pic from "../../assets/hhall.jpeg";
import bathroom from "../../assets/bathroom.png";
import elevator from "../../assets/elevator.png";
import kitchen from "../../assets/Kitchen.png";
// import twoFloor from "../../assets/2Harleston.png"
// import legend from "../../assets/Legend.png"
// import ZoomImage from "../../components/ZoomImage";
// import Compass from "../../assets/Compass.png";
import Hmm from "../../components/pic/pic";
import html2canvas from "html2canvas";
import Lol from "../../components/pic/pic";
import Location from "../../assets/location.png";

import OneFloor from "../../assets/floor/Harleston/1Harleston.png";
import TwoFloor from "../../assets/floor/Harleston/2Harleston.png";
import TreeFloor from "../../assets/floor/Harleston/3Harleston.png";
import FourFloor from "../../assets/floor/Harleston/4Harleston.png";

const floor = [
  {
    title: 1,
    pic: OneFloor,
  },
  {
    title: 2,
    pic: TwoFloor,
  },
  {
    title: 3,
    pic: TreeFloor,
  },
  {
    title: 4,
    pic: FourFloor,
  },
];

const Content = [
  {
    title: "Harleston Hall",
    path: "Harleston",
    path2: "Harleston-room",
    path3: "Harleston-rate",
    available: "Sophomore ✅",
    bed_laundry: "Extra-long twin bed · 13 washers · 14 dryers",
    rooms: "167 doubles · 51 singles · 1 triple",
    moreInfo:
      "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/harleston-hall",
    description:
      "Once known as South Hall, it is located downhill next to basketball courts, tennis courts, and the Ellis Oval with an adjacent student parking lot. This hall houses mostly Second-Year students.",
    location: "Downhill",
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
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: Location,
  },
];

// const exportAsPicture = () => {
//   var html = document.getElementsByTagName("HTML")[0];
//   var body = document.getElementsByTagName("BODY")[0];
//   var htmlWidth = html.clientWidth;
//   var bodyWidth = body.clientWidth;
//   var data = document.getElementById("exportContainer");
//   var newWidth = data.scrollWidth - data.clientWidth;
//   if (newWidth > data.clientWidth) {
//     htmlWidth += newWidth;
//     bodyWidth += newWidth;
//   }
//   html.style.width = htmlWidth + "px";
//   body.style.width = bodyWidth + "px";
//   html2canvas(data).then((canvas) => {
//     var image = canvas.toDataURL("image/png", 1.0);
//     var fileName = currentExport.split("Export")[0] + ".png";
//     saveAs(image, fileName);
//   });
// };

function Harleston() {
  const [displayDetail, setDisplayDetail] = useState(true);
  // const [clicked, setClicked] = useState(false);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  // var myElement = document.getElementById("myElement");
  // var Lol = new PinchZoom.default(myElement, {
  //   minZoom: 1,
  // });

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
      <FloorPlan displayDetail={displayDetail} floor={floor} />{" "}
    </div>
  );
}

export default Harleston;
