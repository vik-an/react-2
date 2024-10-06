import React, { useState, useEffect } from "react";
import styles from "./PopularBusiness.module.scss";

const PopularBusiness = () => {
  const [likedItems, setLikedItems] = useState([]);

  //   // Get liked items from localStorage on mount
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(`likedItems`, [])) || [];
    setLikedItems(items);
  }, []);

  return (
    <div className={styles.layout}>
      <h2>You liked these companies </h2>
      {likedItems.length > 0 ? (
        <div className={styles.container}>
          {likedItems.map((item) => (
            <div className={styles.card}>
              <img src={item.url} alt={item.name} className={styles.pic} />
              <div className={styles.text}>
                <p className={styles.BusinesTitle}>{item.name}</p>
                <p className={styles.name}>{item.service} </p>
                <p className={styles.name}>{item.person}</p>
                <p className={styles.adress}>{item.address}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No liked businesses yetes</p>
      )}
    </div>
  );
};

export default PopularBusiness;
