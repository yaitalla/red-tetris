import React from 'react';
import { Rect, Group } from 'react-konva';
import { connect } from 'react-redux';



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

  

export default connect(mapStateToProps, null)(Launcher);
