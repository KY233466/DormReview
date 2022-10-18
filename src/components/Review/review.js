import React, { useState } from "react";

import styles from "./review.module.css";

function Review() {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <div className={styles.container}>
        <div>
            <div>Review Summary</div>
        </div>

        <div>
            <div>Reviews</div>
        </div>
    </div>
  );
}

export default Review;
