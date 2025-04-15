import { useContext } from "react";
import { TipContext } from "../../context/TipContext";

import { TipOutput } from "../TipOutput/TipOutput";

import styles from "./styles.module.css";

export const Tip = () => {
  const { tip, reset, isResetDisabled } = useContext(TipContext);

  return (
    <div className={styles.tips}>
      <div className={styles.data}>
        {tip.map((item) => (
          <TipOutput
            key={item.name}
            description={item.description}
            value={item.value}
          />
        ))}
      </div>
      <button
        onClick={reset}
        disabled={isResetDisabled}
        className={styles.reset}
      >
        Reset
      </button>
    </div>
  );
};
