import { connect } from 'react-redux';
import Button from '../components/Button';
import { actionIncrement } from '../actions/CounterAction';

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(actionIncrement()); },
  actionLabel: '+',
});

export default connect(null, mapDispatchToProps)(Button);
