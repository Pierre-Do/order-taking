/* global describe */
import React from 'react';
import { mount } from 'enzyme';

import provideStore from './libs/hoc/provideStore';
import store from './libs/store/currentStore';

import App from './App';
const AppWithStore = provideStore(store)(App);

describe('App', () => {
  it('should render without errors', () => {
    expect(() => {
      mount(<AppWithStore />);
    }).not.toThrow();
  });
});
