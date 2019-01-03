import { connect } from 'react-redux';
import Tetrimino from './base';

const mapStateToProps = ( {state} ) => ({
    shape: state.shape,
    X: state.X,
    Y: state.Y,
    color: state.color,
    name: state.name
});

export default connect(mapStateToProps)(Tetrimino);