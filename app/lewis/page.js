"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

import DormDisplay from "../_components/DormDisplay";
import DormDisplayMobile from "../_components/DormDisplayMobile";

const GFloor = "/floor/Lewis/LewisG.png";
const OneFloor = "/floor/Lewis/Lewis1.png";
const TwoFloor = "/floor/Lewis/Lewis2.png";
const ThreeFloor = "/floor/Lewis/Lewis3.png";
const FourFloor = "/floor/Lewis/Lewis4.png";

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
  pic: "/lewis.png",
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

function Lewis() {
  const isMobile = useMediaQuery("(max-width:860px)");

  return !isMobile ? (
    <DormDisplay Content={Content} floor={floor} Pro={Pro} Con={Con} />
  ) : (
    <DormDisplayMobile Content={Content} floor={floor} Pro={Pro} Con={Con} />
  );
}

export default Lewis;
