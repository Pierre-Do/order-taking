import React from 'react';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';

import provideFormData from '../../libs/hoc/provideFormFieldData';

const FormFieldContainer = props => {
  return React.createElement(provideFormData(props)(FormField), props);
};

const FormField = ({ field, handleChange, formName, formField }) => {
  if (!field) {
    return null;
  }

  const {
    label,
    value,
    required,
    fieldType,
    errorMessage,
    placeholder,
  } = field;
  const id = `${formName}-${formField}`;

  // We only want controlled React field.
  const controlledInputValue = typeof value !== 'undefined' ? value : '';

  const validProps = errorMessage ? { error: true } : {};

  return (
    <Form.Group>
      <Form.Input
        id={id}
        value={controlledInputValue}
        required={required}
        aria-required={!!required}
        aria-invalid={!!errorMessage}
        onChange={handleChange}
        type={fieldType}
        placeholder={placeholder}
        label={label}
        {...validProps}
      />
      {errorMessage ? <Message error content={errorMessage} /> : null}
    </Form.Group>
  );
};

FormField.propTypes = {
  field: PropTypes.object,
  handleChange: PropTypes.func,
  formName: PropTypes.string,
  formField: PropTypes.string,
};

export default FormFieldContainer;
