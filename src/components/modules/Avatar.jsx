import styles from "./Avatar.module.scss";

const Avatar = ({ children }) => {
  return <div className={styles.avatar}>{children}</div>;
};

export default Avatar;
