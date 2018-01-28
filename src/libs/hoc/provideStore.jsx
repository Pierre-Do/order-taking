import React from 'react';
import { Provider } from 'react-redux';

const provideStore = store => Component => {
  const wrapper = props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );

  wrapper.displayName = 'provideStore';

  return wrapper;
};

export default provideStore;
