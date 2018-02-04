import React from 'react';
import PropTypes from 'prop-types';

import provideFormData from '../../libs/hoc/provideFormData';
import provideTranslate from '../../libs/hoc/provideTranslate';
import FormWithValidation from './FormWithValidation';

const FormWithValidationContainer = props => {
  return React.createElement(
    provideFormData(props.formName)(FormWithValidation),
    props
  );
};

FormWithValidationContainer.propTypes = {
  formName: PropTypes.string,
};

const translationsToProps = {
  headerErrorMessage: 'global.error.message.header',
};

export default provideTranslate(translationsToProps)(
  FormWithValidationContainer
);
