import React from 'react';

import DefaultTemplate from './components/Templates/DefaultTemplate';

import TestForm from './components/Form/TestForm';

const App = () => {
  return (
    <DefaultTemplate>
      <h2>Order Creation</h2>
      <TestForm name="newOrder" />
    </DefaultTemplate>
  );
};

export default App;