export const isDisabled = (data) => {
  !Object.values(data).some((field) => field.value && field.value !== "0");
};

// !Object.values(formData).some(
//   (field) => field.value && field.value !== "0"
// );
