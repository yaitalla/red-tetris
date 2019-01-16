import Tetrimino from './base';
import { connect } from 'react-redux';
import actions from '../../actions';

const mapStateToProps = (state) => ({
    X: state.current.X,
    Y: state.current.Y,
    color: state.current.color,
});
const mapDispatchToProps = (dispatch) => ({
    shape: dispatch(actions.first)
  })
  
const FallingPiece = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tetrimino);

export default FallingPiece;

