export const tipSizeButtons = [5, 10, 15, 25, 50];

export const formDataInitialState = {
  bill: {
    label: "Bill",
    value: "",
    type: "number",
    min: "0",
    placeholder: "0",
    tabindex: 1,
  },
  tip: { label: "Select Tip %", value: "15", type: "number", min: "0" },
  visitors: {
    label: "Number of People",
    value: "",
    type: "number",
    min: "1",
    placeholder: "0",
    tabindex: 7,
  },
};

export const tipInitialState = [
  { name: "tip", description: "Tip Amount", value: 0 },
  { name: "total", description: "Total", value: 0 },
];
