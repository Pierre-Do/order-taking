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

store.dispatch(
  create({
    formName: 'newThird',
    formField: 'firstName',
    label: 'First Name',
    fieldType: 'text',
    required: true,
  })
);

store.dispatch(
  create({
    formName: 'newThird',
    formField: 'lastName',
    label: 'Last Name',
    fieldType: 'text',
    required: true,
  })
);

render(React.createElement(AppWithStore), document.getElementById('root'));
