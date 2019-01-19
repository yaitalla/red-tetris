import React from 'react';
import { Layer, Stage, Rect, Group } from 'react-konva';
import constants from '../../constants';
import FallingPiece from '../tetriminos/current';
import CreateField from './startGame';
import {game} from './style';


const { gridHeight, gridWidth, block } = constants;

const Game = () =>
  <div  style={game}>
		<Stage width={gridWidth} height={gridHeight}>
			<Layer>
				<FallingPiece/>
				<CreateField/>
			</Layer>
		</Stage>
  </div>



export default Game;
