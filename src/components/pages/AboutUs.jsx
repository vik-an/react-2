import React from "react";
import styles from "./AboutUs.module.scss"; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <section className={styles.headerSection}>
        <h1>About Us</h1>
        <p className={styles.introText}>
          Welcome to Our Company! We are dedicated to providing top-quality
          services that meet your needs and exceed your expectations.
        </p>
      </section>

      <section className={styles.teamSection}>
        <h2>Our Mission</h2>
        <p className={styles.missionText}>
          Our mission is to deliver exceptional services while creating a
          positive impact on the community and our environment.
        </p>
      </section>

      <section className={styles.valuesSection}>
        <h2>Our Values</h2>
        <ul className={styles.valuesList}>
          <li>Integrity</li>
          <li>Commitment to Quality</li>
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
        </ul>
      </section>

      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>CEO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Susan Lee</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
