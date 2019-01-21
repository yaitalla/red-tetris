import React from 'react';
import { Group, Rect } from 'react-konva';
import constants from '../../constants';
const { block } = constants;


const SnakeR = ({xs, ys, color}) => 
	<Group>
            <Rect width={block} height={block}
				x={xs+30} y={ys} fill={color} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs+60} y={ys} fill={color} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs} y={ys+30} fill={color} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={xs+30} y={ys+30} fill={color} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Group>

export default SnakeR