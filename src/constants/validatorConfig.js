export const validatorConfig = {
  bill: {
    isRequired: { message: "Bill is required" },
    mustBeANumber: { message: "Bill must be a number" },
    notBeZero: { message: "Bill cannot be zero" },
    notEndWithDots: { message: "Bill cannot end with a dot" },
    tooManyDecimals: { message: "Bill has no more 2 decimals" },
  },
  tip: {
    isRequired: { message: "Tip is required" },
    mustBeANumber: { message: "Tip must be a number" },
    notBeZero: { message: "Tip cannot be zero" },
    notEndWithDots: { message: "Tip cannot end with a dot" },
    tooManyDecimals: { message: "Tip has no more 2 decimals" },
  },
  customers: {
    isRequired: { message: "Customers is required" },
    mustBeANumber: { message: "Customers must be a number" },
    notBeZero: { message: "Customers cannot be zero" },
    notEndWithDots: { message: "Customers cannot end with a dot" },
    tooManyDecimals: { message: "Customers has no more 2 decimals" },
  },
};
