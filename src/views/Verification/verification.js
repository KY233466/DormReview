// import './verifyEmail.css'
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "./verification.module.css";

function VerifyEmail() {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      getAuth()
        .currentUser?.reload()
        .then(() => {
          if (getAuth().currentUser?.emailVerified) {
            clearInterval(interval);
            navigate("/");
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }, 4000);
  }, [navigate, getAuth().currentUser]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div> A Verification email has been sent </div>{" "}
        <h1> Please check your junk mail! </h1>{" "}
        <h1> You must verify your email before browsing or leaving reviews </h1>{" "}
        <div> Follow the instruction in the email to verify your account </div>{" "}
      </div>{" "}
    </div>
  );
}

export default VerifyEmail;
