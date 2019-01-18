import React from 'react';
import { Rect, Group } from 'react-konva';
import constants from '../../constants';
import { Layer } from 'react-konva';

const { block } = constants;


const Test = ({xs, ys}) => 
	<Group>
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
	</Group>
export default Test;