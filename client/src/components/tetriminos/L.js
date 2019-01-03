import React from 'react';
import { Layer, Stage, Rect } from 'react-konva';
const { gridHeight, gridWidth, block } = constants;
import constants from '../../constants';


const L = () => 
	<Layer>
            <Rect width={block} height={block}
				x={150} y={50} fill={'red'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={150} y={80} fill={'red'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={150} y={110} fill={'red'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={180} y={110} fill={'red'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>

export default L;