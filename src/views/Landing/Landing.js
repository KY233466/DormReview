import React, { useState } from "react";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { CoursesList } from "../../components/courses/ CoursesList";
// import styles from "../../views/landings/Landing.module.scss";
// import Title from "../../components/title/Title";
// import { AddCourse } from "../../components/AddCourse/AddCourse";
// import MediaQuery from "react-responsive";
import ComboBox from "../../components/search/search";
import styles from "./landing.module.css";
// import map from "../../assets/4.png";
import MediaQuery from "react-responsive";
// import firebaseConfig from "../../components/config/config";
import Login from "../../components/signUp/signin";
import SigninSignup from "../../components/signUp/signin_signup";
// import blank from "../../assets/blank.png";
import Alert from "@mui/material/Alert";
import Profile from "../../components/profile/profile";
import LandingHeader from "../../components/landingHeader/landingHeader";
import Map from "../../components/Map/map";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// import Auth from "../../components/signUp/auth";
// import Dashboard from "../../components/signUp/dashboard";
// import { useUserContext } from "../../context/userContext";

function Landing() {
  // const [accCreated, setAccCreated] = useState(false);
  // const [dorm, setDorm] = useState("");
  const [center, setCenter] = useState({
    lat: 42.40735001860593,
    lng: -71.12106588226075,
  });

  const [zoom, setZoom] = useState(17);

  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    googleMapsApiKey: "AIzaSyDvioL9bPkVCyily9QdB4aPnZ3hNhimCZM",
  });

  if (!isLoaded) return <div> Loading... </div>;

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  return (
    <div className={styles.container}>
      <MediaQuery maxWidth={899}> Please view on laptop </MediaQuery>{" "}
      <MediaQuery minWidth={900}>
        <LandingHeader />
        <div className={styles.leftContainer}>
          <div className={styles.info}>
            {" "}
            {/* <div>Only Halleston and Lewis are supported as of now</div> */}{" "}
            <div className={styles.bold}>
              Select a continuing - student dorm below <br />
              or click on map{" "}
            </div>
            {/* <div className={styles.bold}>Select a continuing-student dorm</div> */}
            <ComboBox setZoom={setZoom} setCenter={setCenter} />
            <SigninSignup />
            <div
              style={{
                width: "70%",
              }}
            >
              <div> All dorms except CoHo are open for reviews. </div>{" "}
              <div>
                Please go to{" "}
                <a
                  style={{
                    textDecoration: "underline",
                  }}
                  href="https://dorm-review.com/harleston"
                >
                  Harleston{" "}
                </a>{" "}
                to view what processed floor plan would be like.{" "}
              </div>{" "}
              <div>
                Have something to say ? Want to build DormReview together ?{" "}
                <a
                  style={{
                    textDecoration: "underline",
                  }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdSfkubPNpIOzKNkE4bRGeYpibw9J6GhKaXkLHJxxbT6foosA/viewform?usp=sf_link"
                >
                  Contact!
                </a>{" "}
              </div>{" "}
            </div>
            {/* <a
                          href="https://forms.gle/NM79gaE7YWNVNkke6"
                          target={"_blank"}
                          rel="noreferrer"
                          className={styles.link}
                        >
                          Which dorm is the best? Cast your vote!
                        </a> */}{" "}
          </div>{" "}
        </div>{" "}
        {/* <Map/> */}{" "}
        <div className={styles.rightContainer}>
          <Map center={center} zoom={zoom} />{" "}
        </div>{" "}
        {/* <img alt="map" src={map} /> */}{" "}
      </MediaQuery>{" "}
    </div>
  );
}

export default Landing;
