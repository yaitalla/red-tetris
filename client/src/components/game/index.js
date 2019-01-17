import React from 'react';
import { Layer, Stage, Rect, Group } from 'react-konva';
import constants from '../../constants';
import FallingPiece from '../tetriminos/current';
import Launcher from './launcher';


const { gridHeight, gridWidth, block } = constants;

const Game = () =>
  <div  style={ {"backgroundColor": "#d0ddf2"}}>
		<Stage width={gridWidth} height={gridHeight}>
			<Layer>
				<Launcher/>
			</Layer>
		</Stage>
  </div>



export default Game;
