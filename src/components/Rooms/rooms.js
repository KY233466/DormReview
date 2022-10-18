import React, { useState } from "react";

import styles from "./rooms.module.css";

function Rooms() {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <div className={styles.container}>
        <div>167 doubles</div>
        <div>51 singles</div>
        <div>1 triple</div>
    </div>
  );
}

export default Rooms;
