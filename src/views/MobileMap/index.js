import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import useMediaQuery from "@mui/material/useMediaQuery";
import ComboBox from "../../components/search/search";
import Draggable from "react-draggable-bottom-sheet";
import Map from "../../components/Map/map";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import styles from "./mobileMap.module.css";

const MobileMap = () => {
  const [selectedDormName, setSelectedDormName] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [zoom, setZoom] = useState(16);
  const [center, setCenter] = useState({
    lat: 42.40676740258838,
    lng: -71.12054149579414,
  });

  const openBottomSheet = () => setIsOpen(true);
  const closeBottomSheet = () => setIsOpen(false);

  useEffect(() => {
    openBottomSheet();
  }, [selectedDormName]);

  const matches = useMediaQuery("(max-width:899px)");

  if (!matches) {
    window.location.href = "/";
  }

  const draggableStyles = {
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
        paddingBottom: 0,
      },
      indicator: {
        opacity: 0,
      },
    },
  };

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
        overscrollBehavior: "none",
      }}
    >
      <Map center={center} zoom={zoom} />
      <ComboBox
        setSelectedDormName={setSelectedDormName}
        setZoom={setZoom}
        setCenter={setCenter}
        showGoBtn={false}
      />

      <Draggable
        isOpen={isOpen}
        close={closeBottomSheet}
        styles={draggableStyles}
      >
        {selectedDormName !== "" && (
          <div style={{ padding: "10px 16px 40px 16px" }}>
            <div className={styles.draggableHeader}>
              <div className={styles.draggableTitle}>
                <h2>{selectedDormName}</h2>
                <p>Downhill</p>
              </div>
              <a href="/harleston" className={styles.btn}>
                <KeyboardArrowRightIcon />
              </a>
            </div>

            <div style={{ marginBottom: "15px" }}>Sophomore ✅</div>
            <div>Extra-long twin bed · 13 washers · 14 dryers</div>
            <div>167 doubles · 51 singles · 1 triple</div>
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default MobileMap;
