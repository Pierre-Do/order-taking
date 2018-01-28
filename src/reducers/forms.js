import { CREATE, UPDATE_VALUE, VALIDATE } from '../actions/formConstants';

const isValid = field => !field.required || field.value.length > 0;

const validate = data => ({ formName }) => {
  return Object.keys(data[formName]).reduce((obj, name) => {
    const formField = data[formName][name];
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

  const { formName, formField, value } = formFieldData;

  switch (type) {
    case CREATE:
      return Object.assign({}, data, {
        [formName]: Object.assign({}, data[formName], {
          [formField]: Object.assign({}, formFieldData, {
            value: '',
          }),
        }),
      });
    case UPDATE_VALUE:
      return Object.assign({}, data, {
        [formName]: Object.assign({}, data[formName], {
          [formField]: Object.assign({}, data[formName][formField], {
            value,
          }),
        }),
      });
    case VALIDATE:
      return Object.assign({}, data, {
        [formName]: validate(data)(formFieldData),
      });
    default:
      return data;
  }
};

export default forms;
