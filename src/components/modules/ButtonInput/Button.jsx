import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import classNames from "classnames";
import React from "react";

const Button = ({ className, rounded, smallScreen, logout, ...props }) => {
  return (
    <button
      className={classNames(
        styles.button,
        rounded && styles.rounded,
        smallScreen && styles.smallScreen,
        logout && styles.logout,
        className
      )}
      {...props}
    />
  );
};

Button.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Button;
