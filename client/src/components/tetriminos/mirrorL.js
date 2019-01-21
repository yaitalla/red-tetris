import React from 'react';
import { Rect, Group } from 'react-konva';
import constants from '../../constants';

const { block } = constants;

const MirrorL = ({xs, ys, color}) => 
	<Group>
            <Rect width={block} height={block}
				x={xs+30} y={ys} fill={color} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs+30} y={ys+30} fill={color} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs} y={ys+60} fill={color} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={xs+30} y={ys+60} fill={color} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Group>
export default MirrorL;