import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Container } from 'semantic-ui-react';

import './DefaultTemplate.scss';
import provideKeyboardShortcut from "../../libs/hoc/provideKeyboardShortcut";

const DefaultTemplate = props => {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <div style={{ marginTop: '60px' }} />
        <Container className="container">{props.children}</Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

DefaultTemplate.propTypes = {
  children: PropTypes.any,
};

export default provideKeyboardShortcut(DefaultTemplate);
