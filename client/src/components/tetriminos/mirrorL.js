import React from 'react';
import { Layer, Stage, Rect } from 'react-konva';
import constants from '../../constants';
const { block } = constants;


const MirrorL = ({xs, ys}) => 
	<Layer>
            <Rect width={block} height={block}
				x={xs+30} y={ys} fill={'red'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs+30} y={ys+30} fill={'red'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs} y={ys+60} fill={'red'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={xs+30} y={ys+60} fill={'red'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>

export default MirrorL;