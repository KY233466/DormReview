import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Alert from "@mui/material/Alert";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/userAuthContext";
import styles from "./signup.module.css";
import auth from "../../firebase";
import { getAuth } from "firebase/auth";
// import { useAuth } from "../../context/userAuthContext";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const Signup = () => {
  // const { currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const { user } = useUserAuth();
  // const { setTimeActive } = useAuthValue();
  // let navigate = useNavigate();

  // const sendEmail = () => {
  //   auth.then((userCredential) => {
  //     userCredential.user.sendEmailVerification();
  //     auth.logOut();
  //     console.log("send email verification");
  //   })
  //     .catch(alert);
  // }

  function Error(err) {
    console.log("err");
    console.log(err);
    if (err.toString().includes("auth/missing-email")) {
      // return alert("Please enter a valid email address");
      setError("Please enter a valid email address");
    } else if (err.toString().includes("auth/weak-password")) {
      // return alert("Password should be at least 6 characters");
      setError("Password should be at least 6 characters");
    } else if (err.toString().includes("auth/internal-error")) {
      // return alert("Please enter both email and password");
      setError("Please enter both email and password");
    } else if (err.toString().includes("auth/invalid-email")) {
      // return alert("Please enter a valid email address");
      setError("Please enter a valid email address");
    } else if (err.toString().includes("auth/email-already-in-use")) {
      // return alert("Please enter a valid email address");
      setError(
        "There already is an account associated with this email. Please go to log in."
      );
    } else {
      // return alert(err);
      setError(err);
    }
  }

  function validateEmail(e) {
    setEmail(e.target.value);
    console.log(email);
    if (email.includes(".") && !email.includes("@")) {
      setError(
        "Please use school-issued email in the formate of your_Tufts_ID@tufts.edu"
      );
    }
  }

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();

    if (email.substring(0, email.indexOf("@")).includes(".")) {
      setError(
        "Please use school-issued email in the formate of your_Tufts_ID@tufts.edu"
      );
      return;
    }

    // Create a new user with email and password using firebase
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        sendEmailVerification(getAuth().currentUser)
          .then(() => {
            navigate("/verify-email");
          })
          .catch((err) => alert(err.message));
      })
      .catch((err) => Error(err));

    // try {
    //   await createUserWithEmailAndPassword(getAuth(), email, password).then(
    //     () => {
    //       sendEmailVerification(user)
    //     }
    //   );
    // } catch (err) {
    //   if (err.toString().includes("auth/missing-email")) {
    //     setError("Please enter a valid email address");
    //   } else if (err.toString().includes("auth/weak-password")) {
    //     setError("Password should be at least 6 characters");
    //   } else if (err.toString().includes("auth/internal-error")) {
    //     setError("Please enter both email and password");
    //   } else if (err.toString().includes("auth/invalid-email")) {
    //     setError("Please enter a valid email address");
    //   } else if (err.toString().includes("auth/email-already-in-use")) {
    //     setError("There already is an account associated with this email. Please go to log in.");
    //   } else {
    //     setError(err.message);
    //   }
    //   return;
    // }

    // createUserWithEmailAndPassword(getAuth(), email, password).then(() => {
    //   sendEmailVerification(user)
    //     .then(() => {
    //       // setTimeActive(true);
    //     })
    //     .catch((err) => Error(err));
    // });

    // setEmail("");
    // setPassword("");

    // try {
    //   await signUp(email, password);
    //   sendEmail();
    //   // navigate("/");
    // } catch (err) {
    //   if (err.toString().includes("auth/missing-email")) {
    //     setError("Please enter a valid email address");
    //   } else if (err.toString().includes("auth/weak-password")) {
    //     setError("Password should be at least 6 characters");
    //   } else if (err.toString().includes("auth/internal-error")) {
    //     setError("Please enter both email and password");
    //   } else if (err.toString().includes("auth/invalid-email")) {
    //     setError("Please enter a valid email address");
    //   } else if (err.toString().includes("auth/email-already-in-use")) {
    //     setError("There already is an account associated with this email. Please go to log in.");
    //   } else {
    //     setError(err.message);
    //   }
    //   return;
    // }
  };

  return (
    <>
      <div className={styles.container2}>
        <h2> Signup with your Tufts email </h2>{" "}
        <h2>
          Please use format <span> Tufts_ID </span>@tufts.edu.{" "}
        </h2>{" "}
        <h2> Ex: example01 @tufts.edu </h2>{" "}
        {error && (
          <Alert
            onClose={() => setError("")}
            severity="warning"
            sx={{
              width: "90%",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            {error}{" "}
          </Alert>
        )}{" "}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              required
              pattern="^[^.]+@tufts\.edu"
              type="email"
              placeholder="Email address"
              onChange={(e) => validateEmail(e)}
            />{" "}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
          </Form.Group>
          <Button variant="primary" type="Submit">
            Sign up{" "}
          </Button>{" "}
        </Form>{" "}
      </div>{" "}
      {/* <div className={styles.click}>
                    Already have an account? Log In
                  </div> */}{" "}
    </>
  );
};

export default Signup;
