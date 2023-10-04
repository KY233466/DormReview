import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";

import { db } from "../../firebase";

import ProCon from "components/ProCon/ProCon";
import Review from "../Review/review";
import { BottomSheet } from "../BottomSheet";

import styles from "./index.module.css";

const MobileDetailBottomSheet = ({ content, pro, con }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getDocs(collection(db, content.path3));
        setReviews(data.docs.map((doc) => ({ ...doc.data() })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    getReviews();
  }, [content.path3]);

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
          {loading ? (
            <Skeleton width={"100%"} height={"35px"} />
          ) : (
            <div className={styles.data}>
              {reviews?.map((element) => {
                return (
                  <div
                    key={element.nReviews}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "2px",
                      }}
                    >
                      {element.Rate.toFixed(1)}
                    </div>
                    <Rating
                      key="{element}"
                      index={element.index}
                      name="read-only"
                      value={element.Rate}
                      precision={0.5}
                      readOnly
                    />
                    <div
                      style={{
                        marginTop: "2px",
                      }}
                    >
                      {element.nReviews} reviews
                    </div>
                  </div>
                );
              })}
            </div>
          )}

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
