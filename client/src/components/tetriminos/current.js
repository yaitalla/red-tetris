import Tetrimino from './base';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import first from '../../actions/first';

const mapStateToProps = (state) => ({
    shape: state.currentPiece.shape,
    X: state.currentPiece.X,
    Y: state.currentPiece.Y,
    color: state.currentPiece.color,
});

const mapDispatchToProps = () => {
    return {
        shape: (first().randTetris.shape),
        color: (first().randTetris.color),
        X: (first().randTetris.X),
        Y: first().randTetris.Y 
    }
}
  
const FallingPiece = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tetrimino);

export default FallingPiece;

