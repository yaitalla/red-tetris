import React from 'react';
import { Layer, Stage, Rect } from 'react-konva';
import constants from '../../constants';
const { block } = constants;


const SnakeL = ({xs, ys}) => 
	<Layer>
            <Rect width={block} height={block}
				x={xs} y={ys} fill={'#ff9900'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs+30} y={ys} fill={'#ff9900'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs+30} y={ys+30} fill={'#ff9900'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={xs+60} y={ys+30} fill={'#ff9900'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>

export default SnakeL;