import React, { useState, useEffect } from "react";

const PopularBusiness = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));

    // Check if storedItems exist and if they have a 'liked' property
    if (storedItems && storedItems.liked === true) {
      setItems(storedItems);
    }
  }, []);

  return (
    <div>
      <h1>Popular Businesses</h1>

      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No popular businesses found</p>
      )}
    </div>
  );
};

export default PopularBusiness;
