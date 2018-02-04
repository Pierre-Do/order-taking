import React from 'react';
import PropTypes from 'prop-types';

import { Form, Message, Segment } from 'semantic-ui-react';

const HeaderAndMessage = ({ hasError, title, children, handleSubmit }) => {
  return (
    <Segment>
      <h3>{title}</h3>
      {hasError ? (
        <Message header="Please fix the error below" content="Errors" error />
      ) : null}
      <Form noValidate onSubmit={handleSubmit} error={hasError}>
        {children}
      </Form>
    </Segment>
  );
};

HeaderAndMessage.propTypes = {
  hasError: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  handleSubmit: PropTypes.func,
};

export default HeaderAndMessage;
