"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "/firebase/firebase";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useMediaQuery from "@mui/material/useMediaQuery";

import RoomReviewBlock from "/components/Review/RoomReview_block/roomReview_block";
import ReviewBlock from "/components/Review/review_block/review_block";

import styles from "./profile.module.css";

const ProfilePage = () => {
  const [comments, setComments] = useState([]);
  const [uid, setUid] = useState(0);
  const [docs, setDocs] = useState([]);

  const isMobile = useMediaQuery("(max-width:860px)");

  useEffect(() => {
    getAuth()
      .currentUser?.reload()
      .then(() => {
        if (getAuth().currentUser != null) {
          setUid(getAuth().currentUser.uid);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [getAuth().currentUser]);

  useEffect(() => {
    // Fetch comments from Firebase Firestore
    const fetchComments = async () => {
      try {
        const commentsRef = collection(db, "users");
        const q = query(commentsRef, where("uid", "==", uid)); // Use the query function to filter documents by uid
        const querySnapshot = await getDocs(q);

        const commentsData = querySnapshot.docs.map((doc) => doc.data().post);
        const string = commentsData[0]?.split(" ");
        setComments(string);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [uid]);

  useEffect(() => {
    // Fetch documents from collections based on the path obtained from "Users" document
    const fetchDocsData = async () => {
      try {
        if (comments?.length > 0) {
          const Info = [];

          for (const collectionName of comments) {
            const docRef = collection(db, collectionName);
            const q = query(docRef, where("uid", "==", uid));
            const docSnapshot = await getDocs(q);

            const docData = docSnapshot.docs.map((doc) => doc.data());

            Info.push(docData[0]);
          }

          setDocs(Info);
        }
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocsData();
  }, [comments, uid]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className={styles.header}>
        <a href="/" className={styles.btn}>
          <ArrowBackIosIcon />
        </a>
      </div>

      <div
        className={styles.content}
        style={isMobile ? { width: "95%" } : { width: "70%" }}
      >
        <h3>My Reviews</h3>

        {uid === 0 ? <div>Empty here...</div> : null}

        {docs?.map((doc, index) => (
          <div
            className={styles.review}
            style={isMobile && { width: "100%" }}
            key={index}
          >
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              {doc.dName}
            </div>
            {Object.keys(doc).length === 5 ? (
              <ReviewBlock
                key={doc.message}
                index={doc.index}
                year={doc.year}
                rate={doc.rate}
                message={doc.message}
                divider={false}
              />
            ) : (
              <RoomReviewBlock
                key={doc.message}
                index={doc.index}
                room={doc.room}
                rate={doc.rate}
                year={doc.year}
                lottery={doc.lottery}
                schoolYear={doc.schoolYear}
                message={doc.message}
                divider={false}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
