import { connect } from 'react-redux';
import { validate } from '../../actions/form';

const provideFormData = ({ formName }) => Component => {
  const mapDispatchToProps = dispatch => ({
    handleSubmit: e => {
      e.preventDefault();
      dispatch(validate({ formName }));
    },
  });

  const mapStateToProps = state => ({
    hasError:
      state.forms[formName] &&
      Object.keys(state.forms[formName]).some(
        key => state.forms[formName][key].errorMessage
      ),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

export default provideFormData;
