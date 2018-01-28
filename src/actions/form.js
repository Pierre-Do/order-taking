import { UPDATE_VALUE, VALIDATE, CREATE } from './formConstants';

export const updateValue = formFieldData => ({
  type: UPDATE_VALUE,
  formFieldData,
});

export const validate = formFieldData => ({
  type: VALIDATE,
  formFieldData,
});

export const create = formFieldData => ({
  type: CREATE,
  formFieldData,
});
