import { useContext } from "react";
import styles from "./styles.module.css";
import { TipContext } from "../../context/TipContext";
import { tipSizeButtons } from "../../constants";

export const ButtonsGrid = ({ label, name, type, value }) => {
  const { handleChange, handleTipSelect } = useContext(TipContext);

  return (
    <div>
      <p>{label}</p>
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
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};
