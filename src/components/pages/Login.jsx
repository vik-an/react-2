import React, { useState } from "react";
import Button from "../modules/ButtonInput/Button";
import Input from "../modules/ButtonInput/Input";
import styles from "./Form.module.scss";
import { ROUTES } from "../../routes/consts";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (just an example)
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // You can add authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear form
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <Button type="submit">Login</Button>
        <Button type="button" onClick={() => navigate(ROUTES.REGISTER)}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
