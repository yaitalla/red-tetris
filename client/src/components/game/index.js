import React from 'react';
import { Layer, Stage, Rect, Group } from 'react-konva';
import constants from '../../constants';
import FallingPiece from '../tetriminos/current';
import Launcher from './launcher';


const { gridHeight, gridWidth, block } = constants;

const Game = () =>
// evite les style inline comme ca, fais une variable que tu importe de ton fihcier style.js
// même si tu as seulement backgroundColor comme ici.
// parce que sinon, en mode inline c'est recompiler a chaque fois,
// alors que si c'est import d'un fichier ET si il n'y a pas de changement, il ne recharge pas ton style, il l'a déjà.
  <div  style={ {"backgroundColor": "#d0ddf2"}}>
		<Stage width={gridWidth} height={gridHeight}>
			<Layer>
				<Launcher/>
			</Layer>
		</Stage>
  </div>



export default Game;
