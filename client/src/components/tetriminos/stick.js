import React from 'react';
import { Layer, Stage, Rect } from 'react-konva';
import constants from '../../constants';
const { block } = constants;


const Stick = () => 
	<Layer>
            <Rect width={block} height={block}
				x={350} y={80} fill={'red'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={350} y={50} fill={'red'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={350} y={110} fill={'red'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={350} y={20} fill={'red'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>

export default Stick;