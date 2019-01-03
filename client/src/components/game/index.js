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



const { gridHeight, gridWidth, block } = constants;

const Game = () =>
  <div style={ {"backgroundColor": "#d0ddf2"}}>
		<Stage width={1000} height={gridHeight}>
					<Square/>
					<L/>
					<MirrorL/>
					<Stick />
					<SnakeR/>
					<SnakeL/>
					<Cross xs={680} ys={80}/>
		</Stage>
  </div>

export default Game;
