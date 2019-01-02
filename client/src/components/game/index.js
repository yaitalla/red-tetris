import React from 'react';
import { Layer, Stage } from 'react-konva';
//import { connect } from 'react-redux';
import constants from '../../constants';
import Tetris from '../tetriminos';

const { gridHeight, gridWidth } = constants;

const Game = () =>
  <div>
    <Stage width={gridWidth} height={gridHeight}>
			<Layer>
				<Tetris/>
			</Layer>
		</Stage>
  </div>

export default Game;
