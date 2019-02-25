import React from 'react';
import { divGlobal } from './style';
import Board from '../game/board';
import DataBoard from '../gameData';
import Button from '../startButton';
import {down} from '../../actions/down';
import {drop} from '../../actions/drop';
import {left} from '../../actions/left';
import {right} from '../../actions/right';
import lifecycle from 'react-pure-lifecycle';
import {rotate} from '../../actions/rotate';
import {refresh} from '../../actions/refresh';
import { connect } from 'react-redux';
import {fill} from '../../actions/fillGrid';
import socket from '../../socket';
import { SERVE_LEFT, LEFT_REQUEST, RIGHT_REQUEST, SERVE_DROPDOWN,
  SERVE_RIGHT, DROPDOWN_REQUEST, ROTATE_REQUEST, SERVE_ROTATE,
  DOWN_REQUEST, SERVE_DOWN, SHAPE_REQUEST, SHAPE_SENT} from '../../constants';



const listenServerSocket = (down, left, right, rotate, fill, drop) => {
    socket.once(SHAPE_SENT, (data) => {
      console.log('new shape from server')
      fill(data)    
    })
}
const keys = (total, field, id, shapes, down, left, right, rotate, refresh, nbr) => {
  const listener = (e) => {
      switch(e.keyCode) {
        case 39: //right
          right(field, nbr, shapes, total-1)
          e.preventDefault();
          break;
        case 40: //down
          down(field, id, shapes, total-1)
          e.preventDefault();
          break;
         case 38: //up
          if (id != 6) {
            rotate(field, shapes, total-1)
          }
          e.preventDefault();
          break;
        case 37: //left
          left(field, nbr, shapes, total-1)
          e.preventDefault();
          break;
        default:
          refresh(field, nbr)
          e.preventDefault();
      }
  }
 window.addEventListener('keydown', listener, {once: true});
}
const broadcastDropdown = (field, id, total, trigger, shapes, drop) => {

  if (trigger == true){
    // nextShape()
  } else if (trigger == false && id != null ){
  setTimeout(() => {
      drop(field, id, shapes, total-1)
      }, 300)
  }
}

const Global = ({refresh, nb, data, id, total, down, left, right, shapes, rotate, drop, trigger, next, fill}) => {
  //listenServerSocket(down, left, right, rotate, fill, drop)
  // if (id != null) {
  //   broadcastDropdown(data, id, total, trigger, shapes, drop)
  // }
  if (id != null) {
    keys(total, data, id, shapes, down, left, right, rotate, refresh, nb);
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
  trigger: state.grounded,
  next: state.next,
  move: state.moving,
  shapes: state.shapes,
  total: state.total,
  nb: state.nb
})
  

export default connect(mapStateToProps, {refresh, down, drop, left, rotate, right, fill})(Global);
