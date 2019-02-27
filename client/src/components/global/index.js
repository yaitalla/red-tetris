import React from 'react';
import { divGlobal } from './style';
import Board from '../game/board';
import DataBoard from '../gameData';
import UserBoard from '../userBoard';
import Roomlist from '../roomlist';
import Button from '../startButton';
import Roombutton from '../rooms';
import {down} from '../../actions/down';
import {drop} from '../../actions/drop';
import {left} from '../../actions/left';
import {right} from '../../actions/right';
import lifecycle from 'react-pure-lifecycle';
import {rotate} from '../../actions/rotate';
import {refresh} from '../../actions/refresh';
import { connect } from 'react-redux';
import {fill} from '../../actions/fillGrid';


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
          } else {
            refresh(field, nbr)
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

const Game = () => {
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

const PreGame = () => {
  return (
<div>
      <Roombutton />
      <div  style={divGlobal}>
        <UserBoard/>
        <Roomlist/>
      </div>
  </div>
  )
}

const Global = ({refresh, nb, data, id, total, down, left, right, shapes, rotate, drop, trigger, next, fill}) => {
  // if (id != null) {
  //   broadcastDropdown(data, id, total, trigger, shapes, drop)
  // }
  if (id != null) {
    keys(total, data, id, shapes, down, left, right, rotate, refresh, nb);
  }
  const i = shapes.length
  console.log(nb)
  return (
      <div>
       { i > 0 ? <Game/> : <PreGame /> }
        
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
