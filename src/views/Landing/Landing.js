import React, { useState } from "react";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { CoursesList } from "../../components/courses/ CoursesList";
// import styles from "../../views/landings/Landing.module.scss";
// import Title from "../../components/title/Title";
// import { AddCourse } from "../../components/AddCourse/AddCourse";
// import MediaQuery from "react-responsive";
import ComboBox from "../../components/search/search"
import styles from "./landing.module.css"
import map from "../../assets/4.png"
import MediaQuery from "react-responsive";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import firebaseConfig from "../../components/config/config";
// import app from "./../firebase";
import Auth from "../../components/signUp/auth";
import Dashboard from "../../components/signUp/dashboard";
import { useUserContext } from "../../context/userContext";

function Landing() {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  // const auth = getAuth(app);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

    const { user, loading, error } = useUserContext();

  // const signUp = () => {

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });

  // }

  return (
    <div className={styles.container}>
      <MediaQuery maxWidth={899}>Please view on laptop</MediaQuery>
      <MediaQuery minWidth={900}>
        <div className={styles.leftContainer}>
          <div className={styles.info}>
            <div>Only Halleston and Lewis are supported as of now</div>
            <div className={styles.bold}>
              Select a continuing-student dorm below <br />
              or click on map
            </div>

            <ComboBox />

            <a
              href="https://forms.gle/NM79gaE7YWNVNkke6"
              target={"_blank"}
              rel="noreferrer"
            >
              Which dorm is the best? Cast your vote!
            </a>

            <div className={styles.bold}> Submit your DormRevew</div>
            {error && <p className="error">{error}</p>}
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              <> {user ? <Dashboard /> : <Auth />} </>
            )}
            {/* <input
              onChange={(e) => setEmail(e.target)}
              ype={"email"}
              placeholder="Please enter your Tufts email"
            />
            <input
              onChange={(e) => setPassword(e.target)}
              type={"password"}
              placeholder="Please enter a password"
            />
            <button onClick={() => signUp()}></button> */}
          </div>
        </div>
        <img alt="map" src={map} />
      </MediaQuery>
    </div>
  );
}

export default Landing;
