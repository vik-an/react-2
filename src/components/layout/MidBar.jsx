import styles from "./MidBar.module.scss";

import Button from "../modules/ButtonInput/Button.jsx";
import { CiSearch } from "react-icons/ci";
import React from "react";
import Input from "../modules/ButtonInput/Input.jsx";

const MidBar = () => {
  return (
    <div className={styles.main}>
      <h1>
        Find Home <span className={styles.purple}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.small}>
        Explore Best Home Service & Repair near you
      </p>
      <div className={styles.inputSection}>
        <Input placeholder="SEARCH" />
        <Button rounded type="submit">
          <div>
            <CiSearch fontSize={20} />
          </div>
        </Button>
      </div>
    </div>
  );
};
export default MidBar;
