import React from 'react';
import { Layer, Stage, Rect } from 'react-konva';
import constants from '../../constants';
const { block } = constants;


const MirrorL = ({xs, ys}) => 
	<Layer>
            <Rect width={block} height={block}
				x={xs+30} y={ys} fill={'#7ed2f7'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs+30} y={ys+30} fill={'#7ed2f7'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs} y={ys+60} fill={'#7ed2f7'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={xs+30} y={ys+60} fill={'#7ed2f7'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>

export default MirrorL;