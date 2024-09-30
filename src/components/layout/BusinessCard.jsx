import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./BusinessList.module.scss";
import { FaHeart } from "react-icons/fa";
import useLocalStorage from "./Liked";
import Button from "../modules/ButtonInput/Button";

const BusinessCard = ({ business }) => {
  if (!business) {
    return <p>No business data available</p>; // Handle case when business is undefined
  }

  const {
    id = "",
    name = "",
    category = "",
    person = "",
    address = "",
  } = business;
  const params = useParams();
  console.log(business);

  // Use localStorage for "Liked" state
  const [Liked, setLike] = useLocalStorage(`liked-${id}`, false);

  // Handle like button click
  function handleChange() {
    const newLikedValue = !Liked; // Toggle the current state
    setLike(newLikedValue); // Update the "Liked" state

    // Save the updated state in localStorage
    localStorage.setItem(`liked-${id}`, JSON.stringify(newLikedValue));
  }

  return (
    <div className={styles.card}>
      <div onClick={() => alert("Not today")}>
        <div>
          {/* Add an alt attribute to the image for accessibility */}
          <img src={business.url} alt={name} className={styles.pic} />
          <div className={styles.text}>
            <p className={styles.category}>{category}</p>
            <p className={styles.BusinesTitle}>"{name}"</p>

            <p className={styles.name}>{person}</p>
            <p className={styles.adress}>{address}</p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          rounded
          onClick={handleChange}
          className={Liked ? styles.liked : styles.like}
        >
          {Liked ? "❤️" : "💜"}
        </Button>
        <Button>Book Now</Button>
      </div>
    </div>
  );
};

export default BusinessCard;
