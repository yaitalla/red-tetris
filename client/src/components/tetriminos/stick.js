import React from 'react';
import { Layer, Stage, Rect } from 'react-konva';
import constants from '../../constants';
const { block } = constants;


const Stick = ({xs, ys}) => 
	<Layer>
            <Rect width={block} height={block}
				x={xs} y={ys+60} fill={'yellow'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs} y={ys+30} fill={'yellow'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs} y={ys+90} fill={'yellow'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={xs} y={ys} fill={'yellow'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>

export default Stick;