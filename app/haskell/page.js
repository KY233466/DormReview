"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

import DormDisplay from "../_components/DormDisplay";
import DormDisplayMobile from "../_components/DormDisplayMobile";

const GFloor = "/floor/Haskell/HaskellG.png";
const OneFloor = "/floor/Haskell/Haskell1.png";
const TwoFloor = "/floor/Haskell/Haskell2.png";
const ThreeFloor = "/floor/Haskell/Haskell3.png";
const FourFloor = "/floor/Haskell/Haskell4.png";

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
  title: "Haskell Hall",
  path: "Haskell",
  path2: "Haskell-room",
  path3: "Haskell-rate",
  available: "Sophomore ✅",
  bed_laundry: "Extra-long twin bed · 6 washers · 6 dryers",
  rooms: "Eleven 10-person suites of 4 doubles and 2 singles · 2 triples",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/haskell-hall",
  description:
    "Haskell Hall is located downhill, opposite Tilton Hall. It is next to the Dewick-MacPhie Dining Hall, and also near Hodgdon Take-Out.",
  location: "Downhill",
  pic: "/Haskell.jpeg",
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

function Haskell() {
  const isMobile = useMediaQuery("(max-width:860px)");

  return !isMobile ? (
    <DormDisplay Content={Content} floor={floor} Pro={Pro} Con={Con} />
  ) : (
    <DormDisplayMobile Content={Content} floor={floor} Pro={Pro} Con={Con} />
  );
}

export default Haskell;
