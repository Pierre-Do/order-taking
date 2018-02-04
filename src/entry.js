import React from 'react';
import { render } from 'react-dom';

import store from './libs/store/currentStore';
import App from './App';
import provideStore from './libs/hoc/provideStore';
import { loadData } from './actions/form';
import newOrder from './formDefinitions/newOrder';
import newThird from './formDefinitions/newThird';

const AppWithStore = provideStore(store)(App);

store.dispatch(loadData(newOrder));
store.dispatch(loadData(newThird));

render(React.createElement(AppWithStore), document.getElementById('root'));
