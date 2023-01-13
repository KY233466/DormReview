import React, { useState } from "react";

//   import { useAppSelector, useAppDispatch } from "../../app/hooks";
//   import { CoursesList } from "../../components/courses/ CoursesList";
import styles from "./FloorPlan.module.css";
import twoFloor from "../../assets/floor/Harleston/2Harleston.png";
import legend from "../../assets/Legend.png";
import ZoomImage from "../ZoomImage/ZoomImage";
import Compass from "../../assets/Compass.png";

function FloorPlan({ floor, displayDetail }) {
  const [floorNum, setFloorNum] = useState(0);

  return (
    <div className={displayDetail ? styles.container : styles.containerExpand}>
      <div className={styles.rightContainer}>
        <ZoomImage image={floor.at(floorNum).pic} />
      </div>

      <div className={styles.select}>
        {floor
          ?.slice(0)
          .reverse()
          .map((element, index) => {
            return (
              <div
                key={index}
                onClick={() => setFloorNum(element.title - 1)}
                className={
                  floorNum + 1 === element.title
                    ? styles.btnClicked
                    : styles.btn
                }
              >
                L {element.title}
              </div>
            );
          })}
      </div>

      <div className={styles.compass}>
        <img alt="compass" src={Compass} />
      </div>

      <div className={styles.legend}>
        <img src={legend} alt="legend" />
      </div>
    </div>
  );
}

export default FloorPlan;
