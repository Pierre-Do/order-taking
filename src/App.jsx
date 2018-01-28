import React from 'react';

import DefaultTemplate from './components/templates/DefaultTemplate';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageAsync from './components/pages/PageAsync';

const App = () => {
  return (
    <Router>
      <DefaultTemplate>
        <Route
          exact
          path="/"
          component={() => <PageAsync pageName="orderCreation" />}
        />
        <Route
          exact
          path="/new-third"
          component={() => <PageAsync pageName="thirdCreation" />}
        />
      </DefaultTemplate>
    </Router>
  );
};

export default App;
