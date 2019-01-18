import { connect } from 'react-redux';
import Launcher from './launcher';
import actions from '../../actions';

const launch = actions.launcher;

const mapStateToProps = (state) => ({
	grid: state.start,
});

const CreateField = connect(
    mapStateToProps,
    {launch}
)(Launcher);

export default CreateField;


