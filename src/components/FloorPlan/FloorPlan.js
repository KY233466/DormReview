import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import ZoomPanPinch from "../ZoomPanPinch";

import legend from "assets/Legend.png";
import legendMobile from "assets/LegendMobile.png";

import styles from "./FloorPlan.module.css";

function FloorPlan({ floor, displayDetail }) {
  const pathname = window.location.pathname;
  const [floorNum, setFloorNum] = useState(
    pathname.includes("coho") && pathname.split("/").length > 3
      ? floor.find(
          (f) =>
            f.unit ===
            window.location.pathname.slice(pathname.lastIndexOf("/") + 1),
        ).title
      : 0,
  );
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
      return styles.containerExpandMobile;
    }

    return displayDetail ? styles.container : styles.containerExpand;
  };

  const btnStyle = (index) => {
    if (index === floorN[floorNum]) {
      return isMobile ? styles.btnClickedMobile : styles.btnClicked;
    }

    return isMobile ? styles.btnMobile : styles.btn;
  };

  const handleClickNewFloor = (element) => {
    setFloorNum(isString(element.title) ? 0 : element.title);

    if (!isString(element.title)) {
      if (pathname.includes("coho") && pathname.split("/").length > 3) {
        window.location.replace(
          window.location.pathname
            .slice(0, pathname.lastIndexOf("/") + 1)
            .concat(element.unit),
        );
      }
    }
  };

  return (
    <div className={containerStyle()}>
      <ZoomPanPinch src={floor.at(floorN[floorNum]).pic} />

      <div className={isMobile ? styles.selectMobile : styles.select}>
        {floor.map((element, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                handleClickNewFloor(element);
              }}
              className={btnStyle(index)}
            >
              {isString(element.title) ? element.title : "L" + element.title}
            </div>
          );
        })}
      </div>

      <img
        className={isMobile ? styles.legendMobile : styles.legend}
        src={isMobile ? legendMobile : legend}
        alt="legend"
      />
    </div>
  );
}

export default FloorPlan;
