import { createContext, useEffect, useState } from "react";

export const TipContext = createContext();

export const TipProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    bill: { label: "Bill", value: "", type: "number", min: "0" },
    tip: { label: "Select Tip %", value: "15", type: "number", min: "0" },
    visitors: {
      label: "Number of People",
      value: "0",
      type: "number",
      min: "1",
    },
  });

  const [tip, setTip] = useState([
    { name: "tip", description: "Tip Amount", value: 0 },
    { name: "total", description: "Total", value: 0 },
  ]);

  const handleChange = (e) => {
    const { value, name } = e.target;

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

  useEffect(() => {
    calculateTotal();
  }, [formData]);

  return (
    <TipContext.Provider
      value={{ formData, handleChange, tip, handleTipSelect }}
    >
      {children}
    </TipContext.Provider>
  );
};
