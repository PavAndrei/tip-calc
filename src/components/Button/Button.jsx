import { useContext } from "react";
import { TipContext } from "../../context/TipContext";

import styles from "./styles.module.css";

export const Button = ({ btn }) => {
  const { formData, handleTipSelect } = useContext(TipContext);

  return (
    <button
      className={formData.tip.value == btn ? styles.itemActive : styles.item}
      type="button"
      onClick={() => handleTipSelect(btn)}
      key={btn}
    >
      {btn}%
    </button>
  );
};
