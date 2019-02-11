import React from 'react';
import {board, rows, box} from './style';
import { connect } from 'react-redux';
import {move} from '../../actions/move';
import {left} from '../../actions/left';
import {right} from '../../actions/right';
import { LEFT, RIGHT, DROPDOWN, SOCKET,
  MOVE_REQUEST, MOVE_SENT, SHAPE_REQUEST} from '../../constants';

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
  //console.log('broadcasKeysToServer', field)

  const listener = (e) => {
    if (id != null) {
      switch(e.keyCode){
        case 40: //down arrow
          SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode, id})
          e.preventDefault()
          break;
        case 39: //right arrow
        SOCKET.emit(MOVE_REQUEST, {field, key: e.keyCode, id})
        e.preventDefault()
        break;
        case 37: //left arrow
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

const listenServerSocket = (datas, move, left, right) => {
  console.log("action")
  SOCKET.on(MOVE_SENT, (data) => {
    switch(data.type) {
      case DROPDOWN:
        move(data);
        break;
      case LEFT:
        left(data);
        break;
      case RIGHT:
        right(data);
        break;
      default:
        break;
    }
  })
}
     
const broadcastDropdown = (field, id, next, trigger) => {
  console.log('broadcastDropdown', field)
  if (trigger == true){
    SOCKET.emit(SHAPE_REQUEST, {field, next})
  } else if (trigger == false){
    setTimeout(() => {
        SOCKET.emit(MOVE_REQUEST, { field, key:40, id })
      }, 500)
  }
}

const Board = ({move, data, colors, 
  triggerNext, right, left, ID, next}) =>
{
  listenServerSocket(data, move, left, right)
  broadcastKeysToServer(data, ID)
  // if (ID != null) {
  //   broadcastDropdown(data, ID, next, triggerNext);
  // } 
 
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


export default connect(mapStateToProps, {move, left, right})(Board);