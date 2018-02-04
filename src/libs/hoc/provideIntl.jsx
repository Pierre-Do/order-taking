import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

const mapStateToProps = ({ intl }) => {
  const { locale } = intl || { locale: 'en' };
  return {
    locale,
    key: locale,
  };
};

// Container as wrapper for IntlProvider for Redux
// map l10n data object to props for IntlProvider
const IntlContainer = connect(mapStateToProps)(IntlProvider);

const provideIntl = Component => {
  const intlProvider = props => (
    <IntlContainer>
      <Component {...props} />
    </IntlContainer>
  );

  return intlProvider;
};

export default provideIntl;
