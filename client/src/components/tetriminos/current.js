import Tetrimino from './base';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import first from '../../actions/first';

const mapStateToProps = (state) => ({
    data: state.currentPiece.data,
});

const mapDispatchToProps = (dispatch) => {
    return {
        data: dispatch(first())
    }
}
  
const FallingPiece = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tetrimino);

export default FallingPiece;

