import React, { useState } from "react";
// import { Form, Alert } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/userAuthContext";
import LoginModal from "./signin_modal";
import SignupModal from "./signup_modal";
import styles from "./signup.module.css";

const Signin_signup = () => {
  const { logOut, user } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      console.log("logged out");
      // navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.signinsignup}>
      {" "}
      {user ? null : (
        <div className={styles.subsectionM}>
          <LoginModal />
          <SignupModal />
        </div>
      )}{" "}
    </div>
  );
};

export default Signin_signup;
