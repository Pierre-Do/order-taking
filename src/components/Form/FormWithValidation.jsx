import React from 'react';
import PropTypes from 'prop-types';

import provideFormData from '../../libs/hoc/provideFormData';
import HeaderAndMessage from './HeaderAndMessage';

const FormWithValidation = props => {
  return React.createElement(
    provideFormData(props.formName)(HeaderAndMessage),
    props
  );
};

FormWithValidation.propTypes = {
  formName: PropTypes.string,
};

export default FormWithValidation;
