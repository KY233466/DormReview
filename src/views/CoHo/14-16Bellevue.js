import { useState } from "react";
import MediaQuery from "react-responsive";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Details from "components/details/details";
import FloorPlan from "components/FloorPlan/FloorPlan";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";

import pic from "../../assets/1416Bellevue.png";
import bathroom from "assets/bathroom.png";
import elevator from "assets/elevator.png";
import Location from "assets/location.png";

import GFloor from "assets/floor/12Bellevue/12-bellevue-0.png";
import OneFloor from "assets/floor/12Bellevue/12-bellevue-1.png";
import TwoFloor from "assets/floor/12Bellevue/12-bellevue-2.png";
import ThreeFloor from "assets/floor/12Bellevue/12-bellevue-3.png";

import styles from "././coho.module.css";

const floor = [
  {
    title: 3,
    pic: ThreeFloor,
    unit: "3",
    name: "14 Bellevue Street",
  },
  {
    title: 2,
    pic: TwoFloor,
    unit: "2",
    name: "14 Bellevue Street",
  },
  {
    title: 1,
    pic: OneFloor,
    unit: "1",
    name: "16 Bellevue Street",
  },
];

const Content = {
  title: "14-16 Bellevue Street",
  path: "14-16Bellevue",
  path2: "14-16Bellevue-room",
  path3: "14-16Bellevue-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms: "First unit with 4 single rooms · Second unit with 8 single rooms",
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

function Bellevue1416() {
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

export default Bellevue1416;
