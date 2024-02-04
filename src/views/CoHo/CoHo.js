import { useState } from "react";

import { useLoadScript } from "@react-google-maps/api";
import MediaQuery from "react-responsive";

import useMediaQuery from "@mui/material/useMediaQuery";

import Details from "components/details";
import BuildingRatingList from "./BuildingRatingList";
import ContentBlock from "components/details/content";
import CoHoMap from "components/Map/cohoMap";

import pic from "assets/coho.jpeg";
import cohoMap from "assets/rll-coho-map.png";
import kitchen from "assets/Kitchen.png";
import Bed from "assets/Bed.jpg";
import Washer from "assets/Washer.png";

import styles from "./sogo.module.css";

const Content = {
  title: "CoHo (Community Housing)",
  path: "CoHo",
  path2: "CoHo-room",
  path3: "CoHo-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry:
    "Full-size bed · laundry rooms located at Green House (12 Bellevue), 21 Bellevue, and 22 Bellevue",
  rooms:
    "2 ten-person units · 2 nine-person units · 2 eight-person units · 3 seven-person units · 1 six-person unit · 3 five-person units · 6 four-person units · 4 three-person units",
  moreInfo:
    "https://students.tufts.edu/residential-life-learning/campus-housing/continuing-undergrad/coho-community-housing",
  description:
    "CoHo (Community Housing) is Tufts newest housing option for juniors and seniors. Located just behind Wren Hall (between Capen Street Ext and Boston Avenue), this group of woodframe houses is home to 137 students. These houses were all fully renovated during the between 2018 and 2019.",
  location: "Uphill",
  pic: pic,
};

const Pro = [
  {
    title: "Full-size Bed",
    pic: Bed,
  },
  {
    title: "Private Kitchen",
    pic: kitchen,
  },
];

const Con = [
  {
    title: "Laundry Equipment In Another Building",
    pic: Washer,
  },
];

function CoHo() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const [zoom] = useState(18.7);
  const [toggleList, setToggleList] = useState([]);
  const isMobile = useMediaQuery("(max-width:860px)");
  const [center] = useState({
    lat: 42.41024428222851,
    lng: -71.12156863095187,
  });

  // useEffect(() => {
  //   const getAPIKey = async () => {
  //     const data = await getDocs(collection(db, "APIKeys"));
  //     setGoogleMapsApiKey(data.docs[0], data);
  //   };

  //   getAPIKey();
  // }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDvioL9bPkVCyily9QdB4aPnZ3hNhimCZM",
  });

  if (!isMobile && !isLoaded)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading Google Maps...
      </div>
    );

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }

  return (
    <>
      <MediaQuery maxWidth={860}>
        <div className={styles.containerMobile}>
          <ContentBlock
            title={Content.title}
            path={Content.path}
            path2={Content.path2}
            path3={Content.path3}
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
            fetchReviews={false}
            altRatingDisplayBlock={
              <div>
                <img
                  src={cohoMap}
                  alt="CoHo Map"
                  style={{
                    width: "100%",
                  }}
                />
                <BuildingRatingList
                  toggleList={toggleList}
                  setToggleList={setToggleList}
                />
              </div>
            }
          />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={861}>
        <div className={styles.container}>
          <Details
            title={Content.title}
            path={Content.path}
            path2={Content.path2}
            path3={Content.path3}
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
            fetchReviews={false}
            altRatingDisplayBlock={
              <BuildingRatingList
                toggleList={toggleList}
                setToggleList={setToggleList}
              />
            }
          />
          {displayDetail ? <div className={styles.placeholder}> </div> : null}
          <div className={styles.rightContainer}>
            <CoHoMap center={center} zoom={zoom} />
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default CoHo;
