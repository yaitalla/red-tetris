import React from 'react';
import { divGlobal } from './style';
import Board from '../game/board';
import DataBoard from '../gameData';
import Button from '../startButton';
import { connect } from 'react-redux';
import { SOCKET, DOWN_REQUEST } from '../../constants';
import {down} from '../../actions/down';
import GameOver from './gameOver';

const broadcastDropdown = (field, color) => {
  if (color != ''){
    setTimeout(() => {
      SOCKET.emit(DOWN_REQUEST, { field, key:40 })
      }, 500)
  }
}

const broadcastKeysToServer = (field, color) => {
  const listener = (e) => {
    if (color != '') {
      switch(e.keyCode){
        case 40: //down arrow
          SOCKET.emit(DOWN_REQUEST, {field, key: e.keyCode})
          break;
        case 39: //right arrow
          SOCKET.emit(DOWN_REQUEST, {field, key: e.keyCode})
          e.preventDefault();
          break;
        case 37: //left arrow
          SOCKET.emit(DOWN_REQUEST, {field, key: e.keyCode})
          e.preventDefault();
          break;
        default:
          break;
        }
    }
  }
  window.addEventListener('keydown', listener);
}

const Global = ({gameOver, color, down}) => {
  // SOCKET.on(MOVE_SENT, (data) => {
  //   console.log('socket on', data)
  //   move(data)
  // })
//  broadcastKeysToServer(data, color)
//  broadcastDropdown(data, color)
  return (
      <div>
        <Button />
        <div  style={divGlobal}>
          <Board />
          <DataBoard/>
        </div>
      </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.field,
  color: state.color,
})
  

export default connect(mapStateToProps, {down})(Global);
