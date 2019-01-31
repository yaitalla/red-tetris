import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { divGlobal } from './style';
import Board from '../game/board';
import DataBoard from '../gameData';
import Button from '../startButton';
import io from 'socket.io-client';


const Global = () => {

  return (
    <Router>
      <div>
        <Button />
        <div  style={divGlobal}>
          <Board/>
          <DataBoard/>
        </div>
      </div>
      
    </Router>
    )
}
  

export default Global;
