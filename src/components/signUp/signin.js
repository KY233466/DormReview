import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Alert from "@mui/material/Alert";
import { Button } from "react-bootstrap";
// import GoogleButton from "react-google-button";
import { useUserAuth } from "../../context/userAuthContext";
import styles from "./signup.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      console.log("logged in with");
      console.log(email);
    } catch (err) {
      if (err.toString().includes("auth/wrong-password")) {
        setError("Wrong email or password");
      } else if (err.toString().includes("auth/user-not-found")) {
        setError("Account doesn't exist. Please sign up for an account.");
      } else if (err.toString().includes("auth/internal-error")) {
        setError("Please enter both email and password");
      } else if (err.toString().includes("auth/invalid-email")) {
        setError("Please enter a valid email address");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <>
      <div className={styles.container2}>
        <h2> Login </h2>{" "}
        {error && (
          <Alert
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
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
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
            Log In{" "}
          </Button>{" "}
        </Form>{" "}
      </div>{" "}
      {/* <div>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                  </div> */}{" "}
    </>
  );
};

export default Login;
