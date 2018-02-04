import React from 'react';

import DefaultTemplate from './components/templates/DefaultTemplate';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageAsync from './components/PageAsync/PageAsync';

const App = () => {
  return (
    <Router>
      <DefaultTemplate>
        <Route
          exact
          path="/"
          component={() => <PageAsync page="OrderCreation" />}
        />
        <Route
          exact
          path="/new-third"
          component={() => <PageAsync page="ThirdCreation" />}
        />
      </DefaultTemplate>
    </Router>
  );
};

export default App;
