export const tipSizeButtons = [5, 10, 15, 25, 50];

export const formDataInitialState = {
  bill: {
    name: "bill",
    label: "Bill",
    value: "0",
    min: "0",
    tabindex: 1,
  },
  tip: {
    name: "tip",
    label: "Select Tip %",
    value: "",
    min: "0",
  },
  visitors: {
    name: "customers",
    label: "Number of People",
    value: "0",
    min: "1",
    tabindex: 7,
  },
};

export const tipInitialState = [
  { name: "tip", description: "Tip Amount", value: 0 },
  { name: "total", description: "Total", value: 0 },
];
