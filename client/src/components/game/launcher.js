import React from 'react';
import { Rect, Group } from 'react-konva';
import { connect } from 'react-redux';

import { startGame } from '../../actions/index.js';
import {block} from '../../constants';


const Launcher = ({ grid }) => {
	const renderBlocks = [];
	console.log(grid)
	grid.forEach((val, i) => {
		val.forEach((unit, j) => {
			if (unit !== 'empty') {
				const key = JSON.stringify({ x: i, y: j });
				renderBlocks.push(<Rect key={key} width={block} height={block} x={i * 30} y={j * 30} fill={unit} stroke="black" strokeWidth={8} />);
			}
		});
	});
	return <Group>{ renderBlocks }</Group>;
}

const mapStateToProps = (state) => ({
	grid: state.start,
});

export default connect(mapStateToProps)(Launcher);
