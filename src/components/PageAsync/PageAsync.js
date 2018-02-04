import React from 'react';
import PropTypes from 'prop-types';

import LoaderPlaceholder from './LoaderPlaceholder';

const ASYNC_PAGE_CACHE = '__ASYNC_PAGE_CACHE__';

const importPage = pageName => {
  switch (pageName) {
    case 'OrderCreation':
      return import(/* webpackChunkName: 'OrderCreation' */ '../pages/OrderCreation');
    case 'ThirdCreation':
      return import(/* webpackChunkName: 'ThirdCreation' */ '../pages/ThirdCreation');
    default:
      throw new Error(`${pageName} not found`);
  }
};

const addPageToCache = (page, module) => {
  const cache = window[ASYNC_PAGE_CACHE] || {};
  cache[page] = module;
  window[ASYNC_PAGE_CACHE] = cache;
};

const getPageFromCache = page => {
  return (window[ASYNC_PAGE_CACHE] && window[ASYNC_PAGE_CACHE][page]) || null;
};

class PageAsync extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      module: getPageFromCache(props.page),
    };
  }

  componentDidMount() {
    if (this.state.module) {
      return;
    }

    const { page } = this.props;

    // Supports isomorphic and test builds.
    importPage(page)
      .then(page => page.default)
      .then(module => {
        addPageToCache(page, module);
        this.setState({
          module,
        });
      });
  }

  render() {
    const { module } = this.state;
    if (!module) {
      return React.createElement(LoaderPlaceholder);
    }

    return React.createElement(module, this.props);
  }
}

PageAsync.propTypes = {
  page: PropTypes.string,
};

export default PageAsync;
