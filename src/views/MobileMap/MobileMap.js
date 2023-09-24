import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useLoadScript } from "@react-google-maps/api";
import useMediaQuery from "@mui/material/useMediaQuery";
import ComboBox from "../../components/search/search";
import Draggable from "react-draggable-bottom-sheet";
import Map from "../../components/Map/map";

const MobileMap = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState("");
  const [zoom, setZoom] = useState(17);
  const [center, setCenter] = useState({
    lat: 42.40735001860593,
    lng: -71.12106588226075,
  });

  const openBottomSheet = () => setIsOpen(true);
  const closeBottomSheet = () => setIsOpen(false);

  const matches = useMediaQuery("(max-width:899px)");

  if (!matches) {
    window.location.href = "/";
  }

  const styles = {
    backdrop: {
      opacity: 0,
    },
    window: {
      wrap: {
        borderRadius: "10px 10px 0 0",
      },
    },
    dragIndicator: {
      wrap: {
        opacity: 0,
        paddingTop: 0,
      },
      indicator: {
        opacity: 0,
      },
    },
  };

  useEffect(() => {
    const getAPIKey = async () => {
      const docRef = doc(db, "APIKeys", "GoogleMaps");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setGoogleMapsApiKey(docSnap.data().googleMapsApiKey);
      } else {
        console.log("could not retrieve Google Maps API Key");
      }
    };

    getAPIKey();
  }, []);

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: googleMapsApiKey,
  // });

  // if (!isLoaded) return <div> Loading... </div>;

  return (
    <div style={{ background: "grey", height: "100vh", width: "100vw" }}>
      {/* <Map center={center} zoom={zoom} /> */}
      <ComboBox setZoom={setZoom} setCenter={setCenter} showGoBtn={false} />

      <button onClick={openBottomSheet}>Click me 🤩</button>

      <Draggable isOpen={isOpen} close={closeBottomSheet} styles={styles}>
        <div style={{ textAlign: "left", padding: "0px 16px 16px 16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <h2>Harleston Hall</h2>
              <p>Downhill</p>
            </div>
            {/* <a href="/harleston" className={styles.btn}> */}
            {/* <ArrowBackIosIcon /> */}
            {/* </a> */}
          </div>

          <div>Sophomore ✅</div>
          <div>Extra-long twin bed · 13 washers · 14 dryers</div>
          <div>167 doubles · 51 singles · 1 triple</div>

          <hr />

          {/* <ProCon key={"Harleston Hall"} pro={Pro} con={Con} /> */}
        </div>
      </Draggable>
    </div>
  );
};

export default MobileMap;
