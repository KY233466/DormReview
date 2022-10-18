import React, { useState } from "react";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { CoursesList } from "../../components/courses/ CoursesList";
import styles from "./header.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import Title from "../../components/title/Title";
// import { AddCourse } from "../../components/AddCourse/AddCourse";
// import MediaQuery from "react-responsive";
// import pic from "../../assets/hhall.jpeg";

function Header({title, location}) {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <div className={styles.header}>
      <a href="/" className={styles.btn}>
        <ArrowBackIosIcon />
      </a>
      <div className={styles.bold}>{title}</div>
      <div className={styles.location}>{location}</div>
    </div>
  );
}

export default Header;
