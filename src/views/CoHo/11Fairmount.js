import { useState } from "react";
import MediaQuery from "react-responsive";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Details from "components/details/details";
import FloorPlan from "components/FloorPlan/FloorPlan";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";

import pic from "../../assets/11Fairmount.png";
import bathroom from "assets/bathroom.png";
import elevator from "assets/elevator.png";
import Location from "assets/location.png";

import OneFloor from "assets/floor/Harleston/1Harleston.png";
import TwoFloor from "assets/floor/Harleston/2Harleston.png";
import ThreeFloor from "assets/floor/Harleston/3Harleston.png";

import styles from "././coho.module.css";

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

const Content = {
  title: "11 Fairmount Street",
  path: "11Fairmount",
  path2: "11Fairmount-room",
  path3: "11Fairmount-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms: "9 single rooms ",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "Close to Breed Memorial Hall, the Interfaith Center, and an array of stores, including the Campus Mini Mart and Dunkin' Donuts",
  location: "Uphill",
  pic: pic,
};

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

function Fairmount11() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const pathname = window.location.pathname;

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  const getDormName = () => {
    if (pathname.includes("coho")) {
      let pathArray = pathname.split("/");
      const dormPath = pathArray[pathArray.length - 1];

      if (pathArray.length > 3) {
        return floor.find((f) => f.unit === dormPath).name;
      }
    }

    return Content.title;
  };

  return (
    <>
      <MediaQuery maxWidth={860}>
        <a
          href={"/map"}
          style={{
            position: "absolute",
            padding: "5px",
            paddingLeft: "3px",
            left: "12px",
            top: "20px",
            zIndex: 1,
            height: "15px",
            width: "15px",
          }}
        >
          <ArrowBackIosIcon style={{ height: "15px", color: "#2f2f2f" }} />
        </a>
        <FloorPlan displayDetail={displayDetail} floor={floor} />
        <MobileDetailBottomSheet content={Content} pro={Pro} con={Con} />
      </MediaQuery>

      <MediaQuery minWidth={861}>
        <div className={styles.container}>
          <Details
            title={getDormName()}
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
      </MediaQuery>
    </>
  );
}

export default Fairmount11;
