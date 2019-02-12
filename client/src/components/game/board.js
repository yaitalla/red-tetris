import React from 'react';
import {board, rows, box, gameover} from './style';
import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import {down} from '../../actions/down';
import {left} from '../../actions/left';
import {right} from '../../actions/right';
import { SERVE_LEFT, LEFT_REQUEST, RIGHT_REQUEST,
  SERVE_RIGHT, DROPDOWN, SOCKET,
  DOWN_REQUEST, SERVE_DOWN, SHAPE_REQUEST} from '../../constants';


const methods = {
    componentDidUpdate(props) {
    },
    componentDidMount(props) {
      console.log('mounted')
    }
}

const keys = ({field, id}) => {
  console.log(field)
  let listener = (e) => {
      switch(e.keyCode) {
        case 39:
        e.preventDefault();
          SOCKET.emit(RIGHT_REQUEST, {field, key: e.keyCode, id})
          e.preventDefault();
          break;
        case 40:
        e.preventDefault();
          SOCKET.emit(DOWN_REQUEST, {field, key: e.keyCode, id})
          e.preventDefault();
          break;
        case 37:
        e.preventDefault();
        SOCKET.emit(LEFT_REQUEST, {field, key: e.keyCode, id})
          e.preventDefault();
          break;
        default:
          break;
      }
  }
  window.addEventListener('keydown', listener);
}

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
  const listener = (e) => {
    if (id != null) {
      if (e.keyCode == 40){
        SOCKET.emit(DOWN_REQUEST, {field, key: e.keyCode, id})
      } else if (e.keyCode == 39){
        SOCKET.emit(RIGHT_REQUEST, {field, key: e.keyCode, id})
      } else if (e.keyCode == 37){
        SOCKET.emit(LEFT_REQUEST, {field, key: e.keyCode, id})
      }
    }
  }
 // window.addEventListener('keydown', listener);
}

const listenServerSocket = (down, left, right) => {
  SOCKET.on(SERVE_DOWN, (data) => {
    down(data)    
  })
  SOCKET.on(SERVE_LEFT, (data) => {
    left(data)    
  })
  SOCKET.on(SERVE_RIGHT, (data) => {
    right(data)    
  })
}
     
const broadcastDropdown = (field, id, next, trigger) => {
  if (trigger == true){
    SOCKET.emit(SHAPE_REQUEST, {field, next})
  } else if (trigger == false && id != null ){
    setTimeout(() => {
        SOCKET.emit(DOWN_REQUEST, { field, key:40, id })
      }, 500)
  }
}

const Board = ({down, data, colors, gameOver,
  triggerNext, right, left, id, next}) =>
{
  if (gameOver == false) {
    listenServerSocket(down, left, right)
  }
  if (id != null) {
    broadcastDropdown(data, id, next, triggerNext);
  }
  // if (id != null) {
  //   keys(data, id)
  // }

  return (
    <div style={board}>
        {
           data.map((row, i) => <Row key={i} id={id} colors={colors} stat={row}/> )
        }
    </div>
  )
}


const mapStateToProps = (state) => ({
  data: state.field,
  colors: state.colors,
  id: state.currentID,
  triggerNext: state.grounded,
  next: state.next,
  gameOver: state.gameOver
})

const Boarding =  lifecycle(methods)(Board) 

export default connect(mapStateToProps, {down, left, right})(Board);
