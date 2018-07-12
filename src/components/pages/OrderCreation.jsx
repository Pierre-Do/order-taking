import React from 'react';

import { Button } from 'semantic-ui-react';

import FormField from '../Form/FormField';
import FormWithValidation from '../Form/FormWithValidationContainer';
import ThirdList from '../ThirdList/ThirdList';
import { setFocusOnTitle } from '../../libs/focus';

const FORM_NAME = 'newOrder';

class OrderCreation extends React.PureComponent {
  constructor(props) {
    super(props);
    setFocusOnTitle();
  }

  componentDidMount() {
    setFocusOnTitle();
  }

  render() {
    return (
      <React.Fragment>
        <h2 tabIndex={-1}>Create a new Order</h2>
        <FormWithValidation formName={FORM_NAME} title="Third Selection">
          <FormField formName={FORM_NAME} formField="third" />
          <FormField formName={FORM_NAME} formField="name" />
          <Button content="Search" icon="search" labelPosition="right" />
        </FormWithValidation>
        <ThirdList />
      </React.Fragment>
    );
  }
}

export default OrderCreation;
