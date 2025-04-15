import { validatorConfig } from "../constants/validatorConfig";

export const validate = (name, value) => {
  let error = "";

  const numericValue = parseFloat(value);

  const endsWithDot = value.endsWith(".");
  const hasMoreThanTwoDecimals = /^\d+\.\d{3,}$/.test(value);

  if (value === "") {
    error = validatorConfig[name].isRequired.message;
  } else if (isNaN(numericValue)) {
    error = validatorConfig[name].mustBeANumber.message;
  } else if (numericValue === 0) {
    error = validatorConfig[name].notBeZero.message;
  } else if (endsWithDot) {
    error = validatorConfig[name].notEndWithDots.message;
  } else if (hasMoreThanTwoDecimals) {
    error = validatorConfig[name].tooManyDecimals.message;
  }

  return error;
};
