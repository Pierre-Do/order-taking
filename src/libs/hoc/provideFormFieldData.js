import { connect } from 'react-redux';
import { updateValue } from '../../actions/form';

const provideFormFieldData = ({ formName, formField }) => Component => {
  const mapDispatchToProps = dispatch => ({
    handleChange: e =>
      dispatch(
        updateValue({
          formName,
          formField,
          value: e.target.value,
        })
      ),
  });

  const mapStateToProps = ({ forms }) => ({
    field: forms[formName] && forms[formName][formField],
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
};

export default provideFormFieldData;
