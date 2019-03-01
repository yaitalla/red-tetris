import React from 'react';
import {board, rows, box, ghostStyle} from './style';
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

let ghostStat = {
  index: [],
  positionY: -1
};

const setStyle = (color) => {
  if (color != "white") {
    return  {
      height: '26px',
      width: '26px',
      textAlign: 'center',
      background: color
    }
  }
  return  {
    height: '24px',
    border: '1px dashed #999',
    width: '24px',
    textAlign: 'center',
    background: color
  }
}

const checkForMoves = (newPosY, newIndex) => {
  let deleteThisIndex;
  if (ghostStat.positionY < newPosY) {
    ghostStat.positionY = newPosY;
  }
  if (ghostStat.index.indexOf(newIndex) == -1){
    if (ghostStat.index.length == 2) {
      if (newIndex > Math.max(ghostStat.index)) {
        deleteThisIndex = ghostStat.index.indexOf(Math.min(ghostStat.index))
        ghostStat.index.splice(deleteThisIndex, 1)
      } else if (newIndex < Math.min(ghostStat.index)) {
        deleteThisIndex = ghostStat.index.indexOf(Math.max(ghostStat.index))
        ghostStat.index.splice(deleteThisIndex, 1)
      }
    }
    ghostStat.index.push(newIndex)
  }
}

const applyColor = (colors, mapKey, squareValue, squareId, posY) => {
  // console.log(mapKey, squareValue, squareId)
  if(squareValue == 1) {
      return (
        <div key={mapKey} style={setStyle("white")}>{''}</div>
      )
  } else if(squareValue == 2) {
    //console.log(mapKey, squareValue, squareId)
    checkForMoves(posY, mapKey);
    // if (ghostStat.positionY < posY) {
    //   ghostStat.positionY = posY;
    // }
    // if (ghostStat.index.indexOf(mapKey) == -1){
    //   ghostStat.index.push(mapKey)
    // }
    return (
      <div key={mapKey} style={setStyle(colors[squareId])}>{''}</div>
    )
  } else {
    return (
      <div key={mapKey} style={setStyle(colors[squareValue-3])}>{''}</div>
    )
  }
}

const ghostShape = (index, posY) => {
  
  if (ghostStat.index.indexOf(index) > -1 && posY >= ghostStat.positionY) {
    //console.log(ghostStat.index)
    return ghostStyle;
  }return box;
}

const Row = ({stat, colors, id, posY}) => {
    return (
      <div style={rows}>
        {
          stat.map((square, i) =>
            square > 0 ?  applyColor(colors, i, square, id, posY) :
            <div key={i} style={box/*ghostShape(i, posY)*/}>{''}</div>
          )
          
        }
    </div>
    )
}

const Board = ({down, data, colors, gameOver,
  triggerNext, next, right, left, id, move}) =>
{
  return (
    <div style={board}>
        {
           data.map((row, i) => <Row key={i} id={id} posY={i} colors={colors} stat={row}/> )
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
})

// const Boarding =  lifecycle(methods)(Board) 

export default connect(mapStateToProps, {down, left, right})(Board);
