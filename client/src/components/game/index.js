import React from 'react';
import PlayerMove from './playerMove';
import {gp} from '../global'

const Game = () =>
  <div>
      <PlayerMove dispatch={gp}/>
  </div>

export default Game;
