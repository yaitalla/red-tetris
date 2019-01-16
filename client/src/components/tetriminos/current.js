import Tetrimino from './base';
import { connect } from 'react-redux';
import {first} from '../../actions';

const mapStateToProps = (state) => ({
    X: state.current.X,
    Y: state.current.Y,
    color: state.current.color,
});
const mapDispatchToProps = (dispatch) => ({
    shape: dispatch(first.randTetris1)
  })
  
const FallingPiece = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tetrimino);

export default FallingPiece;

