import { useState } from "react";

import styles from "./sogo.module.css";
import Details from "../../../components/details/details";
import pic from "../../../assets/sogo.jpeg";
import kitchen from "../../../assets/Kitchen.png";
import Bed from "../../../assets/Bed.jpg";
import Washer from "../../../assets/Washer.png";
import FloorPlan from "../../../components/FloorPlan/FloorPlan";

import OneFloor from "../../../assets/floor/19Uni/19-uni1.png";
import TwoFloor from "../../../assets/floor/19Uni/19-uni2.png";
import ThreeFloor from "../../../assets/floor/19Uni/19-uni3.png";

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
];

const Content = [
  {
    title: "CoHo (Community Housing)",
    path: "CoHo",
    path2: "CoHo-room",
    path3: "CoHo-rate",
    available: "Junior ✅ Senior ✅",
    bed_laundry: "Full-size bed · 3 washers · 3 dryers",
    rooms:
      "2 ten-person units · 2 nine-person units · 2 eight-person units · 3 seven-person units · 1 six-person unit · 3 five-person units · 6 four-person units · 4 three-person units",
    moreInfo:
      "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
    description:
      "CoHo (Community Housing) is Tufts newest housing option for juniors and seniors. Located just behind Wren Hall (between Capen Street Ext and Boston Avenue), this group of woodframe houses is home to 137 students. These houses were all fully renovated during the between 2018 and 2019.",
    location: "Uphill",
    pic: pic,
  },
];

const Pro = [
  {
    title: "Full-size Bed",
    pic: Bed,
  },
  {
    title: "Private Kitchen",
    pic: kitchen,
  },
];

const Con = [
  {
    title: "Lack of Laundry Equipment",
    pic: Washer,
  },
];

function SoGo() {
  const [displayDetail, setDisplayDetail] = useState(true);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

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

export default SoGo;
