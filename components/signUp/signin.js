import { useState } from "react";
import { useRouter } from "next/router";

import { Form } from "react-bootstrap";
import Alert from "@mui/material/Alert";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../context/userAuthContext";
import styles from "./signup.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
    } catch (err) {
      if (err.toString().includes("auth/wrong-password")) {
        setError("Wrong email or password");
      } else if (err.toString().includes("auth/user-not-found")) {
        setError("Account doesn't exist. Please sign up for an account.");
      } else if (err.toString().includes("auth/internal-error")) {
        setError("Please enter both email and password");
      } else if (err.toString().includes("auth/invalid-email")) {
        setError("Please enter a valid email address");
      } else if (err.toString().includes("auth/network-request-failed")) {
        setError(
          "Could not reach server. Please check your network connectivity.",
        );
      } else {
        setError(err.message);
      }
      return;
    }
    router.reload();
  };

  return (
    <>
      <div className={styles.container2}>
        <h2>Login</h2>
        <div style={{ fontWeight: "200", fontSize: "13px" }}>
          Please use format <span> Tufts_Username</span>@tufts.edu.
        </div>
        <div style={{ fontWeight: "200", fontSize: "13px" }}>
          Ex: jsmith03@tufts.edu
        </div>
        {error && (
          <Alert
            severity="warning"
            sx={{
              width: "90%",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            {error}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className={styles.button} variant="primary" type="Submit">
            Log In
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
