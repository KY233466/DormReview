import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import ReviewBlock from "../review_block/review_block";
import RoomReviewBlock from "../RoomReview_block/roomReview_block";
import { db } from "../../../firebase";
import styles from "./reviewTab.module.css";

const ReviewTabs = ({ path, path2 }) => {
  const [value, setValue] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [reviewsRoom, setReviewsRoom] = useState([]);

  const handleChange = (props) => {
    if (props === 0) {
      setValue(true);
      return;
    }
    setValue(false);
  };

  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(collection(db, path));
      setReviews(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getReviews();
  }, []);

  useEffect(() => {
    const getReviewsRoom = async () => {
      const data = await getDocs(collection(db, path2));
      setReviewsRoom(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getReviewsRoom();
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <div
          className={value === true ? styles.bold : null}
          onClick={() => handleChange(0)}
        >
          Dorm Review
        </div>
        <div
          className={value === false ? styles.bold : null}
          onClick={() => handleChange(1)}
        >
          Room Review
        </div>
      </div>
      <div>
        {value ? (
          reviews.length === 0 ? (
            <div className={styles.nothing}>
              Be the first to leave a dorm review!
            </div>
          ) : (
            reviews?.map((element, index) => {
              return (
                <ReviewBlock
                  key={element.message}
                  index={element.index}
                  year={element.year}
                  rate={element.rate}
                  message={element.message}
                  divider={true}
                />
              );
            })
          )
        ) : reviewsRoom.length === 0 ? (
          <div className={styles.nothing}>
            Be the first to leave a room review!
          </div>
        ) : (
          reviewsRoom?.map((element, index) => {
            return (
              <RoomReviewBlock
                key={element.message}
                index={element.index}
                room={element.room}
                rate={element.rate}
                year={element.year}
                lottery={element.lottery}
                schoolYear={element.schoolYear}
                message={element.message}
                divider={true}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ReviewTabs;
