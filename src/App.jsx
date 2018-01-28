import React from 'react';

import DefaultTemplate from './components/templates/DefaultTemplate';
import OrderCreation from './components/pages/OrderCreation';
import ThirdCreation from './components/pages/ThirdCreation';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <DefaultTemplate>
        <Route exact path="/" component={OrderCreation} />
        <Route exact path="/new-third" component={ThirdCreation} />
      </DefaultTemplate>
    </Router>
  );
};

export default App;
