import Tetrimino from './base';
import { connect, bindActionCreators } from 'react-redux';
import actions from '../../actions';


const mapStateToProps = (state) => ({
    shape: state.current.shape,
    X: state.current.X,
    Y: state.current.Y,
    color: state.current.color,
});
const mapDispatchToProps = bindActionCreators(dispatch) => ({
    shape: actions.first,
    
});
  
const FallingPiece = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tetrimino);

export default FallingPiece;

