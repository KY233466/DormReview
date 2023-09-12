import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import ComboBox from "../../components/search/search";
import styles from "./landing.module.css";
import MediaQuery from "react-responsive";
import SigninSignup from "../../components/signUp/signin_signup";
import LandingHeader from "../../components/landingHeader/landingHeader";
import Map from "../../components/Map/map";
import { useLoadScript } from "@react-google-maps/api";

function Landing() {
  const [zoom, setZoom] = useState(17);
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState("");
  const [center, setCenter] = useState({
    lat: 42.40735001860593,
    lng: -71.12106588226075,
  });

  useEffect(() => {
    const getAPIKey = async () => {
      const data = await getDocs(collection(db, "APIKeys"));
      setGoogleMapsApiKey(data.docs[0], data);
    };

    getAPIKey();
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
  });

  if (!isLoaded) return <div> Loading... </div>;

  return (
    <div className={styles.container}>
      <MediaQuery maxWidth={899}> Please view on laptop </MediaQuery>{" "}
      <MediaQuery minWidth={900}>
        <LandingHeader />
        <div className={styles.leftContainer}>
          <div className={styles.info}>
            <div className={styles.bold}>
              Select a continuing - student dorm below <br />
              or click on map
            </div>
            <ComboBox setZoom={setZoom} setCenter={setCenter} />
            <SigninSignup />
            <div
              style={{
                width: "70%",
              }}
            >
              <div> All dorms except CoHo are open for reviews. </div>
              <div>
                Please go to{" "}
                <a
                  style={{
                    textDecoration: "underline",
                  }}
                  href="https://dorm-review.com/harleston"
                >
                  Harleston
                </a>{" "}
                to view what processed floor plan would be like.
              </div>
              <div>
                Have something to say ? Want to build DormReview together?{" "}
                <a
                  style={{
                    textDecoration: "underline",
                  }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdSfkubPNpIOzKNkE4bRGeYpibw9J6GhKaXkLHJxxbT6foosA/viewform?usp=sf_link"
                >
                  Contact!
                </a>
              </div>
            </div>

            {/* <a
                          href="https://forms.gle/NM79gaE7YWNVNkke6"
                          target={"_blank"}
                          rel="noreferrer"
                          className={styles.link}
                        >
                          Which dorm is the best? Cast your vote!
                        </a> */}
          </div>
        </div>

        <div className={styles.rightContainer}>
          <Map center={center} zoom={zoom} />
        </div>
      </MediaQuery>
    </div>
  );
}

export default Landing;
