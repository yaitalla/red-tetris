import React from 'react';
import io from 'socket.io-client';
import {board, rows, box, gameover} from './style';
import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import {down} from '../../actions/down';
import {left} from '../../actions/left';
import {right} from '../../actions/right';
import { SERVE_LEFT, LEFT_REQUEST, RIGHT_REQUEST,
  SERVE_RIGHT, DROPDOWN,
  DOWN_REQUEST, SERVE_DOWN, SHAPE_REQUEST} from '../../constants';


// const methods = {
//     componentDidUpdate(props) {
//      //console.log('updated')
//     },
//     componentDidMount(props) {
//       // console.log('mounted')
//     },
//     componentWillUpdate(props){
//       // console.log('willUpdate')
//     },
//     componentWillMount(props){
//       // console.log('will mount')
//     }
// }

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

const Board = ({down, data, colors, gameOver,
  triggerNext, next, right, left, id, socket, move}) =>
{
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
  gameOver: state.gameOver,
  move: state.moving,
  socket: state.socket
})

// const Boarding =  lifecycle(methods)(Board) 

export default connect(mapStateToProps, {down, left, right})(Board);
