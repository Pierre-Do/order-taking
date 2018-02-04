import React from 'react';
import { render } from 'react-dom';
import compose from 'lodash/fp/compose';

import store from './libs/store/currentStore';
import App from './App';
import provideStore from './libs/hoc/provideStore';
import { loadData } from './actions/form';
import newOrder from './formDefinitions/newOrder';
import newThird from './formDefinitions/newThird';
import provideIntl from './libs/hoc/provideIntl';
import provideTranslations from './libs/hoc/provideTranslations';

const applyHOC = compose(
  provideStore(store),
  provideIntl,
  provideTranslations({}),
);

const AppWithProviders = applyHOC(App);

store.dispatch(loadData(newOrder));
store.dispatch(loadData(newThird));

render(React.createElement(AppWithProviders), document.getElementById('root'));
