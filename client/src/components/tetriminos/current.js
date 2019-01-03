import Tetrimino from './base';
import { connect } from 'react-redux';

const mapStateToProps = ( {current} ) => ({
    shape: current.shape,
    X: current.X,
    Y: current.Y,
    color: current.color,
    name: current.name
});

export default connect(mapStateToProps)(Tetrimino);
