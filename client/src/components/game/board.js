import React from 'react';
import {board, rows, box} from './style';
import { connect } from 'react-redux';
import {move} from '../../actions/move';
import {test} from '../../actions/test';
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

const applyColor = (colors, mapKey, squareValue, squareId) => {
  if(squareValue == 1) {
      return (
        <div key={mapKey} style={setStyle("white")}>{''}</div>
      )
  } else {
      return (
        <div key={mapKey} style={setStyle(colors[squareId])}>{''}</div>
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
          // stat.map((square, i) =>
          //   square == '1' ? applyColor(color, i) :
          //   (square == '2' ? applyColor("white", i) :
          //   <div key={i} style={box}>{''}</div>)
          // )
     
const broadcastDropdown = (field, id, next) => {
  if (next){
    console.log("grounded:", next)
   // SOCKET.emit(SHAPE_REQUEST, {field})
  } else if (id && !next){
    console.log("grounded:", next)
    setTimeout(() => {
        SOCKET.emit(MOVE_REQUEST, { field, key:40, id })
      }, 500)
  }
  SOCKET.on(MOVE_SENT, (data) => {
    move(data)
  })
}

const Board = ({move, data, colors, test, timer, ID, next}) =>
{
  console.log(timer)
  broadcastDropdown(data, ID, next)
  // broadcastKeysToServer(data, ID)
 // if (colors[0]) broadcastDropdown(data, colors);
  // SOCKET.on(MOVE_SENT, (data) => {
  //   move(data)
  // })
  SOCKET.emit('TEST', { })

  SOCKET.on('TEST_SENT', (data) => {
    test(data)
  })
  
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
  next: state.grounded,
  timer: state.time
})


export default connect(mapStateToProps, {move, test})(Board);