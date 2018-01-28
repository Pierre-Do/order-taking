import React from 'react';

import DefaultTemplate from './components/Templates/DefaultTemplate';

import TestForm from './components/Form/TestForm';
import ThirdList from './components/ThirdList/ThirdList';

const App = () => {
  return (
    <DefaultTemplate>
      <h2>Order Creation</h2>
      <TestForm formName="newOrder" />
      <ThirdList />
    </DefaultTemplate>
  );
};

export default App;
