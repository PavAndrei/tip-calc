import { createContext, useEffect, useState } from "react";
import { formDataInitialState, tipInitialState } from "../constants/constants";

import { validate } from "../utils/validate";

export const TipContext = createContext();

export const TipProvider = ({ children }) => {
  const [formData, setFormData] = useState(formDataInitialState);
  const [tip, setTip] = useState(tipInitialState);
  const [errors, setErrors] = useState({
    bill: "",
    visitors: "",
    tip: "",
  });

  const isResetDisabled = Object.keys(formData).every(
    (key) => formData[key].value === "" || formData[key].value === "0"
  );

  const handleChange = (e) => {
    const { value, name } = e.target;

    validator(name, value);

    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setFormData((prev) => ({
        ...prev,
        [name]: { ...prev[name], value: e.target.value },
      }));
    }
  };

  const handleTipSelect = (num) => {
    setFormData((prev) => {
      return {
        ...prev,
        tip: { ...prev.tip, value: num },
      };
    });
  };

  const calculateTotal = () => {
    const bill = parseFloat(formData.bill.value);
    const visitors = parseInt(formData.visitors.value);

    if (isNaN(bill) || isNaN(visitors) || visitors <= 0 || bill < 0) {
      return 0;
    }

    const tip = +formData.tip.value;

    const tipAmount = Math.ceil(((bill / 100) * tip) / visitors);
    const totalAmount = Math.ceil(bill / visitors + tipAmount);

    setTip([
      { name: "tip", description: "Tip Amount", value: tipAmount },
      { name: "total", description: "Total", value: totalAmount },
    ]);
  };

  const reset = () => {
    setFormData(formDataInitialState);
    setTip(tipInitialState);
  };

  const validator = (name, value) => {
    const error = validate(name, value);

    setErrors((prev) => {
      return {
        ...prev,
        [name]: error,
      };
    });
  };

  useEffect(() => {
    calculateTotal();
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
