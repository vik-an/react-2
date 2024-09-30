import styles from "./MidBar.module.scss";

import Button from "../modules/ButtonInput/Button.jsx";
import { CiSearch } from "react-icons/ci";
import React from "react";
import Input from "../modules/ButtonInput/Input.jsx";

//import { ROUTES } from "../../../Routes/consts.js";
//import { useNavigate } from "react-router-dom";

const MidBar = () => {
  //const navigate = useNavigate();

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
        <Button rounded>
          <div>
            <CiSearch fontSize={20} />
          </div>
        </Button>
      </div>
    </div>
  );
};
export default MidBar;
