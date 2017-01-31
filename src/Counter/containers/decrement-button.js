import { connect } from 'react-redux';
import Button from '../components/Button';
import { actionDecrement } from '../actions/CounterAction';

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(actionDecrement()); },
  actionLabel: '-',
});

export default connect(null, mapDispatchToProps)(Button);
