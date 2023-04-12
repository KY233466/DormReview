import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { addDoc, collection } from "firebase/firestore";
import styles from "../review.module.css";
import { db } from "../../../firebase";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "18px",
  p: 4,
  display: "flex",
  alignItems: "center",
};

function RoomReview({ name, path, open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
    setLoader(false);

    setRate(-1);
    setRoom(-1);
    setLottery(-1);
    setYear(undefined);
    setSchoolYear(undefined);
    setMessage("");
  };

  const userCollectionRef = collection(db, path);

  const [room, setRoom] = useState(-1);
  const [rate, setRate] = useState(-1);
  const [message, setMessage] = useState("");
  const [lottery, setLottery] = useState(-1);
  const [year, setYear] = useState(undefined);
  const [schoolYear, setSchoolYear] = useState(undefined);

  const [loader, setLoader] = useState(false);
  const [checkWaitlist, setCheckWaitlist] = useState(false);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState(false);

  const [verified, setVerified] = useState(false);
  const [uid, setUid] = useState(0);

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

  const handleSubmit = (e) => {
    setLoader(true);
    if (room === -1) {
      setWarning(true);
      setError("Please enter your room number");
      setLoader(false);
    } else if (rate === -1) {
      setWarning(true);
      setError("Please give a rating that's minimum of 0.5");
      setLoader(false);
    } else if (year === undefined || year === "") {
      setWarning(true);
      setError("Please select school year");
      setLoader(false);
    } else if (schoolYear === undefined || schoolYear === "") {
      setWarning(true);
      setError("Please select your grade");
      setLoader(false);
    } else {
      if (checkWaitlist) {
        setLottery(lottery.toString() + " (waitlist)");
      }

      addDoc(userCollectionRef, {
        dName: name,
        room: room,
        rate: rate,
        year: year,
        lottery: checkWaitlist ? lottery.toString() + " (waitlist)" : lottery,
        schoolYear: schoolYear,
        message: message,
        uid: uid,
      })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
          window.location.reload();
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
      <Box sx={style}>
        {!verified ? (
          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            Please sign - up and verify with your Tufts email first{" "}
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
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
            <div className={styles.bold}> Write a review for room </div>{" "}
            <div> All posts are anonymous </div>
            <label className={styles.question}>
              What was the room number ? *
            </label>
            <input
              style={{
                width: "150px",
              }}
              type="text"
              pattern="[0-9]"
              id="room"
              name="room"
              onChange={(e) => setRoom(e.target.value)}
              required
            ></input>
            <div className={styles.leftRight}>
              <div className={styles.vertical}>
                <label className={styles.question}>
                  Rate for which academic year ? *
                </label>
                <select
                  value={year}
                  name="year"
                  required
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value=""> --select an option-- </option>
                  <option value="2022-2023"> 2022 - 2023 </option>
                  <option value="2021-2022"> 2021 - 2022 </option>
                  <option value="2020-2021"> 2020 - 2021 </option>
                  <option value="2019-2020"> 2019 - 2020 </option>
                </select>
              </div>
              <div className={styles.vertical}>
                <label className={styles.question}>
                  What is your rating ? *
                </label>
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
              </div>
            </div>
            <div className={styles.leftRight}>
              <div className={styles.vertical}>
                <label className={styles.question}>
                  What 's the lottery number
                </label>
                <label
                  style={{
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  used to get the room ? (optional)
                </label>
                <input
                  style={{
                    width: "150px",
                  }}
                  type="text"
                  pattern="[0-9]"
                  id="lottery"
                  name="lottery"
                  onChange={(e) => setLottery(e.target.value)}
                ></input>
                <div className={styles.isWaitlist}>
                  <input
                    type="checkbox"
                    id="waitlist_num"
                    name="waitlist_num"
                    value="waitlist_num"
                    style={{ marginRight: "10px", width: "auto" }}
                    onChange={(e) =>setCheckWaitlist(e.target.checked)}
                  ></input>
                  <label> It is the waitlist number</label>
                </div>
              </div>
              <div className={styles.vertical}>
                <label className={styles.question}> You were a * </label>
                <select
                  value={schoolYear}
                  name="year"
                  required
                  onChange={(e) => setSchoolYear(e.target.value)}
                >
                  <option value=""> --select an option-- </option>
                  <option value="sophomore"> Sophomore </option>
                  <option value="junior"> Junior </option>
                  <option value="senior"> Senior </option>
                </select>
              </div>
            </div>
            <label className={styles.question}>
              What comments do you have ?
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
                }}
              >
                Post
              </button>
            </div>
          </form>
        )}
      </Box>
    </Modal>
  );
}

export default RoomReview;
