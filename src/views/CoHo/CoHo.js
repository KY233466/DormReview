import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./sogo.module.css";
import Details from "components/details/details";
import pic from "assets/coho.jpeg";
import kitchen from "assets/Kitchen.png";
import Bed from "assets/Bed.jpg";
import Washer from "assets/Washer.png";
import CoHoMap from "components/Map/cohoMap";
import { useLoadScript } from "@react-google-maps/api";

const Content = {
  title: "CoHo (Community Housing)",
  path: "CoHo",
  path2: "CoHo-room",
  path3: "CoHo-rate",
  available: "Junior ✅ Senior ✅",
  bed_laundry: "Full-size bed · 3 washers · 3 dryers",
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
    title: "Lack of Laundry Equipment",
    pic: Washer,
  },
];

function CoHo() {
  const [displayDetail, setDisplayDetail] = useState(true);
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState("");
  const [zoom] = useState(18.7);

  const [center] = useState({
    lat: 42.41024428222851,
    lng: -71.12156863095187,
  });

  useEffect(() => {
    const getAPIKey = async () => {
      const data = await getDocs(collection(db, "APIKeys"));
      setGoogleMapsApiKey(data.docs[0], data);
    };

    getAPIKey();
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
  });

  if (!isLoaded) return <div> Loading... </div>;

  function changeDetail() {
    setDisplayDetail(!displayDetail);
  }
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
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
      />
      {displayDetail ? <div className={styles.placeholder}> </div> : null}
      <div className={styles.rightContainer}>
        <CoHoMap center={center} zoom={zoom} />

        {/* Processed floor plan not available.Please go to{" "}
        <a
          style={{
            textDecoration: "underline",
          }}
          href="https://dorm-review.com/harleston"
        >
          {" "}
          Harleston{" "}
        </a>{" "}
        to view what it would look like.{" "}
      </div>{" "} */}
      </div>
    </div>
  );
}

export default CoHo;
