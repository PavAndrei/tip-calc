import { createContext, useEffect, useState } from "react";
import {
  ERRORS_INITIAL_STATE,
  FORM_DATA_INITIAL_STATE,
  TIP_INITIAL_STATE,
} from "../constants/constants";

import { validate } from "../utils/validate";
import { calculateTotal } from "../utils/calculateTotal";
import { isDisabled } from "../utils/isDisabled";

export const TipContext = createContext();

export const TipProvider = ({ children }) => {
  const [formData, setFormData] = useState(FORM_DATA_INITIAL_STATE);
  const [tip, setTip] = useState(TIP_INITIAL_STATE);
  const [errors, setErrors] = useState(ERRORS_INITIAL_STATE);

  const isResetDisabled = isDisabled(formData);

  const handleChange = ({ target: { name, value } }) => {
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      validator(name, value);
      setFormData((prev) => ({
        ...prev,
        [name]: { ...prev[name], value },
      }));
    }
  };

  const handleTipSelect = (num) =>
    setFormData((prev) => ({
      ...prev,
      tip: { ...prev.tip, value: num },
    }));

  const reset = () => {
    setFormData(FORM_DATA_INITIAL_STATE);
    setTip(TIP_INITIAL_STATE);
    setErrors(ERRORS_INITIAL_STATE);
  };

  const validator = (name, value) => {
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  useEffect(() => {
    const [tipAmount, totalAmount] = calculateTotal(
      formData.bill.value,
      formData.visitors.value,
      +formData.tip.value
    );
    setTip([tipAmount, totalAmount]);
  }, [formData]);

  return (
    <TipContext.Provider
      value={{
        formData,
        handleChange,
        tip,
        handleTipSelect,
        reset,
        isResetDisabled,
        errors,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};
