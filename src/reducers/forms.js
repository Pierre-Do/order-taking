import { LOAD_DATA, UPDATE_VALUE, VALIDATE } from '../actions/formConstants';

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

const forms = (data = {}, action = {}) => {
  const { type, formFieldData } = action;
  if (!formFieldData) {
    return data;
  }

  const formName = Object.keys(formFieldData)[0];
  const formFields = formFieldData[formName];

  switch (type) {
    case LOAD_DATA:
      return Object.assign({}, data, {
        [formName]: Object.assign({}, data[formName], formFields),
      });
    case UPDATE_VALUE:
      return Object.assign({}, data, {
        [formFieldData.formName]: Object.assign(
          {},
          data[formFieldData.formName],
          {
            [formFieldData.formField]: Object.assign(
              {},
              data[formFieldData.formName][formFieldData.formField],
              {
                value: formFieldData.value,
              }
            ),
          }
        ),
      });
    case VALIDATE:
      return Object.assign({}, data, {
        [formFieldData.formName]: getValidatedFormData(data)(formFieldData),
      });
    default:
      return data;
  }
};

export default forms;
