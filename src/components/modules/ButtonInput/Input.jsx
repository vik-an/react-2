import styles from "./input.module.scss";
import React from "react";

const input = ({ placeholder, ...props }) => {
  return (
    <div>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default input;
