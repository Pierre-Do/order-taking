import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DefaultTemplate from './components/templates/DefaultTemplate';
import PageAsync from './components/PageAsync/PageAsync';
import { NEW_ORDER, NEW_THIRD } from './routes';

import './App.scss';

const App = () => {
  return (
    <Router>
      <DefaultTemplate>
        <Route
          exact
          path={NEW_ORDER}
          component={() => <PageAsync page="OrderCreation" />}
        />
        <Route
          exact
          path={NEW_THIRD}
          component={() => <PageAsync page="ThirdCreation" />}
        />
      </DefaultTemplate>
    </Router>
  );
};

export default App;
