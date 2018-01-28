import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message, Segment } from 'semantic-ui-react';

import FormField from './FormField';
import provideFormData from '../../libs/hoc/provideFormData';

const NewOrderForm = ({ handleSubmit, formName, hasError }) => (
  <Segment>
    <h3>Third Selection</h3>
    {hasError ? (
      <Message header="Please fix the error below" content="Errors" error />
    ) : null}
    <Form noValidate onSubmit={handleSubmit} error={hasError}>
      <FormField formName={formName} formField="third" />
      <FormField formName={formName} formField="name" />
      <Button content="Search" icon="search" labelPosition="right" />
    </Form>
  </Segment>
);

NewOrderForm.propTypes = {
  formName: PropTypes.string,
  handleSubmit: PropTypes.func,
  hasError: PropTypes.bool,
};

const TestFormContainer = props => {
  return React.createElement(provideFormData(props)(NewOrderForm), props);
};

export default TestFormContainer;
