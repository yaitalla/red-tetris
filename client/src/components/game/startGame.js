import { connect } from 'react-redux';
import Launcher from './launcher';

const mapStateToProps = (state) => ({
	grid: state.start,
});

const CreateField = connect(
    mapStateToProps
)(Launcher);

export default CreateField;


