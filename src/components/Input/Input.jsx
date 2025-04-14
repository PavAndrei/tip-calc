import { useContext } from "react";
import styles from "./styles.module.css";
import { TipContext } from "../../context/TipContext";

export const Input = ({ name, label, type, value, min }) => {
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
        placeholder="$"
        min={min}
      />
    </label>
  );
};
