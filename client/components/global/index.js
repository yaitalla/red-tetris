import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { divGlobal } from './style';
import Board from '../game/board';
import Current from '../game/current';
import constants from '../../constants'

const tetriminos = constants.tetriminos

const Global = () =>
  <Router>
    <div  style={divGlobal}>
      <Board/>
    </div>
  </Router>

export default Global;
