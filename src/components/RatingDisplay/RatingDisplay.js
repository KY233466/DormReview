import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./RatingDisplay.module.css";

const RatingDisplay = ({ path3 }) => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState(null);
  const isMobile = useMediaQuery("(max-width:860px)");

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
    <div className={styles.data}>
      {loading ? (
        <Skeleton width={"150px"} height={"35px"} />
      ) : (
        <div className={isMobile ? styles.dataMobile : styles.data}>
          {reviews?.length > 0 && (
            <div className={styles.reviewData}>
              {Number.parseFloat(reviews[0].Rate).toFixed(1)}
              <Rating
                name="read-only"
                value={Number.parseFloat(reviews[0].Rate)}
                precision={0.5}
                readOnly
              />
              {reviews[0].nReviews} reviews
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RatingDisplay;
