import React from 'react';
import { divGlobal } from './style';
import Board from '../game/board';
import DataBoard from '../gameData';
import Button from '../startButton';
import { connect } from 'react-redux';
import { SOCKET, MOVE_REQUEST, MOVE_SENT } from '../../constants';
import {move} from '../../actions/move';

const broadcastDropdown = (field, color) => {
  if (color != ''){
    setTimeout(() => {
      SOCKET.emit(MOVE_REQUEST, { field, key:40 })
      }, 500)
  }
}

const broadcastKeysToServer = (field, color) => {
  const listener = (e) => {
    if (color != '') {
      switch(e.keyCode){
        case 40: //down arrow
          SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode})
          e.preventDefault();
          break;
        case 39: //right arrow
          SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode})
          e.preventDefault();
          break;
        case 37: //left arrow
          SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode})
          e.preventDefault();
          break;
        default:
          break;
        }
    }
  }
  window.addEventListener('keydown', listener);
}
// SOCKET.on(MOVE_SENT, (data) => {
//   console.log('socket on', data)
//   move(data)
// })
const Global = ({data, color}) => {
  // console.log('global', data, color)
 // broadcastKeysToServer(data, color)
  //broadcastDropdown(data, color)
  return (
      <div>
        <Button />
        <div  style={divGlobal}>
          <Board/>
          <DataBoard />
        </div>
      </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.field,
  color: state.color
})
  

export default connect(mapStateToProps, {move})(Global);
