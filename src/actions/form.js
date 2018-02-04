import { UPDATE_VALUE, VALIDATE, LOAD_DATA } from './formConstants';

export const updateValue = formFieldData => ({
  type: UPDATE_VALUE,
  formFieldData,
});

export const validate = formFieldData => ({
  type: VALIDATE,
  formFieldData,
});

export const loadData = formFieldData => ({
  type: LOAD_DATA,
  formFieldData,
});
