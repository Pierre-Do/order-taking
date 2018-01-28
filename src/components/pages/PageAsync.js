import React from 'react';
import PropTypes from 'prop-types';

const importPage = pageName => {
  switch (pageName) {
    case 'OrderCreation':
      return import(/* webpackChunkName: 'OrderCreation' */ './OrderCreation');
    case 'ThirdCreation':
      return import(/* webpackChunkName: 'ThirdCreation' */ './ThirdCreation');
    default:
      throw new Error(`${pageName} not found`);
  }
};

class PageAsync extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      module: null,
    };
  }

  componentDidMount() {
    // Supports isomorphic and test builds.
    importPage(this.props.page)
      .then(page => page.default)
      .then(module => {
        this.setState({
          module,
        });
      });
  }

  render() {
    const { module } = this.state;
    if (!module) {
      return null;
    }

    return React.createElement(module, this.props);
  }
}

PageAsync.propTypes = {
  page: PropTypes.string,
};

export default PageAsync;
