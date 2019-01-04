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
					<Square xs={250} ys={80} />
					<L xs={150} ys={50} />
					<MirrorL xs={50} ys={50} />
					<Stick xs={350} ys={20}  />
					<SnakeR xs={420} ys={80} />
					<SnakeL xs={550} ys={80} />
					<Cross xs={680} ys={80}/>
		</Stage>
  </div>

export default Game;
