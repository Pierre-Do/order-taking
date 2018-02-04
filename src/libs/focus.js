export const setFocusOnFirstError = () => {
  const errorFields = document.querySelectorAll('*[aria-invalid="true"]');
  if (errorFields.length) {
    errorFields[0].focus();
  }
};

export const setFocusOnTitle = () => {
  const titles = document.querySelectorAll('h2');
  if (titles.length) {
    titles[0].focus();
  }
};
