import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import useMediaQuery from "@mui/material/useMediaQuery";

import { addDoc, doc, collection, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/auth";

import { db } from "../../../firebase/firebase";

import styles from "../review.module.css";

const styleMobile = {
  position: "absolute",
  height: "calc(100% - 45px)",
  width: "calc(100% - 30px)",
  bgcolor: "background.paper",
  p: 4,
  padding: "15px 15px 30px 15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "auto",
  overflowX: "hidden",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "18px",
  p: 4,
  display: "flex",
  alignItems: "center",
};

function DormReview({ name, path, path2, open, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
      setRate(null);
      setYear(undefined);
      setMessage("");
      setLoader(false);
    }
  };

  const userCollectionRef = collection(db, path);

  const [rate, setRate] = useState(-1);
  const [uid, setUid] = useState(0);
  const [message, setMessage] = useState("");
  const [year, setYear] = useState(undefined);
  const [loader, setLoader] = useState(false);

  const [error, setError] = useState("");
  const [warning, setWarning] = useState(false);

  const [verified, setVerified] = useState(false);

  const [histReview, setHistReview] = useState([]);

  const isMobile = useMediaQuery("(max-width:860px)");
  const isTablet = useMediaQuery("(max-width:460px)");

  const router = useRouter();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getDoc(doc(db, path2, "rate"));
        if (data.exists()) {
          setHistReview(data.data());
        } else {
          setHistReview(null);
        }
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    getReviews();
  }, [path2]);

  useEffect(() => {
    getAuth()
      .currentUser?.reload()
      .then(() => {
        if (getAuth().currentUser?.emailVerified) {
          setVerified(true);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [getAuth().currentUser]);

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

  const handleSubmit = (e) => {
    setLoader(true);
    if (rate === -1) {
      setWarning(true);
      setError("Please give a rating that's minimum of 0.5");
      setLoader(false);
    } else if (year === undefined || year === "") {
      setWarning(true);
      setError("Please select school year");
      setLoader(false);
    } else {
      addDoc(userCollectionRef, {
        dName: name,
        rate: rate,
        year: year,
        message: message,
        uid: uid,
      })
        .then(() => {
          if (histReview == null) {
            setDoc(doc(db, path2, "rate"), {
              Rate: rate,
              nReviews: 1,
            });
          } else {
            setDoc(doc(db, path2, "rate"), {
              Rate:
                (histReview.Rate * histReview.nReviews + rate) /
                (histReview.nReviews + 1),
              nReviews: histReview.nReviews + 1,
            });
          }

          setLoader(false);
          alert("Your message has been submitted👍");
          router.reload();
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

      handleClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={isMobile ? styleMobile : style}>
        {verified ? (
          <form
            className={isMobile ? styles.formMobile : styles.form}
            onSubmit={handleSubmit}
          >
            {warning ? (
              <Alert
                onClose={() => {
                  setWarning(false);
                }}
                severity="warning"
                sx={{
                  width: "500px",
                  marginBottom: "5px",
                }}
              >
                {error}
              </Alert>
            ) : null}
            <div className={styles.bold}> Write a review </div>
            <div> All posts are anonymous </div>
            <label className={styles.question}>
              Rate for which academic year? *
            </label>
            <select
              value={year}
              name="year"
              required
              onChange={(e) => setYear(e.target.value)}
            >
              <option value=""> --select an option-- </option>
              <option value="2022-2023"> 2023 - 2024 </option>
              <option value="2022-2023"> 2022 - 2023 </option>
              <option value="2021-2022"> 2021 - 2022 </option>
              <option value="2020-2021"> 2020 - 2021 </option>
              <option value="2019-2020"> 2019 - 2020 </option>
            </select>
            <label className={styles.question}> What is your rating? * </label>
            <Rating
              name="half-rating"
              size="large"
              value={rate}
              defaultValue={0}
              precision={0.5}
              onChange={(event, newValue) => {
                setRate(newValue);
              }}
              sx={{
                marginBottom: "10px",
              }}
            />
            <label className={styles.question}>
              What comments do you have?
            </label>
            <textarea
              maxLength="400"
              rows="5"
              className={styles.textarea}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className={styles.btnS}>
              <button
                onClick={handleClose}
                type="submit"
                style={{
                  cursor: "pointer",
                  width: "100px",
                  background: "white",
                  color: "black",
                  border: "1px solid teal",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                type="submit"
                style={{
                  cursor: "pointer",
                  width: "100px",
                  background: loader ? "#ccc" : "#2C5A7B",
                  fontSize: "0.9rem",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                Post
              </button>
            </div>
          </form>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <div>Please sign - up and verify with your Tufts email first</div>
            <button
              onClick={handleClose}
              type="submit"
              style={{
                cursor: "pointer",
                width: "100px",
                background: "#2C5A7B",
                color: "white",
                fontSize: "0.9rem",
                border: "none",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              Close
            </button>
          </div>
        )}
      </Box>
    </Modal>
  );
}

export default DormReview;
