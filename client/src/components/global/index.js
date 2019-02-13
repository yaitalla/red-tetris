import React from 'react';
import { divGlobal } from './style';
import Board from '../game/board';
import DataBoard from '../gameData';
import Button from '../startButton';
import { connect } from 'react-redux';
import { SERVE_LEFT, LEFT_REQUEST, RIGHT_REQUEST,
  SERVE_RIGHT, DROPDOWN, SOCKET,
  DOWN_REQUEST, SERVE_DOWN, SHAPE_REQUEST} from '../../constants';
import {down} from '../../actions/down';
import {left} from '../../actions/left';
import {right} from '../../actions/right';
import GameOver from './gameOver';

const listenServerSocket = (down, left, right) => {
    SOCKET.on(SERVE_DOWN, (data) => {
      console.log('move from server')
      down(data)    
    })
    SOCKET.on(SERVE_LEFT, (data) => {
      console.log('move from server')
      left(data)    
    })
    SOCKET.on(SERVE_RIGHT, (data) => {
      console.log('move from server')
      right(data)    
    })
}

const broadcastKeysToServer = (field, id) => {
  const listener = (e) => {
      switch(e.keyCode){
        case 40: //down arrow
          SOCKET.emit(DOWN_REQUEST, {field, key: e.keyCode, id})
          break;
        case 39: //right arrow
          SOCKET.emit(RIGHT_REQUEST, {field, key: e.keyCode, id})
          e.preventDefault();
          break;
        case 37: //left arrow
          SOCKET.emit(LEFT_REQUEST, {field, key: e.keyCode, id})
          e.preventDefault();
          break;
        default:
          break;
        }
  }
  window.addEventListener('keydown', listener);
}

const Global = ({data, id, down, left, right}) => {
  listenServerSocket(down, left, right)
  if (id != null) {
    broadcastKeysToServer(data, id)
}
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
  id: state.currentID
})
  

export default connect(mapStateToProps, {down, left, right})(Global);
