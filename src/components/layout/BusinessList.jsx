import React from "react";
import BusinessCard from "./BusinessCard";
import { businessVar } from "../consts/Business";
import styles from "./BusinessLIst.module.scss";

const BusinessList = ({ category }) => {
  const filteredBusiness = category
    ? businessVar.filter((business) => business.category === category)
    : businessVar;
  if (!category) {
    return <p>This category section is empty</p>; // Handle case when business is undefined
  }
  return (
    <div className={styles.container}>
      {filteredBusiness.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
