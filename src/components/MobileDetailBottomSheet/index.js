import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";

import { db } from "../../firebase";

import ProCon from "../ProCon";
import Review from "../Review";
import { BottomSheet } from "../BottomSheet";
import RatingDisplay from "../RatingDisplay/RatingDisplay";

import styles from "./index.module.css";

const MobileDetailBottomSheet = ({
  title,
  path,
  path2,
  path3,
  content,
  pro,
  con,
  altRatingDisplayBlock,
  altReviewBlock,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getDocs(collection(db, path3));
        setReviews(data.docs.map((doc) => ({ ...doc.data() })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    getReviews();
  }, [path3]);

  return (
    <BottomSheet
      title={title + " · " + content.location}
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
          {altRatingDisplayBlock ? (
            altRatingDisplayBlock
          ) : (
            <RatingDisplay path3={path3} />
          )}

          <div style={{ marginBottom: "5px" }}>{content.bed_laundry}</div>
          <div style={{ marginBottom: "10px" }}>{content.rooms}</div>
          <hr />
          <div style={{ marginBottom: "5px", fontSize: "14px" }}>
            {content.description}
          </div>
          <a
            className={styles.link}
            href={content.moreInfo}
            target={"_blank"}
            rel="noreferrer"
          >
            View more about room, bathroom, and amenities
          </a>
          <ProCon pro={pro} con={con} />
          <hr style={{ marginTop: "20px" }} />
          {altReviewBlock ? (
            altReviewBlock
          ) : (
            <Review path={path} path2={path2} path3={path3} isMobile={true} />
          )}
        </div>
      </div>
    </BottomSheet>
  );
};

export default MobileDetailBottomSheet;
