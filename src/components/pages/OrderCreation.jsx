import React from 'react';

import { Button } from 'semantic-ui-react';

import FormField from '../Form/FormField';
import FormWithValidation from '../Form/FormWithValidationContainer';
import ThirdList from '../ThirdList/ThirdList';

const FORM_NAME = 'newOrder';

const OrderCreation = () => {
  return (
    <React.Fragment>
      <h2>Create a new Order</h2>
      <FormWithValidation formName={FORM_NAME} title="Third Selection">
        <FormField formName={FORM_NAME} formField="third" />
        <FormField formName={FORM_NAME} formField="name" />
        <Button content="Search" icon="search" labelPosition="right" />
      </FormWithValidation>
      <ThirdList />
    </React.Fragment>
  );
};

export default OrderCreation;
