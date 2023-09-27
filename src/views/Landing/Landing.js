import { useState } from "react";
import ComboBox from "../../components/search/search";
import styles from "./landing.module.css";
import MediaQuery from "react-responsive";
import LandingHeader from "../../components/landingHeader/landingHeader";
import Map from "../../components/Map/map";
import { useLoadScript } from "@react-google-maps/api";
import MobileHeader from "./MobileHeader";
import MapIcon from "@mui/icons-material/Map";
// import ReactGA from 'react-ga4';

function Landing() {
  const [zoom, setZoom] = useState(17);

  const [center, setCenter] = useState({
    lat: 42.40735001860593,
    lng: -71.12106588226075,
  });

  // ReactGA.pageview(window.location.pathname + window.location.search);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDvioL9bPkVCyily9QdB4aPnZ3hNhimCZM",
  });

  if (!isLoaded) return <div> Loading... </div>;

  return (
    <>
      <MediaQuery maxWidth={899}>
        <MobileHeader />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "0.9rem",
              width: "80%",
            }}
          >
            <div
              style={{
                fontSize: "1.1rem",
                marginBottom: "10px",
                color: "#e96a34",
                lineHeight: "1.4rem",
              }}
              className={styles.bold}
            >
              Tired of not knowing what Tufts dorms is like during Housing
              Selection?
            </div>
            <div>
              Bad shower water pressure? 🚿 Wish someone warned you against your
              current dorm? 🤦 Dorm Review is the place to know/share secretes
              one would otherwise not know about!
            </div>
          </div>

          <hr style={{ width: "80%", margin: "20px 0" }} />
          <div style={{ width: "80%" }} className={styles.info}>
            <div className={styles.bold}>Select a continuing-student dorm</div>
            <ComboBox setZoom={setZoom} setCenter={setCenter} />

            <div className={styles.bold}>OR</div>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
              className={styles.btn}
              href="/map"
            >
              <MapIcon />
              View Location On Map
            </a>
          </div>
        </div>
      </MediaQuery>
      {/* <MediaQuery maxWidth={899}>
        <LandingHeader />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "calc(3rem + 20px)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "0.9rem",
              width: "80%",
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
              Dorm Review is the place to know/share that information one would
              otherwise not know about!
            </div>
          </div>

          <hr style={{ width: "80%", margin: "20px 0" }} />
          <div style={{width: "80%"}} className={styles.info}>
            <div className={styles.bold}>
              Select a continuing-student dorm below
            </div>
            <ComboBox setZoom={setZoom} setCenter={setCenter} />

            <div className={styles.bold}>Or go to map page</div>
            <button className={styles.btn}>Go</button>
          </div>
        </div>
      </MediaQuery> */}

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
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    lineHeight: "1.9rem",
                    margin: "20px 0",
                    color: "#e96a34",
                  }}
                >
                  Tired of not knowing what Tufts dorms is like during Housing
                  Selection?
                </div>
                <div
                  style={{
                    paddingBottom: "10px",
                    fontSize: "1.1rem",
                    lineHeight: "1.6rem",
                  }}
                >
                  Hope the nearest shower will not have bad water pressure? 🚿
                  Wish someone warned you against your current dorm? 🤦
                </div>
                <div
                  style={{
                    paddingBottom: "10px",
                    fontSize: "1.1rem",
                    lineHeight: "1.6rem",
                  }}
                >
                  Dorm Review is the place to know/share that information one
                  would otherwise not know about!
                </div>
              </div>
              <hr style={{ width: "85%", margin: "20px 0" }} />
              <div className={styles.info}>
                <div
                  className={styles.bold}
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    lineHeight: "1.8rem",
                    width: "80%",
                  }}
                >
                  Select a continuing-student dorm below or click on map
                </div>
                <ComboBox setZoom={setZoom} setCenter={setCenter} />
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
            <Map center={center} zoom={zoom} />
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default Landing;
