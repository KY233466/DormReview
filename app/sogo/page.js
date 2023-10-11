"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

import DormDisplay from "../_components/DormDisplay";
import DormDisplayMobile from "../_components/DormDisplayMobile";

const OneFloor = "/floor/SoGo/SoGo1.png";
const TwoFloor = "/floor/SoGo/SoGo2.png";
const ThreeFloor = "/floor/SoGo/SoGo3.png";
const FourFloor = "/floor/SoGo/SoGo4.png";
const FiveFloor = "/floor/SoGo/SoGo5.png";

const floor = [
  {
    title: 5,
    pic: FiveFloor,
  },
  {
    title: 4,
    pic: FourFloor,
  },
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
  title: "Sophia Gordon Hall",
  path: "Sogo",
  path2: "Sogo-room",
  path3: "Sogo-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Extra-long twin bed · 4 washers · 4 dryers",
  rooms:
    "Sixteen 4-person apartments all singles · One 6-person apartment all singles · Seven 10-person apartments with 6 singles and 2 doubles · Three 10-person apartments with 4 singles and 3 doubles",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/sophia-gordon-hall",
  description:
    "Sophia Gordon is located on Talbot Avenue, and is separated into East and West buildings by a large staircase.",
  location: "Downhill",
  pic: "/sogo.jpeg",
};

const Pro = [
  {
    title: "Single Person Bathrooms",
    pic: "/Bathroom.png",
  },
  {
    title: "Elevator",
    pic: "/Elevator.png",
  },
  {
    title: "Private Kitchen",
    pic: "/Kitchen.png",
  },
];

const Con = [
  {
    title: "Hard to Get",
    pic: "/Hard.jpg",
  },
];

function SoGo() {
  const isMobile = useMediaQuery("(max-width:860px)");

  return !isMobile ? (
    <DormDisplay Content={Content} floor={floor} Pro={Pro} Con={Con} />
  ) : (
    <DormDisplayMobile Content={Content} floor={floor} Pro={Pro} Con={Con} />
  );
}

export default SoGo;
