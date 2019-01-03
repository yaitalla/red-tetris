import React from 'react';
import { Layer, Stage, Rect } from 'react-konva';
import constants from '../../constants';
const { block } = constants;


const SnakeR = () => 
	<Layer>
            <Rect width={block} height={block}
				x={580} y={80} fill={'red'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={550} y={80} fill={'red'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={580} y={110} fill={'red'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={610} y={110} fill={'red'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>

export default SnakeR;