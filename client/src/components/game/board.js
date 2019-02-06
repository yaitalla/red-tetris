import React from 'react';
import {board, rows, box} from './style';
import { connect } from 'react-redux';
import {move} from '../../actions/move';
import { SOCKET, MOVE_REQUEST, MOVE_SENT } from '../../constants';

const setStyle = (color) => {
  return  {
    height: '24px',
    border: '1px dashed #999',
    width: '24px',
    textAlign: 'center',
    background: color
  }
}

const applyColor = (color, mapKey) => {
  return (
    <div key={mapKey} style={setStyle(color)}>{''}</div>
  )
}

const broadcastKeysToServer = (field, color) => {
  console.log('listener color', color)
  const listener = (e) => {
    switch(e.keyCode){
      case 40:
        SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode})
        e.preventDefault();
        break;
      case 39:
        SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode})
        e.preventDefault();
        break;
      case 37:
        SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode})
        e.preventDefault();
        break;
      default:
        break;
  }
}
  window.addEventListener('keydown', listener);
}
const broadcastDropdown = (field) => {
  const data = { field, key:37 }
  setTimeout(() => {
  SOCKET.emit(MOVE_REQUEST, data)
  }, 500)
}

const Row = ({stat, color}) =>
  <div style={rows}>
      {
          stat.map((square, i) =>
            square == '1' || square == '2' ? applyColor(color, i) :
            <div key={i} style={box}>{square}</div>
          )
      }
  </div>



const Board = ({move, data, color}) =>
{
  broadcastKeysToServer(data, color)
 // broadcastDropdown(data);
  SOCKET.on(MOVE_SENT, (data) => {
    move(data)
  })
  return (
    <div style={board}>
        {
           data.map((row, i) => <Row key={i} color={color} stat={row}/> )
        }
    </div>
  )
}


const mapStateToProps = (state) => ({
  data: state.field,
  color: state.color
})


export default connect(mapStateToProps, {move})(Board);