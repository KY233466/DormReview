import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";
import { db } from "../../firebase";

import { useLoadScript } from "@react-google-maps/api";
import useMediaQuery from "@mui/material/useMediaQuery";
import ComboBox from "components/search/search";
import Map from "components/Map/map";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import styles from "./mobileMap.module.css";

const CoHoMobileMap = () => {
  const [selectedDormName, setSelectedDormName] = useState("");
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(16);
  const [center, setCenter] = useState({
    lat: 42.41024428222851,
    lng: -71.12156863095187,
  });

  const [reviews, setReviews] = useState(null);

  const matches = useMediaQuery("(max-width:860px)");

  if (!matches) {
    window.location.href = "/";
  }

  const dormBasicInfo = useMemo(() => {
    return {
      "CoHo (Community Housing)": {
        location: "Uphill",
        path1: "coho",
        path3: "CoHo-rate",
        available: "Junior ✅ Senior ✅",
        bed_laundry: "Full-size bed · 3 washers · 3 dryers",
        rooms:
          "2 ten-person units · 2 nine-person units · 2 eight-person units · 3 seven-person units · 1 six-person unit · 3 five-person units · 6 four-person units · 4 three-person units",
      },
      "Harleston Hall": {
        location: "Downhill",
        path1: "harleston",
        path3: "Harleston-rate",
        available: "Sophomore ✅",
        bed_laundry: "Extra-long twin bed · 13 washers · 14 dryers",
        rooms: "167 doubles · 51 singles · 1 triple",
      },
      "Haskell Hall": {
        location: "Downhill",
        path1: "haskell",
        path3: "Haskell-rate",
        available: "Sophomore ✅",
        bed_laundry: "Extra-long twin bed · 6 washers · 6 dryers",
        rooms: "Eleven 10-person suites of 4 doubles and 2 singles · 2 triples",
      },
      "Hillside Apartments": {
        location: "Uphill",
        path1: "hillside",
        path3: "Hillside-rate",
        available: "Sophomore ✅ Junior ✅ Senior ✅",
        bed_laundry: "Extra-long twin bed · 6 washers · 6 dryers",
        rooms:
          "Five 10-person suites of 6 singles and 3 doubles · Twenty-three 6-person suites of 4 singles and 1 double",
      },
      "Latin Way": {
        location: "Downhill",
        path1: "latin-way",
        path3: "Latin-way-rate",
        available: "Sophomore ✅ Junior ✅ Senior ✅",
        bed_laundry: "Extra-long twin bed · 9 washers · 9 dryers",
        rooms:
          "Sixteen 4-person apartments all singles · One 6-person apartment all singles · Seven 10-person apartments with 6 singles and 2 doubles · Three 10-person apartments with 4 singles and 3 doubles",
      },
      "Lewis Hall": {
        location: "Downhill",
        path1: "lewis",
        path3: "Lewis-rate",
        available: "Sophomore ✅",
        bed_laundry: "Extra-long twin bed · 6 washers · 6 dryers",
        rooms: "57 doubles · 74 singles · 3 triple",
      },
      "Sophia Gordon Hall": {
        location: "Downhill",
        path1: "sogo",
        path3: "Sogo-rate",
        available: "Junior ✅ Senior ✅",
        bed_laundry: "Extra-long twin bed · 4 washers · 4 dryers",
        rooms:
          "Sixteen 4-person apartments all singles · One 6-person apartment all singles · Seven 10-person apartments with 6 singles and 2 doubles · Three 10-person apartments with 4 singles and 3 doubles",
      },
      "Stratton Hall": {
        location: "Downhill",
        path1: "stratton",
        path3: "stratton-rate",
        available: "Sophomore ✅",
        bed_laundry: "Extra-long twin bed · 4 washers · 4 dryers",
        rooms: "41 doubles · 13 triples · 2 singles",
      },
      "West Hall": {
        location: "Uphill",
        path1: "west",
        path3: "west-rate",
        available: "Sophomore ✅",
        bed_laundry: "Extra-long twin bed · 4 washers · 4 dryers",
        rooms:
          "doubles · triples · quads made up of 1 common room and 2 attached bedrooms",
      },
      "Wren Hall": {
        location: "Uphill",
        path1: "wren",
        path3: "Wren-rate",
        available: "Sophomore ✅",
        bed_laundry: "Extra-long twin bed",
        rooms: "Fourteen 10-person suites of 4 doubles and 2 singles",
      },
      "10 Winthrop Street": {
        location: "Uphill",
        path1: "winthrop",
        path3: "Winthrop-rate",
        available: "Junior ✅ Senior ✅",
        bed_laundry: "Extra-long twin bed · 1 washer · 1 dryer",
        rooms: "Two 3-person units of 3 singles",
      },
      "9-11 Sunset Road": {
        location: "Uphill",
        path1: "sunset",
        path3: "Sunset-rate",
        available: "Junior ✅ Senior ✅",
        bed_laundry: "Extra-long twin bed · 1 washer · 1 dryer",
        rooms: "Two 3-person unit with 3 singles",
      },
    };
  }, []);

  useEffect(() => {
    const getReviews = async () => {
      if (selectedDormName !== "") {
        const path = dormBasicInfo[selectedDormName].path3;
        const data = await getDocs(collection(db, path));
        if (data.size !== 0) {
          setReviews(data.docs.map((doc) => ({ ...doc.data() })));
        }
        setLoading(false);
      }
    };

    getReviews();
  }, [selectedDormName, dormBasicInfo]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDvioL9bPkVCyily9QdB4aPnZ3hNhimCZM",
  });

  if (!isLoaded)
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

  return (
    <div
      style={{
        background: "grey",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Map center={center} zoom={zoom} />
      <ComboBox
        setSelectedDormName={setSelectedDormName}
        setZoom={setZoom}
        setCenter={setCenter}
        showGoBtn={false}
      />

      {selectedDormName !== "" && (
        <div className={styles.bottomSheet}>
          <div style={{ padding: "10px 16px" }}>
            <div className={styles.draggableHeader}>
              <h2>
                {selectedDormName} · {dormBasicInfo[selectedDormName].location}
              </h2>
              <a
                href={`/${dormBasicInfo[selectedDormName].path1}`}
                className={styles.btn}
              >
                <KeyboardArrowRightIcon />
              </a>
            </div>

            {loading ? (
              <Skeleton width={"50%"} height={"35px"} />
            ) : (
              reviews !== null && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <div>{reviews[0].Rate.toFixed(1)}</div>
                  <Rating value={reviews[0].Rate} precision={0.1} readOnly />
                  <div>{reviews[0].nReviews} reviews</div>
                </div>
              )
            )}

            <div style={{ marginBottom: "15px" }}>
              {dormBasicInfo[selectedDormName].available}
            </div>
            <div style={{ marginBottom: "10px" }}>
              {dormBasicInfo[selectedDormName].bed_laundry}
            </div>
            <div>{dormBasicInfo[selectedDormName].rooms}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoHoMobileMap;
