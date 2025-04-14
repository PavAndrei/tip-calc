import { useContext } from "react";
import { TipOutput } from "../TipOutput/TipOutput";
import styles from "./styles.module.css";
import { TipContext } from "../../context/TipContext";

export const Tips = () => {
  const { tip } = useContext(TipContext);

  return (
    <div className={styles.tips}>
      <div className={styles.data}>
        {/* <TipOutput />
        <TipOutput /> */}
        {tip.map((item) => (
          <TipOutput
            key={item.name}
            description={item.description}
            value={item.value}
          />
        ))}
      </div>
      <button className={styles.reset}>Reset</button>
    </div>
  );
};
