import { UPDATE_VALUE, VALIDATE, LOAD_DATA } from '../actions/formConstants';

const isValid = field =>
  !field.required ||
  (typeof field.value !== 'undefined' && field.value.length > 0);

const getValidatedFormData = data => ({ formName }) => {
  const formDataToValidate = data[formName];

  return Object.keys(formDataToValidate).reduce((obj, name) => {
    const formField = formDataToValidate[name];
    obj[name] = Object.assign({}, formField, {
      errorMessage: !isValid(formField) ? 'Required' : null,
    });
    return obj;
  }, {});
};

const injectFormData = (data, formFieldData) => {
  const formName = Object.keys(formFieldData)[0];
  const formFields = formFieldData[formName];

  return Object.assign({}, data, {
    [formName]: Object.assign({}, data[formName], formFields),
  });
};

const forms = (data = {}, action = {}) => {
  const { type, formFieldData } = action;
  if (!formFieldData) {
    return data;
  }

  const { formName, formField, value } = formFieldData;

  switch (type) {
    case LOAD_DATA:
      return injectFormData(data, formFieldData);
    case UPDATE_VALUE:
      return Object.assign({}, data, {
        [formName]: Object.assign({}, data[formName], {
          [formField]: Object.assign({}, data[formName][formField], {
            value: value,
          }),
        }),
      });
    case VALIDATE:
      return Object.assign({}, data, {
        [formName]: getValidatedFormData(data)(formFieldData),
      });
    default:
      return data;
  }
};

export default forms;
