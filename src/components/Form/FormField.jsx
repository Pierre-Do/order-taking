import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

import provideFormData from '../../libs/hoc/provideFormData';

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

  const validProps = errorMessage ? { valid: false } : {};

  return (
    <FormGroup row>
      <Label htmlFor={id} sm={2}>
        {label}
      </Label>
      <Col sm={10}>
        <Input
          id={id}
          value={value}
          required={required}
          aria-required={!!required}
          aria-invalid={!!errorMessage}
          onChange={handleChange}
          type={fieldType}
          placeholder={placeholder}
          {...validProps}
        />
        {errorMessage ? <FormFeedback>{errorMessage}</FormFeedback> : null}
      </Col>
    </FormGroup>
  );
};

FormField.propTypes = {
  field: PropTypes.object,
  handleChange: PropTypes.func,
  formName: PropTypes.string,
  formField: PropTypes.string,
};

export default FormFieldContainer;
