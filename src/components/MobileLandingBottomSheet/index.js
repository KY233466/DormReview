import Draggable from "react-draggable-bottom-sheet";
import { useState } from "react";
import ProCon from "../../components/ProCon/ProCon";
import bathroom from "../../assets/bathroom.png";
import elevator from "../../assets/elevator.png";
import Location from "../../assets/location.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "./mobileLandingBottomSheet.module.css";

const MobileLandingBottomSheet = ({ isOpen, closeBottomSheet }) => {
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
      },
      indicator: {
        opacity: 0,
      },
    },
  };

  const Pro = [
    {
      title: "Single Person Bathrooms",
      pic: bathroom,
    },
    {
      title: "Elevator",
      pic: elevator,
    },
  ];

  const Con = [
    {
      title: "Far From Center of Campus",
      pic: Location,
    },
  ];

  return (
    <div>
      {/* <button onClick={openBottomSheet}>Click me 🤩</button> */}
      <Draggable
        isOpen={isOpen}
        close={closeBottomSheet}
        styles={draggableStyles}
      >
        <div style={{ textAlign: "left", padding: "0px 16px 16px 16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                fontFamily: "Poppins",
              }}
            >
              <h2>Harleston Hall</h2>
              <p>Downhill</p>
            </div>
            <a href="/harleston" style={{ padding: "7px" }}>
              <ArrowForwardIosIcon style={{ width: "15px", color: "grey" }} />
            </a>
          </div>

          <div>Sophomore ✅</div>
          <div>Extra-long twin bed · 13 washers · 14 dryers</div>
          <div>167 doubles · 51 singles · 1 triple</div>

          <hr />

          <ProCon key={"Harleston Hall"} pro={Pro} con={Con} />
        </div>
      </Draggable>
    </div>
  );
};

export default MobileLandingBottomSheet;
