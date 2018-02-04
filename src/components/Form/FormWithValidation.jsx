import React from 'react';
import PropTypes from 'prop-types';

import { Form, Message, Segment } from 'semantic-ui-react';
import { setFocusOnFirstError } from '../../libs/focus';

class FormWithValidation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.hasError) {
      setFocusOnFirstError();
    }
  }

  render() {
    const {
      hasError,
      title,
      children,
      handleSubmit,
      headerErrorMessage,
    } = this.props;
    return (
      <Segment>
        <h3>{title}</h3>
        {hasError ? (
          <Message header={headerErrorMessage} content="Errors" error />
        ) : null}
        <Form noValidate onSubmit={handleSubmit} error={hasError}>
          {children}
        </Form>
      </Segment>
    );
  }
}

FormWithValidation.propTypes = {
  hasError: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  handleSubmit: PropTypes.func,
  headerErrorMessage: PropTypes.string,
};

export default FormWithValidation;
