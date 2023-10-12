"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

import DormDisplay from "../_components/DormDisplay";
import DormDisplayMobile from "../_components/DormDisplayMobile";

const OneFloor = "/floor/Latinway/Latinway1.png";
const TwoFloor = "/floor/Latinway/Latinway2.png";
const ThreeFloor = "/floor/Latinway/Latinway3.png";
const FourFloor = "/floor/Latinway/Latinway4.png";

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
];

const Content = {
  title: "Latin Way",
  path: "Latin-way",
  path2: "Latin-way-room",
  path3: "Latin-way-rate",
  available: "Sophomore ✅ Junior ✅ Senior ✅",
  bed_laundry: "Extra-long twin bed · 9 washers · 9 dryers",
  rooms:
    "Sixteen 4-person apartments all singles · One 6-person apartment all singles · Seven 10-person apartments with 6 singles and 2 doubles · Three 10-person apartments with 4 singles and 3 doubles",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/latin-way",
  description:
    "Latin Way is located downhill between Haskell Hall and Harleston Hall. There is student parking in front of the residence. Latin Way is separated by towers A-F.",
  location: "Downhill",
  pic: "/latin-way.jpeg",
};

const Pro = [
  {
    title: "Near Dinning",
    pic: "/Food.png",
  },
  {
    title: "Private Kitchens",
    pic: "/Kitchen.png",
  },
];

const Con = [
  {
    title: "Communal Bathrooms",
    pic: "/Bathroom.png",
  },
];

function LatinWay() {
  const isMobile = useMediaQuery("(max-width:860px)");

  return !isMobile ? (
    <DormDisplay Content={Content} floor={floor} Pro={Pro} Con={Con} />
  ) : (
    <DormDisplayMobile Content={Content} floor={floor} Pro={Pro} Con={Con} />
  );
}

export default LatinWay;
