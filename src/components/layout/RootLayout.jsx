import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import styles from "./Layout.module.scss";

const RootLayout = () => {
  return (
    <>
      <TopBar />
      <div className={styles.rootContainer}>
        <Outlet />
      </div>
    </>
  );
};
export default RootLayout;
