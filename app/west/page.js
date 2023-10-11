"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

import DormDisplay from "../_components/DormDisplay";
import DormDisplayMobile from "../_components/DormDisplayMobile";

const GFloor = "/floor/West/WestG.png";
const OneFloor = "/floor/West/West1.png";
const TwoFloor = "/floor/West/West2.png";
const ThreeFloor = "/floor/West/West3.png";
const FourFloor = "/floor/West/West4.png";

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
  title: "West Hall",
  path: "West",
  path2: "West-room",
  path3: "West-rate",
  available: "Sophomore ✅",
  bed_laundry: "Extra-long twin bed · 4 washers · 4 dryers",
  rooms:
    "doubles · triples · quads made up of 1 common room and 2 attached bedrooms",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/west-hall",
  description: "West Hall is located uphill on the academic quad.",
  location: "Uphill",
  pic: "/west.jpeg",
};

const Pro = [
  {
    title: "On the quad",
    pic: "/Location.png",
  },
];

const Con = [
  {
    title: "Communal Bathrooms",
    pic: "/Bathroom.png",
  },
];

function West() {
  const isMobile = useMediaQuery("(max-width:860px)");

  return !isMobile ? (
    <DormDisplay Content={Content} floor={floor} Pro={Pro} Con={Con} />
  ) : (
    <DormDisplayMobile Content={Content} floor={floor} Pro={Pro} Con={Con} />
  );
}

export default West;
