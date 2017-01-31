import { connect } from 'react-redux';
import Message from '../components/Message';

const mapStateToProps = state => ({
  count: state.calc.get('count'),
});

export default connect(mapStateToProps)(Message);
