mport React from 'react';
import { startGame } from '../../actions/index.js';

class Launcher extends React.Component {
	componentDidMount() {
		this.props.dispatch(startGame());
	}
	render() {
		return (
			<div>
				<h1 className={style.pageBanner}>TETRIS</h1>
                <p>Press Space Bar to begin</p>
			</div>
		);
	}
}
Menu.propTypes = {
	isPlaying: React.PropTypes.string,
};

export default Launcher;
