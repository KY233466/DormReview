import React, { useState } from "react";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { CoursesList } from "../../components/courses/ CoursesList";
import styles from "./landingHeader.module.css";
import { getAuth } from "firebase/auth";
import SigninSignup from "../signUp/signin_signup";
import Profile from "../profile/profile";
// import Warning from "./warning";
// import Title from "../../components/title/Title";
// import { AddCourse } from "../../components/AddCourse/AddCourse";
// import MediaQuery from "react-responsive";
// import pic from "../../assets/hhall.jpeg";

function State() {
  // if (getAuth().currentUser != null) {
  if (getAuth().currentUser?.emailVerified) {
    console.log("hummm");
    return null;
  } else {
    console.log("not verified");
    return <div> please verify your account </div>;
  }
  // }
}

function LandingHeader() {
  const [status, setStatus] = useState(
    getAuth() != null && !getAuth().currentUser?.emailVerified
  );

  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <div className={styles.header}>
      <div className={styles.bold}> DormReview </div>
      <div className={styles.headerR}>
        {/* {status ? "please verify!" : "hmm"} */}{" "}
        {/* {getAuth().currentUser != null ? State() : null} */}{" "}
        {/* <Warning/> */}{" "}
        {/* {getAuth().currentUser?.emailVerified ? null : "Hmmm"} */}{" "}
        {/* {State} */}{" "}
        {/* {accCreated ? (
                      <Alert
                        onClose={() => {
                          setAccCreated(false);
                        }}
                      >
                        This is a success alert — check it out!
                      </Alert>
                    ) : null} */}{" "}
        <SigninSignup />
        <Profile /> {/* <IconButton onClick={handleOpenUserMenu}> */}{" "}
      </div>{" "}
    </div>
  );
}

export default LandingHeader;
