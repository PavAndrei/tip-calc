import styles from "./styles.module.css";

import { Logo } from "../../icons/Logo";

export const Calculator = ({ children }) => {
  return (
    <div className={styles.content}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.calculator}>{children}</div>
    </div>
  );
};
