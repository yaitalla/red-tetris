import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { divGlobal } from './style';
import Board from '../game/board';
import DataBoard from '../gameData';


const Global = () =>
  <Router>
    <div  style={divGlobal}>
      <Board/>
      <DataBoard/>
    </div>
  </Router>

export default Global;
