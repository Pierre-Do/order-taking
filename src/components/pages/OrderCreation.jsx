import React from 'react';

import NewOrderForm from '../Form/NewOrderForm';
import ThirdList from '../ThirdList/ThirdList';

const OrderCreation = () => {
  return (
    <React.Fragment>
      <h2>Create a new Order</h2>
      <NewOrderForm formName="newOrder" />
      <ThirdList />
    </React.Fragment>
  );
};

export default OrderCreation;
