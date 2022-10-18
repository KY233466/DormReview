import React, { useState } from "react";

import styles from "./lottery.module.css";

function Lottery() {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <div className={styles.container}>
      <div className={styles.bold}>Lottery number range: </div>
      <div className={styles.specifics}>
        <div>Single: 50% are from xx-xx</div>
        <div>Double: 50% are from xx-xx</div>
        <div>Triple: 50% are from xx-xx</div>
      </div>
    </div>
  );
}

export default Lottery;
