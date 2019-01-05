import React from 'react';
import { Layer, Stage, Rect } from 'react-konva';
const { gridHeight, gridWidth, block } = constants;
import constants from '../../constants';


const L = ({xs, ys}) => 
	<Layer>
            <Rect width={block} height={block}
				x={xs} y={ys} fill={'#6de879'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs} y={ys+30} fill={'#6de879'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs} y={ys+60} fill={'#6de879'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={xs+30} y={ys+60} fill={'#6de879'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>

export default L;