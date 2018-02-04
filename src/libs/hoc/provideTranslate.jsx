import React from 'react';
import mapValues from 'lodash/mapValues';
import isFunction from 'lodash/isFunction';
import omit from 'lodash/omit';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

const getTranslationKey = (translationKey, p11nCount, intl) => {
  if (p11nCount === undefined || p11nCount === null) {
    return translationKey;
  }
  // hardcoded for zero for our needs
  const plural = p11nCount === 0 ? 'zero' : intl.formatPlural(p11nCount);
  return `${translationKey}.${plural}`;
};

const translate = (
  mapTranslationsToProps = () => ({}),
  mapP11nCountToProps = () => ({})
) => Component => {
  const TranslateWrapper = (props, context) => {
    const { intl } = props;
    const originalProps = omit(props, 'intl');
    const p11nCountToProps = mapP11nCountToProps(props) || {};

    const mapTranslations = (translationKey, propsKey) => {
      const p11nCount = p11nCountToProps[propsKey];
      const key = getTranslationKey(translationKey, p11nCount, intl);
      return context.translate(key) || key;
    };

    const translationsToProps = isFunction(mapTranslationsToProps)
      ? // if it is a function we call it with props
        mapTranslationsToProps(props)
      : // else we hope that it is already an object (legacy implementation)
        mapTranslationsToProps;

    const translations = mapValues(translationsToProps, mapTranslations);

    return <Component {...originalProps} {...translations} />;
  };

  TranslateWrapper.contextTypes = {
    translate: PropTypes.func.isRequired,
  };

  TranslateWrapper.propTypes = {
    intl: PropTypes.object,
  };

  return injectIntl(TranslateWrapper);
};

export default translate;
