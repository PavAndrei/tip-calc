import styles from "./styles.module.css";

export const TipOutput = ({ description, value }) => {
  return (
    <div className={styles.group}>
      <div className={styles.info}>
        <p className={styles.text}>{description}</p>
        <p className={styles.subtext}>/ person</p>
      </div>
      <div className={styles.tip}>${value}</div>
    </div>
  );
};
