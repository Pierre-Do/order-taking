export const setFocusOnFirstError = () => {
  const errorFields = document.querySelectorAll('*[aria-invalid="true"]');
  if (errorFields.length) {
    errorFields[0].focus();
    console.log(errorFields[0])
  }
};
