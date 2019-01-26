import { connect } from 'react-redux';

const mapStateToProps = ({ currentPiece }) => ({
	shape: currentPiece.shape,
	X: currentPiece.X,
    Y: currentPiece.Y,
	color: currentPiece.color,
});

const CurrentTetris = connect(
	mapStateToProps
)(Base);

export default CurrentTetris;


