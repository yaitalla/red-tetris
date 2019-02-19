import React from 'react';
import { divGlobal } from './style';
import Board from '../game/board';
import DataBoard from '../gameData';
import Button from '../startButton';
import {down} from '../../actions/down';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { SERVE_LEFT, LEFT_REQUEST, RIGHT_REQUEST,
  SERVE_RIGHT, DROPDOWN, ROTATE_REQUEST, SERVE_ROTATE,
  DOWN_REQUEST, SERVE_DOWN, SHAPE_REQUEST} from '../../constants';

import GameOver from './gameOver';



const listenServerSocket = (down, left, right, socket, move) => {
  const listen = (socket) => {
    socket.once(SERVE_DOWN, (data) => {
      console.log('down from server')
      down(data)    
    })
    socket.once(SERVE_LEFT, (data) => {
      console.log('left from server')
      down(data)    
    })
    socket.once(SERVE_RIGHT, (data) => {
      console.log('right from server')
      down(data)    
    })
    socket.once(SERVE_ROTATE, (data) => {
      console.log('rotate from server')
      down(data)    
    })
  }
    listen(socket)
    
}
const keys = (field, id, SOCKET, shape) => {
  const listener = (e) => {
      switch(e.keyCode) {
        case 39: //right
          SOCKET.emit(RIGHT_REQUEST, {field, key: e.keyCode, id})
          e.preventDefault();
          break;
        case 40: //down
          SOCKET.emit(DOWN_REQUEST, {field, key: e.keyCode, id})
          e.preventDefault();
          break;
        case 38: //up
          if (id != 6) {
            SOCKET.emit(ROTATE_REQUEST, {field, key: e.keyCode, id, shape})
          }
          e.preventDefault();
          break;
        case 37: //left
          SOCKET.emit(LEFT_REQUEST, {field, key: e.keyCode, id})
          e.preventDefault();
          break;
        default:
          break;
      }
  }
 window.addEventListener('keydown', listener);
}
const broadcastDropdown = (field, id, next, trigger, socket) => {
  if (trigger == true){
    socket.emit(SHAPE_REQUEST, {field, next})
  } else if (trigger == false && id != null ){
    setTimeout(() => {
      socket.emit(DOWN_REQUEST, { field, key:40, id })
      }, 500)
  }
}

const Global = ({data, id, down, left, right, socket, shape, move,  trigger, next}) => {
  listenServerSocket(down, left, right, socket, move)
  // if (id != null) {
  //   broadcastDropdown(data, id, next, trigger, socket)
  // }
  if (id != null) {
    keys(data, id, socket, shape);
  }
  return (
      <div>
        <Button />
        <div  style={divGlobal}>
          <Board/>
          <DataBoard/>
        </div>
      </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.field,
  id: state.currentID,
  socket: state.socket,
  trigger: state.grounded,
  next: state.next,
  move: state.moving,
  shape: state.shape
})
  

export default connect(mapStateToProps, {down})(Global);
