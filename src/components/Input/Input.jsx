import { useContext } from "react";
import { TipContext } from "../../context/TipContext";

import styles from "./styles.module.css";

export const Input = ({ name, label, type, value, min, placeholder }) => {
  const { handleChange } = useContext(TipContext);

  return (
    <label className={styles.group}>
      <span className={styles.label}>{label}</span>
      <input
        onChange={(e) => handleChange(e)}
        className={styles.input}
        name={name}
        value={value}
        type={type}
        min={min}
        placeholder={placeholder}
      />
    </label>
  );
};
