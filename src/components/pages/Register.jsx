// RegisterForm.jsx
import React, { useState } from "react";
import styles from "./Form.module.scss";
import Button from "../modules/ButtonInput/Button";
import Input from "../modules/ButtonInput/Input";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    // Simulate form submission (can be replaced with API call)
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);

    // Reset form after submission
    setFormData({ name: "", email: "", password: "" });
    setError("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

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

        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
