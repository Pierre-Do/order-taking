import React from 'react';
import { HotKeys } from 'react-hotkeys';
import { withRouter } from 'react-router-dom';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';

import { NEW_ORDER, NEW_THIRD } from '../../routes';

const keyMap = {
  newOrder: 'alt+o',
  newThird: 'alt+t',
};

const provideKeyboardShortcut = Component => {
  const KeyboardShortcutProvider = props => {
    const handlers = {
      newOrder: () => props.history.push(NEW_ORDER),
      newThird: () => props.history.push(NEW_THIRD),
    };

    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <Component {...omit(props, 'history')} />
      </HotKeys>
    );
  };

  KeyboardShortcutProvider.propTypes = {
    history: PropTypes.object,
  };

  return withRouter(KeyboardShortcutProvider);
};

export default provideKeyboardShortcut;
