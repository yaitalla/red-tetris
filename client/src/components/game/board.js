import React from 'react';
import {board, rows, box} from './style';
import { connect } from 'react-redux';
import {move} from '../../actions/move';
import {test} from '../../actions/test';
import { SOCKET, MOVE_REQUEST, MOVE_SENT, SHAPE_REQUEST} from '../../constants';

const setStyle = (color) => {
  return  {
    height: '24px',
    border: '1px dashed #999',
    width: '24px',
    textAlign: 'center',
    background: color
  }
}

const applyColor = (colors, mapKey, squareValue, squareId) => {
  if(squareValue == 1) {
      return (
        <div key={mapKey} style={setStyle("white")}>{''}</div>
      )
  } else if(squareValue == 2) {
      return (
        <div key={mapKey} style={setStyle(colors[squareId])}>{''}</div>
      )
  } else {
    return (
      <div key={mapKey} style={setStyle(colors[squareValue-3])}>{''}</div>
    )
}
}

const Row = ({stat, colors, id}) => {
    return (
      <div style={rows}>
        {
          stat.map((square, i) =>
            square > 0 ?  applyColor(colors, i, square, id) :
            <div key={i} style={box}>{''}</div>
          )
        }
    </div>
    )
}

const broadcastKeysToServer = (field, id) => {
  console.log('broadcasKeysToServer', field)

  const listener = (e) => {
    if (id != null) {
      switch(e.keyCode){
        case 40: //down arrow
          e.preventDefault()
          SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode, id})
          e.preventDefault()
          break;
        case 39: //right arrow
        e.preventDefault()
        SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode, id})
        e.preventDefault()
        break;
        case 37: //left arrow
        e.preventDefault()
        SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode, id})
        e.preventDefault()
        break;
        default:
          break;
        }
    }
  }
  window.addEventListener('keydown', listener);
}

const listenServerSocket = (data, move) => {
  SOCKET.on(MOVE_SENT, (data) => {
    move(data)
  })
  SOCKET.on('TEST', (data) => {
    move(data)
  })
}
     
const broadcastDropdown = (field, id, next, trigger) => {
  console.log('broadcastDropdown', id)
  if (trigger == true){
    SOCKET.emit(SHAPE_REQUEST, {field, next})
  } else if (trigger == false){
    setTimeout(() => {
        SOCKET.emit(MOVE_REQUEST, { field, key:40, id })
      }, 500)
  }
}

const Board = ({move, data, colors, 
  triggerNext, timer, ID, next}) =>
{
  listenServerSocket(data, move)
  broadcastKeysToServer(data, ID)
  if (ID != null) {
    broadcastDropdown(data, ID, next, triggerNext);
  } 
 
  return (
    <div style={board}>
        {
           data.map((row, i) => <Row key={i} id={ID} colors={colors} stat={row}/> )
        }
    </div>
  )
}


const mapStateToProps = (state) => ({
  data: state.field,
  colors: state.colors,
  ID: state.currentID,
  triggerNext: state.grounded,
  next: state.next,
})


export default connect(mapStateToProps, {move, test})(Board);