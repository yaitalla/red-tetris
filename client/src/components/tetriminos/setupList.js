
import React from 'react';
import { Rect, Group } from 'react-konva';
import constants from '../../constants.js';

const { block } = constants;

const List = ({ grid }) => {
	const arr = [];
	grid.forEach((val, i) => {
		val.forEach((blocks, j) => {
			if (blocks !== 'grey') {
				const key = JSON.stringify({ x: i, y: j });
				arr.push(<Rect key={key} width={block} height={block} x={i * 30} y={j * 30} fill={blocks} stroke="black" strokeWidth={8} />);
			}
		});
	});
	return <Group>{ arr }</Group>;
};

const mapStateToProps = (state) => ({
    grid: state.setupList
});

export default connect(mapStateToProps)(List);

