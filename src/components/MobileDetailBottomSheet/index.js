import { useState } from "react";
import Draggable from "react-draggable-bottom-sheet";
import ProCon from "components/ProCon/ProCon";
import bathroom from "assets/bathroom.png";
import elevator from "assets/elevator.png";
import Location from "assets/location.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";
import Review from "../Review/review";
import { BottomSheet } from "../BottomSheet";

import styles from "./index.module.css";

const MobileDetailBottomSheet = ({ content, pro, con }) => {
  const [isOpen, setIsOpen] = useState(true);

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  // const lol = window.width - 24px;

  return (
    <BottomSheet
      title={content.title + " · " + content.location}
      imgSrc={content.pic}
      subtitle={content.available}
      isDebugMode={false}
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <div className={styles.containerOuter}>
        <div className={styles.container}>
          <div
            // key={element.nReviews}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* <div
              style={{
                marginTop: "2px",
              }}
            >
              {element.Rate.toFixed(1)}
            </div> */}
            <Rating
              key="{element}"
              name="read-only"
              value={3}
              precision={0.5}
              readOnly
            />
            <div
              style={{
                marginTop: "2px",
              }}
            >
              3 reviews
            </div>
          </div>
          <div style={{ marginBottom: "5px" }}>{content.bed_laundry}</div>
          <div style={{ marginBottom: "10px" }}>{content.rooms}</div>
          <hr />
          <div style={{ marginBottom: "5px" }}>{content.description}</div>
          <a
            style={{ textDecoration: "underline", marginTop: "10px" }}
            href={content.moreInfo}
            target={"_blank"}
            rel="noreferrer"
          >
            View more about room, bathroom, and amenities
          </a>
          <ProCon pro={pro} con={con} />
          <hr style={{ marginTop: "20px" }} />
          <Review
            path={content.path}
            path2={content.path2}
            path3={content.path3}
            isMobile={true}
          />
        </div>
      </div>
    </BottomSheet>
  );
};

export default MobileDetailBottomSheet;
