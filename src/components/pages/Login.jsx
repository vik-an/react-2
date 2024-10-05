import React, { useState } from "react";
import Button from "../modules/ButtonInput/Button";
import Input from "../modules/ButtonInput/Input";
import styles from "./Form.module.scss";
import { ROUTES } from "../../routes/consts";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    localStorage.setItem("LogedUser", JSON.stringify(formData));

    console.log("Email:", formData.email);
    console.log("Password:", formData.password);

    // Clear form
    setFormData({ email: "", password: "" });
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
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className={styles.logSignUp}>
          <Button type="submit" onClick={handleSubmit}>
            Login
          </Button>
          <Link type="link" onClick={() => navigate(ROUTES.REGISTER)}>
            Still not signed up?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
