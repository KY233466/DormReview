import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";

import ReviewBlock from "../review_block/review_block";
import RoomReviewBlock from "../RoomReview_block/roomReview_block";
import { db } from "../../../firebase/firebase";
import styles from "./reviewTab.module.css";

const ReviewTabs = ({ path, path2 }) => {
  const [loading, setLoading] = useState(true);
  const [showDormReview, setShowDormReview] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [reviewsRoom, setReviewsRoom] = useState([]);

  const handleChange = (props) => {
    if (props === 0) {
      setShowDormReview(true);
      return;
    }
    setShowDormReview(false);
  };

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getDocs(collection(db, path));
        setReviews(data.docs.map((doc) => ({ ...doc.data() })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    getReviews();
  }, [path]);

  useEffect(() => {
    const getReviewsRoom = async () => {
      try {
        const data = await getDocs(collection(db, path2));
        setReviewsRoom(data.docs.map((doc) => ({ ...doc.data() })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    getReviewsRoom();
  }, [path2]);

  const Content = () => {
    if (showDormReview) {
      return reviews.length === 0 ? (
        <div className={styles.nothing}>
          Be the first to leave a dorm review!
        </div>
      ) : (
        reviews?.map((element, index) => {
          return (
            <ReviewBlock
              key={element.message}
              index={index}
              year={element.year}
              rate={element.rate}
              message={element.message}
              divider={index !== reviews.length - 1}
            />
          );
        })
      );
    }

    return reviewsRoom.length === 0 ? (
      <div className={styles.nothing}>Be the first to leave a room review!</div>
    ) : (
      reviewsRoom?.map((element, index) => {
        return (
          <RoomReviewBlock
            key={element.message}
            index={index}
            room={element.room}
            rate={element.rate}
            year={element.year}
            lottery={element.lottery}
            schoolYear={element.schoolYear}
            message={element.message}
            divider={index !== reviews.length - 1}
          />
        );
      })
    );
  };

  return (
    <div>
      <div className={styles.header}>
        <div
          className={showDormReview ? styles.bold : null}
          onClick={() => handleChange(0)}
        >
          Dorm Review
        </div>
        <div
          className={!showDormReview ? styles.bold : null}
          onClick={() => handleChange(1)}
        >
          Room Review
        </div>
      </div>
      {loading ? <Skeleton width={"100%"} height={"150px"} /> : Content()}
    </div>
  );
};

export default ReviewTabs;
