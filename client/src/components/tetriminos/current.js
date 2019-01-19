import Tetrimino from './base';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import first from '../../actions/first';

const mapStateToProps = (state) => ({
    shape: state.current.shape,
    X: state.current.X,
    Y: state.current.Y,
    color: state.current.color,
});

const mapDispatchToProps = (dispatch) => {
    return {
        shape: dispatch(first())
    }
}
  
const FallingPiece = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tetrimino);

export default FallingPiece;

