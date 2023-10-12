"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

import DormDisplay from "../_components/DormDisplay";
import DormDisplayMobile from "../_components/DormDisplayMobile";

const GFloor = "/floor/Hillside/HillsideG.png";
const OneFloor = "/floor/Hillside/Hillside1.png";
const TwoFloor = "/floor/Hillside/Hillside2.png";
const ThreeFloor = "/floor/Hillside/Hillside3.png";
const FourFloor = "/floor/Hillside/Hillside4.png";

const floor = [
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
  title: "Hillside Apartments",
  path: "Hillside",
  path2: "Hillside-room",
  path3: "Hillside-rate",
  available: "Sophomore ✅ Junior ✅ Senior ✅",
  bed_laundry: "Extra-long twin bed · 6 washers · 6 dryers",
  rooms:
    "Five 10-person suites of 6 singles and 3 doubles · Twenty-three 6-person suites of 4 singles and 1 double",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/hillside-apartments",
  description:
    "Hillsides Apartments are located uphill between Dowling and Hill with a parking lot behind the buildings.",
  location: "Uphill",
  pic: "/hillside.jpeg",
};

const Pro = [
  {
    title: "Private Kitchen",
    pic: "/Kitchen.png",
  },
  {
    title: "Near Mailroom",
    pic: "/Mail.png",
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: "/Location.png",
  },
];

function Hillside() {
  const isMobile = useMediaQuery("(max-width:860px)");

  return !isMobile ? (
    <DormDisplay Content={Content} floor={floor} Pro={Pro} Con={Con} />
  ) : (
    <DormDisplayMobile Content={Content} floor={floor} Pro={Pro} Con={Con} />
  );
}

export default Hillside;
