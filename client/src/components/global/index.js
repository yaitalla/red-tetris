import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { divGlobal } from './style';
import Board from '../game/board';
import DataBoard from '../gameData';
import Button from '../startButton';
import io from 'socket.io-client';


const Global = () => {
  // const socket = io('localhost:4000');
  // socket.emit('WIN_SIGNAL', {
  //   signal: 'win'
  // });
  // //console.log('log socket', socket.connected, socket.disconnected)
  // socket.on('RECEIVE_SIGNAL', function(data){
  //   addMessage(data);
  // });
  // const addMessage = data => {
  //     console.log(data);
  // };



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
