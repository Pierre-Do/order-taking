import React from 'react';

import { Button } from 'semantic-ui-react';

import FormField from '../Form/FormField';
import FormWithValidation from '../Form/FormWithValidation';

const FORM_NAME = 'newThird';

const ThirdCreation = () => {
  return (
    <React.Fragment>
      <h2>Create a new Third</h2>
      <FormWithValidation formName={FORM_NAME} title="Personal Information">
        <FormField formName={FORM_NAME} formField="firstName" />
        <FormField formName={FORM_NAME} formField="lastName" />
        <Button content="Add" icon="plus" labelPosition="right" />
      </FormWithValidation>
    </React.Fragment>
  );
};

export default ThirdCreation;
