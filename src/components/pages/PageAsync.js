import React from 'react';
import PropTypes from 'prop-types';

const importPage = pageName => {
  switch (pageName) {
    case 'orderCreation':
      return import(/* webpackChunkName: orderCreation */ './OrderCreation');
    case 'thirdCreation':
      return import(/* webpackChunkName: thirdCreation */ './ThirdCreation');
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
    importPage(this.props.pageName)
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
  pageName: PropTypes.string,
};

export default PageAsync;
