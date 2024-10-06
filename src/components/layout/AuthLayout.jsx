import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import styles from "./Layout.module.scss";

const AuthLayout = () => {
  return (
    <>
      <TopBar />
      <div className={styles.authContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
