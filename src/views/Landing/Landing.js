import { useState } from "react";

import MapIcon from "@mui/icons-material/Map";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useLoadScript } from "@react-google-maps/api";
import MediaQuery from "react-responsive";

import ComboBox from "components/search/search";
import LandingHeader from "components/landingHeader/landingHeader";
import Map from "components/Map/map";
import MobileHeader from "./MobileHeader";

import styles from "./landing.module.css";

function Landing() {
  const [zoom, setZoom] = useState(17);

  const [center, setCenter] = useState({
    lat: 42.40735001860593,
    lng: -71.12106588226075,
  });

  const isMobile = useMediaQuery("(max-width:860px)");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDvioL9bPkVCyily9QdB4aPnZ3hNhimCZM",
  });

  if (!isLoaded && !isMobile)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading Google Maps...
      </div>
    );

  return (
    <>
      <MediaQuery maxWidth={860}>
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

      <MediaQuery minWidth={861}>
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
                    color: "#e96a34",
                  }}
                >
                  Tired of not knowing what Tufts dorms is like during Housing
                  Selection?
                </div>
                <div
                  style={{
                    paddingBottom: "10px",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  Hope the nearest shower will not have bad water pressure? 🚿
                  Wish someone warned you against your current dorm? 🤦
                </div>
                <div
                  style={{
                    paddingBottom: "10px",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  DormReview is the place to know/share that information one
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
                Have something to say or want to build DormReview together?{" "}
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
