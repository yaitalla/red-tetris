import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { divGlobal } from './style';
import Board from '../game/board';


const Global = () =>
  <Router>
    <div  style={divGlobal}>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      
    </div>
  </Router>

export default Global;
