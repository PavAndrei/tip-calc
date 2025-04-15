import styles from "./styles.module.css";

import { Input } from "../Input/Input";
import { ButtonsGrid } from "../ButtonsGrid/ButtonsGrid";

import { useContext } from "react";
import { TipContext } from "../../context/TipContext";

export const Form = () => {
  const { formData } = useContext(TipContext);

  return (
    <form className={styles.form}>
      {Object.keys(formData).map((item) => {
        if (item !== "tip") {
          return (
            <Input
              key={item}
              name={item}
              label={formData[item].label}
              value={formData[item].value}
            />
          );
        } else {
          return (
            <ButtonsGrid
              key={item}
              name={item}
              label={formData[item].label}
              value={formData[item].value}
            />
          );
        }
      })}
    </form>
  );
};
