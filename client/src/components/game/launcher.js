import React from 'react';
import { Rect, Group } from 'react-konva';
import { connect } from 'react-redux';
import {start} from '../../actions';


// Pourquoi tu declare une action dispatch dans tes props ... et tu ne l'utilise pas ?
const Launcher = ({ grid }) => {
	const renderBlocks = [];
	grid.forEach((val, i) => {
		val.forEach((unit, j) => {
			if (unit !== 'empty') {
				const key = JSON.stringify({ x: i, y: j });
				renderBlocks.push(<Rect key={key} width={30} height={30} x={i * 30} y={j * 30} fill={unit} stroke="black" strokeWidth={8} />);
			}
		});
	});
	return <Group>{ renderBlocks }</Group>;
}
// destructure ;)
/*
const mapStateToProps = ({ start }) => ({
  grid: start,
  loading: start.loading,
  error: start.error
  ....
});
*/
const mapStateToProps = (state) => ({
	grid: state.start,
});
const mapDispatchToProps = (dispatch) => ({
// si tu utilises bindActionsCreator tu peux juste mettre le nom de l'action et elle aura le dispatch automatiquement
    shape: dispatch(start)
  })
/*
ex:
const mapDispatchToProps = dispatch => bindActionCreators({
  ationName1, actionName2, ...
}, dispatch);	
*/

export default connect(mapStateToProps)(Launcher);
