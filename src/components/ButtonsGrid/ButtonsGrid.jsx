import { useContext } from "react";
import styles from "./styles.module.css";
import { TipContext } from "../../context/TipContext";
import { tipSizeButtons } from "../../constants/constants";

export const ButtonsGrid = ({ label, name, value }) => {
  const { handleChange, handleTipSelect } = useContext(TipContext);

  const isNotIncluded = !tipSizeButtons.includes(+value);

  return (
    <div className={styles.tip}>
      <p className={styles.label}>{label}</p>
      <div className={styles.grid}>
        {tipSizeButtons.map((btn) => (
          <button
            className={styles.item}
            type="button"
            onClick={() => handleTipSelect(btn)}
            key={btn}
          >
            {btn}%
          </button>
        ))}

        <input
          className={styles.input}
          name={name}
          type="text"
          placeholder="Custom"
          value={isNotIncluded ? value : ""}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};
