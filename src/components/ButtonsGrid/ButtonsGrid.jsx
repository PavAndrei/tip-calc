import { useContext } from "react";
import { TipContext } from "../../context/TipContext";

import { TIP_SIZE_BUTTONS } from "../../constants/constants";

import { Button } from "../Button/Button";

import styles from "./styles.module.css";

export const ButtonsGrid = ({ label, name, value }) => {
  const { handleChange } = useContext(TipContext);

  const isNotIncluded = !TIP_SIZE_BUTTONS.includes(+value);

  return (
    <div className={styles.tip}>
      <p className={styles.label}>{label}</p>
      <div className={styles.grid}>
        {TIP_SIZE_BUTTONS.map((btn) => (
          <Button key={btn} btn={btn} />
        ))}

        <input
          className={styles.input}
          name={name}
          type="text"
          placeholder="Custom"
          autoComplete="off"
          value={isNotIncluded ? value : ""}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};
