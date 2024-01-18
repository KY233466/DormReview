import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import styles from "./RatingDisplay.module.css";

const RatingDisplay = ({ path3, rate, nReview }) => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getDocs(collection(db, "19-21University-rate"));
        setReviews(data.docs.map((doc) => ({ ...doc.data() })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    getReviews();
  }, [path3]);

  console.log(reviews);

  return (
    <div className={styles.data}>
      {loading ? (
        <Skeleton width={"150px"} height={"35px"} />
      ) : (
        <div className={styles.data}>
          {reviews?.length > 0 && (
            <div className={styles.reviewData}>
              {/* {reviews[0].Rate} */}
              {Number.parseFloat(reviews[0].Rate).toFixed(1)}
              <Rating
                // key="{element}"
                // index={element.index}
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
