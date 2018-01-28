import React from 'react';
import { render } from 'react-dom';

import store from './libs/store/currentStore';
import App from './App';
import provideStore from './libs/hoc/provideStore';
import { create } from './actions/form';

const AppWithStore = provideStore(store)(App);

store.dispatch(
  create({
    formName: 'newOrder',
    formField: 'third',
    label: 'Third',
    required: true,
    fieldType: 'text',
    placeholder: 'Enter the third Id',
  })
);

store.dispatch(
  create({
    formName: 'newOrder',
    formField: 'name',
    label: 'Name',
    fieldType: 'text',
  })
);

render(React.createElement(AppWithStore), document.getElementById('root'));
