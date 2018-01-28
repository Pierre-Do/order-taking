import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button } from 'reactstrap';

import { validate } from '../../actions/form';

import FormField from './FormField';

const mapDispatchToProps = (dispatch, { name }) => ({
  handleSubmit: e => {
    e.preventDefault();
    dispatch(validate({ formName: name }));
  },
});

const TestForm = ({ handleSubmit, name }) => (
  <React.Fragment>
    <h3>Third Selection</h3>
    <Form noValidate onSubmit={handleSubmit}>
      <FormField formName={name} formField="third" />
      <FormField formName={name} formField="name" />
      <Button color="primary">Select</Button>
    </Form>
    <h3>Product Selection</h3>
    <Form noValidate onSubmit={handleSubmit}>
      <FormField formName={name} formField="third" />
      <FormField formName={name} formField="name" />
      <Button color="primary">Select</Button>
    </Form>
    <Button color="green">Send Order</Button>
  </React.Fragment>
);

TestForm.propTypes = {
  name: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(TestForm);
