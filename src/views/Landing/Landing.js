import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import ComboBox from "../../components/search/search";
import styles from "./landing.module.css";
import MediaQuery from "react-responsive";
import SigninSignup from "../../components/signUp/signin_signup";
import LandingHeader from "../../components/landingHeader/landingHeader";
import Map from "../../components/Map/map";
import { useLoadScript } from "@react-google-maps/api";
import MobileLandingBottomSheet from "../../components/MobileLandingBottomSheet";

function Landing() {
  const [zoom, setZoom] = useState(17);
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openBottomSheet = () => setIsOpen(true);
  const closeBottomSheet = () => setIsOpen(false);

  const [center, setCenter] = useState({
    lat: 42.40735001860593,
    lng: -71.12106588226075,
  });

  useEffect(() => {
    const getAPIKey = async () => {
      const docRef = doc(db, "APIKeys", "GoogleMaps");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setGoogleMapsApiKey(docSnap.data().googleMapsApiKey);
      } else {
        console.log("could not retrieve Google Maps API Key");
      }
    };

    getAPIKey();
  }, []);

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: googleMapsApiKey,
  // });

  // if (!isLoaded) return <div> Loading... </div>;

  return (
    <>
      <MediaQuery maxWidth={899}>
        <button onClick={() => setIsOpen(true)}>Click!</button>
        <MobileLandingBottomSheet
          isOpen={isOpen}
          closeBottomSheet={() => setIsOpen(false)}
        />
      </MediaQuery>

      <MediaQuery minWidth={900}>
        <div className={styles.container}>
          <LandingHeader />
          <div className={styles.leftContainer}>
            <div style={{ width: "80%" }}>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "800",
                    marginBottom: "10px",
                    color: "#e96a34",
                  }}
                >
                  Tired of not knowing what Tufts dorms is like during Housing
                  Selection?
                </div>
                <div style={{ paddingBottom: "10px" }}>
                  Hoping the nearest shower will not have bad water pressure? 🚿
                  Wish someone warned you against your current dorm?
                </div>
                <div>
                  Dorm Review is the place to know/share that information one
                  would otherwise not know about!
                </div>
              </div>
              <hr style={{ width: "85%", margin: "20px 0" }} />
              <div className={styles.info}>
                <div className={styles.bold}>
                  Select a continuing-student dorm below <br />
                  or click on map
                </div>
                <ComboBox setZoom={setZoom} setCenter={setCenter} />
                <SigninSignup />
              </div>
              {/* <div
              style={{ width: "80%", textAlign: "center", fontSize: "0.9rem" }}
            >
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "800",
                  marginBottom: "10px",
                  color: "#e96a34",
                }}
              >
                Tired of not knowing what Tufts dorms is like during Housing
                Selection?
              </div>
              <div>
                Hoping the nearest shower will not have bad water pressure? 🚿
                Wish someone warned you against your current dorm?
              </div>
              <div>
                Dorm Review is the place to know/share that information one
                would otherwise not know about!
              </div>
            </div>
            <hr style={{ width: "85%", margin: "20px 0" }} />
            <div className={styles.info}>
              <div className={styles.bold}>
                Select a continuing-student dorm below <br />
                or click on map
              </div>
              <ComboBox setZoom={setZoom} setCenter={setCenter} />
              <SigninSignup /> */}

              {/* <a
                          href="https://forms.gle/NM79gaE7YWNVNkke6"
                          target={"_blank"}
                          rel="noreferrer"
                          className={styles.link}
                        >
                          Which dorm is the best? Cast your vote!
                        </a> */}
            </div>

            <div
              style={{
                width: "80%",
                marginBottom: "20px",
              }}
            >
              {/* <div> All dorms except CoHo are open for reviews. </div>
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
                </div> */}

              <div style={{ fontSize: "0.8rem", width: "100%" }}>
                Have something to say? Want to build DormReview together?{" "}
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
          </div>

          <div className={styles.rightContainer}>
            {/* <Map center={center} zoom={zoom} /> */}
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default Landing;
