import { connect } from 'react-redux';
// import MirrorL from '../tetriminos/mirrorL';
// import L from '../tetriminos/L';
// import Square from '../tetriminos/square';
// import Stick from '../tetriminos/stick';
// import SnakeR from '../tetriminos/snakeR';
// import SnakeL from '../tetriminos/snakeL';
// import Cross from '../tetriminos/cross';
import Tetrimino from './base';


const mapStateToProps = ( {state} ) => ({
    shape: state.shape,
    X: state.X,
    Y: state.Y,
    color: state.color,
    name: state.name
});

export default connect(mapStateToProps)(Tetrimino);