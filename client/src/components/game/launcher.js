import React from 'react';
import { Rect, Group } from 'react-konva';
import { connect } from 'react-redux';
import {start} from '../../actions';



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

const mapStateToProps = (state) => ({
	grid: state.start,
});
const mapDispatchToProps = (dispatch) => ({
    shape: dispatch(start)
  })
  

export default connect(mapStateToProps)(Launcher);
