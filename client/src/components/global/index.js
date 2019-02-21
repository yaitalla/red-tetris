import React from 'react';
import { divGlobal } from './style';
import Board from '../game/board';
import DataBoard from '../gameData';
import Button from '../startButton';
import {down} from '../../actions/down';
import {left} from '../../actions/left';
import {right} from '../../actions/right';
import lifecycle from 'react-pure-lifecycle';
import {rotate} from '../../actions/rotate';
import { connect } from 'react-redux';
import socket from '../../socket';
// import io from 'socket.io-client';
import { SERVE_LEFT, LEFT_REQUEST, RIGHT_REQUEST,
  SERVE_RIGHT, DROPDOWN, ROTATE_REQUEST, SERVE_ROTATE,
  DOWN_REQUEST, SERVE_DOWN, SHAPE_REQUEST} from '../../constants';

// export const socket =  io('localhost:4000');


const listenServerSocket = (down, left, right, rotate) => {
    socket.once(SERVE_DOWN, (data) => {
      console.log('down from server')
      down(data)    
    })
    socket.once(SERVE_LEFT, (data) => {
      console.log('left from server')
      left(data)    
    })
    socket.once(SERVE_RIGHT, (data) => {
      console.log('right from server')
      right(data)    
    })
    socket.once(SERVE_ROTATE, (data) => {
      console.log('rotate from server')
      rotate(data)    
    })
}
const keys = (field, id, shape) => {
  
  const listener = (e) => {
    const data = {
      field,
      key: e.keyCode,
      id,
      shape: shape
    }
      switch(e.keyCode) {
        case 39: //right
          socket.emit(RIGHT_REQUEST, data)
          e.preventDefault();
          break;
        case 40: //down
          socket.emit(DOWN_REQUEST, data)
          e.preventDefault();
          break;
        case 38: //up
          if (id != 6) {
            socket.emit(ROTATE_REQUEST, {field, key: e.keyCode, id, shape})
          }
          e.preventDefault();
          break;
        case 37: //left
          socket.emit(LEFT_REQUEST, data)
          e.preventDefault();
          break;
        default:
          break;
      }
  }
 window.addEventListener('keydown', listener, {once: true});
}
const broadcastDropdown = (field, id, next, trigger) => {
  if (trigger == true){
    socket.emit(SHAPE_REQUEST, {field, next})
  } else if (trigger == false && id != null ){
    setTimeout(() => {
      socket.emit(DOWN_REQUEST, { field, key:40, id })
      }, 500)
  }
}

const Global = ({data, id, down, left, right, shape, rotate,  trigger, next}) => {
  listenServerSocket(down, left, right, rotate)
  // if (id != null) {
  //   broadcastDropdown(data, id, next, trigger, socket)
  // }
  if (id != null) {
    keys(data, id, shape);
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
 // socket: state.socket,
  trigger: state.grounded,
  next: state.next,
  move: state.moving,
  shape: state.shape
})
  

export default connect(mapStateToProps, {down, left, rotate, right})(Global);
