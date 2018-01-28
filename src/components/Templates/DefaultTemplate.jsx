import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBar';
import './DefaultTemplate.scss';

const DefaultTemplate = props => {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <main className="container">{props.children}</main>
      <footer />
    </React.Fragment>
  );
};

DefaultTemplate.propTypes = {
  children: PropTypes.any,
};

export default DefaultTemplate;
