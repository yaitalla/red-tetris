import React from 'react';
import { Layer, Stage, Rect, Group } from 'react-konva';
//import { connect } from 'react-redux';
import constants from '../../constants';
import MirrorL from '../tetriminos/mirrorL';
import L from '../tetriminos/L';
import Square from '../tetriminos/square';
import Stick from '../tetriminos/stick';
import SnakeR from '../tetriminos/snakeR';
import SnakeL from '../tetriminos/snakeL';
import Cross from '../tetriminos/cross';
import { fall } from '../../actions';
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
