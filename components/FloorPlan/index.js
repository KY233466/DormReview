import { useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

import ZoomPanPinch from "./ZoomPanPinch";

import styles from "./FloorPlan.module.css";

function FloorPlan({ floor, displayDetail }) {
  const [floorNum, setFloorNum] = useState(0);

  const isMobile = useMediaQuery("(max-width:860px)");

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

  const btnStyle = (index) => {
    if (index === floorN[floorNum]) {
      return isMobile ? styles.btnClickedMobile : styles.btnClicked;
    }

    return isMobile ? styles.btnMobile : styles.btn;
  };

  return (
    <div className={containerStyle()}>
      <ZoomPanPinch src={floor.at(floorN[floorNum]).pic} />

      <div className={isMobile ? styles.selectMobile : styles.select}>
        {floor.map((element, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setFloorNum(isString(element.title) ? 0 : element.title)
              }
              className={btnStyle(index)}
            >
              {isString(element.title) ? element.title : "L" + element.title}
            </div>
          );
        })}
      </div>

      <img
        className={isMobile ? styles.legendMobile : styles.legend}
        src={isMobile ? "/LegendMobile.png" : "/Legend.png"}
        alt="legend"
      />
    </div>
  );
}

export default FloorPlan;
