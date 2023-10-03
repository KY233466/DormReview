import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import legend from "assets/Legend.png";
import ZoomPanPinch from "../ZoomPanPinch";
import Compass from "assets/Compass.png";

import styles from "./FloorPlan.module.css";

function FloorPlan({ floor, displayDetail }) {
  const [floorNum, setFloorNum] = useState(0);

  const isMobile = useMediaQuery("(max-width:899px)");

  let floorN =
    floor.at(floor.length - 1).title === "G"
      ? [...Array(floor.length).keys()].reverse()
      : [...Array(floor.length).keys(), floor.length - 1].reverse();

  function isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
  }

  const containerStyle = () => {
    if (isMobile) {
      return styles.containerExpand;
    }

    return displayDetail ? styles.container : styles.containerExpand;
  };

  return (
    <div className={containerStyle()}>
      <ZoomPanPinch src={floor.at(floorN[floorNum]).pic} />

      <div className={styles.select}>
        {floor.map((element, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setFloorNum(isString(element.title) ? 0 : element.title)
              }
              className={
                index === floorN[floorNum] ? styles.btnClicked : styles.btn
              }
            >
              {isString(element.title) ? element.title : "L" + element.title}
            </div>
          );
        })}
      </div>

      {!isMobile && (
        <div className={styles.compass}>
          <img alt="compass" src={Compass} />
        </div>
      )}

      {!isMobile && (
        <div className={styles.legend}>
          <img src={legend} alt="legend" />
        </div>
      )}
    </div>
  );
}

export default FloorPlan;
