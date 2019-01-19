import { connect } from 'react-redux';
import Launcher from './launcher';
import actions from '../../actions';
const launcher = actions.launcher()

const mapStateToProps = (state) => ({
	grid: state.start,
});


const CreateField = connect(
    mapStateToProps,
)(Launcher);

export default CreateField;


