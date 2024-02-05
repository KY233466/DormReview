import { useState } from "react";
import MediaQuery from "react-responsive";

import BackArrow from "components/BackArrow";
import Details from "components/details";
import MobileDetailBottomSheet from "components/MobileDetailBottomSheet";
import AltReview from "components/Review/AltReview";
import AltRatingDisplayBlock from "./AltRatingDisplayBlock";
import { config } from "./CoHoConfig";

import pic from "assets/4-6Capen.png";
import bathroom from "assets/bathroom.png";
import Location from "assets/location.png";
import kitchen from "assets/Kitchen.png";
import washer from "assets/Washer.png";
import Bed from "assets/Bed.jpg";

import styles from "./coho.module.css";

const Content = {
  title: "4-6 Capen Street",
  path: "4-6Capen",
  path2: "4-6Capen-room",
  path3: "4-6Capen-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed",
  rooms: "First unit with 3 single rooms · Second unit with 4 single rooms ",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "Behind Wren Hall and close to laundry equipments in 22-23 Bellevue",
  location: "Uphill",
  pic: pic,
};

const Pro = [
  {
    title: "Near Laundry Equipments",
    pic: washer,
  },
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

function Capen46() {
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

export default Capen46;
