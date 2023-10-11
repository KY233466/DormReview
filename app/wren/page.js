"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

import DormDisplay from "../_components/DormDisplay";
import DormDisplayMobile from "../_components/DormDisplayMobile";

const GFloor = "/floor/Wren/WrenG.png";
const OneFloor = "/floor/Wren/Wren1.png";
const TwoFloor = "/floor/Wren/Wren2.png";
const ThreeFloor = "/floor/Wren/Wren3.png";
const FourFloor = "/floor/Wren/Wren4.png";
const FiveFloor = "/floor/Wren/Wren5.png";

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
  {
    title: "G",
    pic: GFloor,
  },
];

const Content = {
  title: "Wren Hall",
  path: "Wren",
  path2: "Wren-room",
  path3: "Wren-rate",
  available: "Sophomore ✅",
  bed_laundry: "Extra-long twin bed",
  rooms: "Fourteen 10-person suites of 4 doubles and 2 singles",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/wren-hall",
  description:
    "Wren Hall is mostly houses sophomores and is located uphill, next to the Granoff Family Hillel Center, and directly across from Carmichael Dining Hall and student parking spaces.",
  location: "Uphill",
  pic: "/Wren.jpeg",
};

const Pro = [
  {
    title: "Near dinning",
    pic: "/Food.png",
  },
];

const Con = [
  {
    title: "Communal Bathrooms",
    pic: "/Bathroom.png",
  },
];

function Wren() {
  const isMobile = useMediaQuery("(max-width:850px)");

  return !isMobile ? (
    <DormDisplay Content={Content} floor={floor} Pro={Pro} Con={Con} />
  ) : (
    <DormDisplayMobile Content={Content} floor={floor} Pro={Pro} Con={Con} />
  );
}

export default Wren;
