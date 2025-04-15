import { useContext } from "react";
import { TipContext } from "../../context/TipContext";

import styles from "./styles.module.css";

import { Dollar } from "../../icons/Dollar";
import { Person } from "../../icons/Person";

export const Input = ({ name, label, value, min }) => {
  const { handleChange, errors } = useContext(TipContext);

  return (
    <label className={styles.group}>
      <span className={styles.label}>
        {label}
        {errors[name] && <span className={styles.error}>{errors[name]}</span>}
      </span>
      <div className={styles.wrapper}>
        {name === "bill" ? (
          <span className={styles.icon}>
            <Dollar />
          </span>
        ) : (
          <span className={styles.icon}>
            <Person />
          </span>
        )}
        <input
          onChange={(e) => handleChange(e)}
          className={styles.input}
          name={name}
          value={value}
          type="text"
          min={min}
        />
      </div>
    </label>
  );
};
