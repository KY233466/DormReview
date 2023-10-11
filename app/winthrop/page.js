"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

import DormDisplay from "../_components/DormDisplay";
import DormDisplayMobile from "../_components/DormDisplayMobile";

const OneFloor = "/floor/Winthrop/1Win.png";
const TwoFloor = "/floor/Winthrop/2Win.png";

const floor = [
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
  title: "10 Winthrop Street",
  path: "Winthrop",
  path2: "Winthrop-room",
  path3: "Winthrop-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Extra-long twin bed · 1 washer · 1 dryer",
  rooms: "Two 3-person units of 3 singles",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/10-winthrop-street",
  description:
    "Two apartments for upper-class students located uphill, across from Carmichael Dining Hall.",
  location: "Uphill",
  pic: "/10Winthrop.jpeg",
};

const Pro = [
  {
    title: "Single Person Bathroom",
    pic: "/Bathroom.png",
  },
  {
    title: "Private Kitchen",
    pic: "/Kitchen.png",
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: "/Location.png",
  },
];

function Winthrop() {
  const isMobile = useMediaQuery("(max-width:860px)");

  return !isMobile ? (
    <DormDisplay Content={Content} floor={floor} Pro={Pro} Con={Con} />
  ) : (
    <DormDisplayMobile Content={Content} floor={floor} Pro={Pro} Con={Con} />
  );
}

export default Winthrop;
