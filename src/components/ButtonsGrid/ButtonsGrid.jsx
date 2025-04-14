import { useContext } from "react";
import styles from "./styles.module.css";
import { TipContext } from "../../context/TipContext";
import { tipSizeButtons } from "../../constants";

export const ButtonsGrid = ({ label, name, type, value }) => {
  const { handleChange, handleTipSelect } = useContext(TipContext);

  const isNotIncluded = !tipSizeButtons.includes(+value);

  return (
    <div>
      <label className={styles.tip}>
        <p className={styles.label}>{label}</p>
        <div className={styles.grid}>
          {tipSizeButtons.map((btn) => (
            <button
              className={styles.item}
              type="button"
              onClick={() => handleTipSelect(btn)}
              key={btn}
            >
              {btn}
            </button>
          ))}

          <input
            className={styles.input}
            name={name}
            type={type}
            placeholder="Custom"
            value={isNotIncluded ? value : "CUSTOM"}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </label>
    </div>
  );
};
