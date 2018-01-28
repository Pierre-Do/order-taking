import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';

import { validate } from '../../actions/form';

import FormField from './FormField';
import ThirdList from '../ThirdList/ThirdList';

const mapDispatchToProps = (dispatch, { name }) => ({
  handleSubmit: e => {
    e.preventDefault();
    dispatch(validate({ formName: name }));
  },
});

const mapStateToProps = (state, { name }) => ({
  hasError: Object.keys(state.forms[name]).some(
    key => state.forms[name][key].errorMessage
  ),
});

const TestForm = ({ handleSubmit, name, hasError }) => (
  <React.Fragment>
    <h3>Third Selection</h3>
    {hasError ? (
      <Message header="Please fix the error below" content="Errors" error />
    ) : null}
    <Form noValidate onSubmit={handleSubmit} error={hasError}>
      <FormField formName={name} formField="third" />
      <FormField formName={name} formField="name" />
      <Button content="Search" icon="right search" labelPosition="right">
      </Button>
    </Form>
    <ThirdList />
  </React.Fragment>
);

TestForm.propTypes = {
  name: PropTypes.string,
  handleSubmit: PropTypes.func,
  hasError: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestForm);
