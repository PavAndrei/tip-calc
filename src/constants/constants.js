export const TIP_SIZE_BUTTONS = [5, 10, 15, 25, 50];

export const FORM_DATA_INITIAL_STATE = {
  bill: {
    name: "bill",
    label: "Bill",
    value: "",
    tabindex: 1,
  },
  tip: {
    name: "tip",
    label: "Select Tip %",
    value: "",
  },
  visitors: {
    name: "customers",
    label: "Number of People",
    value: "",
    tabindex: 7,
  },
};

export const TIP_INITIAL_STATE = [
  { name: "tip", description: "Tip Amount", value: 0 },
  { name: "total", description: "Total", value: 0 },
];

export const ERRORS_INITIAL_STATE = {
  bill: "",
  visitors: "",
  tip: "",
};
