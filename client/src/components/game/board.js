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
  console.log(colors)
  const data = { field, key:40, colors }
  setTimeout(() => {
  SOCKET.emit(MOVE_REQUEST, data)
  }, 500)
}

const checkGroud = (data) => {

}

const Row = ({stat, color}) =>
  <div style={rows}>
      {
          stat.map((square, i) =>
            square == '1' ? applyColor(color, i) :
            (square == '2' ? applyColor("white", i) :
            <div key={i} style={box}>{''}</div>)
          )
      }
  </div>



const Board = ({move, data, colors}) =>
{
  console.log(colors)
 // broadcastKeysToServer(data, color)
 // if (colors[0]) broadcastDropdown(data, colors);
  SOCKET.on(MOVE_SENT, (data) => {
    move(data)
  })
  return (
    <div style={board}>
        {
           data.map((row, i) => <Row key={i} color={colors} stat={row}/> )
        }
    </div>
  )
}


const mapStateToProps = (state) => ({
  data: state.field,
  colors: state.colors
})


export default connect(mapStateToProps, {move})(Board);