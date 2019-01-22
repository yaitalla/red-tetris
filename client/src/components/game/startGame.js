import { connect } from 'react-redux';
import Launcher from './launcher';
import actions from '../../actions';
const launcher = actions.launcher

const mapStateToProps = (state) => ({
	grid: state.start,
});

const mapDispatchToProps = (dispatch) => {
    return  {
        data: dispatch(launcher())
    }
}

const CreateField = connect(
    mapStateToProps,
    mapDispatchToProps
)(Launcher);

export default CreateField;


