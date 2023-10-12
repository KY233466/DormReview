"use client";

import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

import styles from "./verification.module.css";

function VerifyEmail() {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      getAuth()
        .currentUser?.reload()
        .then(() => {
          if (getAuth().currentUser?.emailVerified) {
            clearInterval(interval);
            router.push("/");
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }, 4000);
  }, [getAuth().currentUser, router]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div> A Verification email has been sent </div>
        <h1> Please check your junk mail! </h1>
        <h1> You must verify your email before browsing or leaving reviews </h1>
        <div> Follow the instruction in the email to verify your account </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
