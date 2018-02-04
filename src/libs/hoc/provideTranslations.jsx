import React from 'react';
import get from 'lodash/get';
import omit from 'lodash/omit';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const getTranslation = (translations, globalTranslations, key) => {
  const translation = get(globalTranslations, key) || get(translations, key);

  // If the key isn't found in the context, use the name of the key as
  // literal. This helps the debuging on missing keys in the backend.
  if (typeof translation === 'undefined') {
    return key;
  }

  // Because the backend organises the translations as a tree, a key doesn't
  // always points to a literal value. For instance, of the object is
  // const translations = { foo: { bar: 'goo' }} and the key is 'foo',
  // the result of the translate will be an object, not a string.
  if (typeof translation !== 'string') {
    return key;
  }

  return translation;
};

const provideTranslations = translations => Component => {
  class TranslationsProviderContainer extends React.Component {
    constructor() {
      super();
      this.translate = this.translate.bind(this);
    }

    getChildContext() {
      return {
        translate: this.translate,
      };
    }

    translate(key) {
      const { globalTranslations } = this.props;
      return getTranslation(translations, globalTranslations, key);
    }

    render() {
      const props = omit(this.props, 'globalTranslations', 'dispatch');
      return <Component {...props} />;
    }
  }

  TranslationsProviderContainer.propTypes = {
    globalTranslations: PropTypes.object,
  };

  TranslationsProviderContainer.childContextTypes = {
    translate: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({ config = {} }) => ({
    globalTranslations: config.translations,
  });

  return connect(mapStateToProps)(TranslationsProviderContainer);
};

export default provideTranslations;
