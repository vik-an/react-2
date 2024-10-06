import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./BusinessList.module.scss";
//import { FaHeart } from "react-icons/fa";

import { useLocalStorage } from "usehooks-ts";
import Button from "../modules/ButtonInput/Button";
//import handleLike from "./Liked2";

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

  const [Liked, setLike] = useLocalStorage(`liked-${id}`, false);
  const [likedItems, setLikedItems] = useLocalStorage(`likedItems`, []);

  //Handle like button click
  const handleChange = (newItem) => {
    const newLikedItem = !Liked; // Toggle the current state
    setLike(newLikedItem); // Update the individual "Liked" state

    setLikedItems([...likedItems, newItem]);

    if (newLikedItem) {
      // If the business is liked, add it to the likedItems array (if it's not already there)
      if (!likedItems.some((item) => item.id === business.id)) {
        setLikedItems([...likedItems, business]);
      }
    } else {
      // If unliked, remove the business from the likedItems array
      const updatedItems = likedItems.filter((item) => item.id !== business.id);
      setLikedItems(updatedItems);
    }
  };
  // Use localStorage for "Liked" state

  // Save the updated state in localStorage
  //localStorage.setItem(`liked-${id}`, JSON.stringify(newLikedItem));
  //}

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
        <Button smallScreen>Book Now</Button>
      </div>
    </div>
  );
};

export default BusinessCard;
