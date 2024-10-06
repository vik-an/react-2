import React from "react";
import Button from "../modules/ButtonInput/Button";
import Input from "../modules/ButtonInput/Input";
import styles from "./Form.module.scss";
import { ROUTES } from "../../routes/consts";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });

    //localStorage.setItem("LogedUser", JSON.stringify(formData));

    // console.log("Email:", formData.email);
    // console.log("Password:", formData.password);

    // Clear form

    setEmail("");
    setPassword("");
    setError("");

    navigate(ROUTES.HOME);
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
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className={styles.logSignUp}>
          <Button type="submit">Login</Button>
          <Link type="link" onClick={() => navigate(ROUTES.REGISTER)}>
            Still not signed up?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
