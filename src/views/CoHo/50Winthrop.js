import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import RatingDisplay from "components/RatingDisplay/RatingDisplay";
import Details from "components/details";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import AltReview from "components/Review/AltReview";

import pic from "assets/50Winthrop.png";
import bathroom from "assets/bathroom.png";
import kitchen from "assets/Kitchen.png";
import Location from "assets/location.png";
import Bed from "assets/Bed.jpg";

import OneFloor from "assets/floor/47Winthrop/47-winthrop-1.png";
import TwoFloor from "assets/floor/47Winthrop/47-winthrop-2.png";
import ThreeFloor from "assets/floor/47Winthrop/47-winthrop-3.png";

import styles from "./coho.module.css";

const floor = [
  {
    title: 3,
    pic: ThreeFloor,
    unit: "3",
    name: "50 Winthrop Street - Unit 2",
  },
  {
    title: 2,
    pic: TwoFloor,
    unit: "2",
    name: "50 Winthrop Street - Unit 2",
  },
  {
    title: 1,
    pic: OneFloor,
    unit: "1",
    name: "50 Winthrop Street - Unit 1",
  },
];

const paths = [
  {
    name: "Unit 1",
    path: "50Winthrop-1",
    path2: "50Winthrop-1-room",
    path3: "50Winthrop-1-rate",
  },
  {
    name: "Unit 2",
    path: "50Winthrop-2",
    path2: "50Winthrop-2-room",
    path3: "50Winthrop-2-rate",
  },
  {
    name: "Unit 3",
    path: "50Winthrop-3",
    path2: "50Winthrop-3-room",
    path3: "50Winthrop-3-rate",
  },
];

const Content = {
  title: "50 Winthrop Street",
  path: "50Winthrop",
  path2: "50Winthrop-room",
  path3: "50Winthrop-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms:
    "First unit with 5 single rooms · Second unit with 8 single rooms · Third unit with 8 single rooms",
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
    title: "Private Kitchen",
    pic: kitchen,
  },
  {
    title: "Full-size Bed",
    pic: Bed,
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: Location,
  },
];

const altRatingDisplayBlock = () => {
  return (
    <div style={{ marginBottom: "7px" }}>
      <div style={{ fontStyle: "italic", fontWeight: "100" }}>Unit 3</div>
      <RatingDisplay path3={paths[2].path3} />
      <div style={{ fontStyle: "italic", fontWeight: "100" }}>Unit 2</div>
      <RatingDisplay path3={paths[1].path3} />
      <div style={{ fontStyle: "italic", fontWeight: "100" }}>Unit 1</div>
      <RatingDisplay path3={paths[0].path3} />
    </div>
  );
};

function Winthrop50() {
  const [displayDetail, setDisplayDetail] = useState(true);

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  return (
    <>
      <MediaQuery maxWidth={860}>
        <BackArrow href="/coho" />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>No Floor Plan Available</div>
        </div>
        <MobileDetailBottomSheet
          title={Content.title}
          content={Content}
          pro={Pro}
          con={Con}
          altRatingDisplayBlock={altRatingDisplayBlock()}
          altReviewBlock={<AltReview paths={paths} />}
        />
      </MediaQuery>

      <MediaQuery minWidth={861}>
        <div className={styles.container}>
          <Details
            title={Content.title}
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
            altRatingDisplayBlock={altRatingDisplayBlock()}
            altReviewBlock={<AltReview paths={paths} />}
          />
          {displayDetail ? <div className={styles.placeholder}> </div> : null}
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>No Floor Plan Available</div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default Winthrop50;
