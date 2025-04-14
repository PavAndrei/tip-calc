import styles from "./styles.module.css";

export const Calculator = ({ children }) => {
  return <div className={styles.calculator}>{children}</div>;
};
