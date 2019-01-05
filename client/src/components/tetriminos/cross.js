import React, { PropTypes } from 'react';
import { Layer, Stage, Rect } from 'react-konva';
import constants from '../../constants';
const { block } = constants;


const Cross = ({xs, ys}) => 
	<Layer>
            <Rect width={block} height={block}
				x={xs+30} y={ys} fill={'blue'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs} y={ys+30} fill={'blue'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs+30} y={ys+30} fill={'blue'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={xs+60} y={ys+30} fill={'blue'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>
/*
Cross.propTypes = {
    xmin: PropTypes.number.isRequired,
    ymin: PropTypes.number.isRequired
}
*/

export default Cross;