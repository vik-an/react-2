import styles from "./TopBar.module.scss";
import Button from "../modules/ButtonInput/Button.jsx";
import logo from "./logoipsum-261.svg";
import React from "react";

import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../../routes/consts.js";

const TopBar = () => {
  const navigate = useNavigate();
  const links = [
    {
      href: ROUTES.HOME,
      label: "Home",
    },
    {
      href: ROUTES.SERVICES,
      label: "Services",
    },
    {
      href: ROUTES.ABOUT_US,
      label: "About us",
    },
  ];

  return (
    <header className={styles.appHeader}>
      <div className={styles.leftSide}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="logo" className={styles.appLogo} />
        </Link>
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.label} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <Button onClick={() => navigate(ROUTES.LOGIN)} smallScreen>
        Login/Sign Up
      </Button>
    </header>
  );
};
export default TopBar;
