import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import Details from "components/details";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import AltReview from "components/Review/AltReview";
import AltRatingDisplayBlock from "./AltRatingDisplayBlock";
import { config } from "./CoHoConfig";

import pic from "assets/19Bellevue.png";
import bathroom from "assets/bathroom.png";
import kitchen from "assets/Kitchen.png";
import washer from "assets/Washer.png";
import Location from "assets/location.png";
import Bed from "assets/Bed.jpg";

import OneFloor from "assets/floor/19Bellevue/19-bellevue-1.png";
import TwoFloor from "assets/floor/19Bellevue/19-bellevue-2.png";
import ThreeFloor from "assets/floor/19Bellevue/19-bellevue-3.png";

import styles from "./coho.module.css";

const floor = [
  {
    title: 3,
    pic: ThreeFloor,
    unit: "2",
    name: "19 Bellevue Street - Unit 2",
  },
  {
    title: 2,
    pic: TwoFloor,
    unit: "2",
    name: "19 Bellevue Street - Unit 2",
  },
  {
    title: 1,
    pic: OneFloor,
    unit: "1",
    name: "19 Bellevue Street - Unit 1",
  },
];

const Content = {
  title: "19 Bellevue Street",
  path: "19Bellevue",
  path2: "19Bellevue-room",
  path3: "19Bellevue-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms: "First unit with 3 single rooms · Second unit with 5 single rooms ",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "It is named after Samson W. Tu, younger brother of the Tufts mathematics professor Loring Tu and a senior research scientist at Stanford. Read more here: https://alumniandfriends.tufts.edu/news/mathematics-professor-honors-his-brothers. It is close to Wren Hall.",
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
  {
    title: "Near Laundry Equipments",
    pic: washer,
  },
];

const Con = [
  {
    title: "Far From Center of Campus",
    pic: Location,
  },
];

function Bellevue19() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const { buildingConfig, unitConfig } = config(Content.title);

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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>No Processed Floor Plan Available</div>
          <div>https://tufts.app.box.com/v/rll-19-bellevue-floor-plan</div>
        </div>
        <MobileDetailBottomSheet
          title={Content.title}
          content={Content}
          pro={Pro}
          con={Con}
          altRatingDisplayBlock={
            <AltRatingDisplayBlock unitsConfig={buildingConfig} />
          }
          altReviewBlock={<AltReview paths={unitConfig} />}
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
            altRatingDisplayBlock={
              <AltRatingDisplayBlock unitsConfig={buildingConfig} />
            }
            altReviewBlock={<AltReview paths={unitConfig} />}
          />
          {displayDetail ? <div className={styles.placeholder}> </div> : null}
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>No Processed Floor Plan Available</div>
            <div>https://tufts.app.box.com/v/rll-19-bellevue-floor-plan</div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default Bellevue19;
