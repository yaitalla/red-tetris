import React from 'react';
import Row from './rows';
import {board, rows, box} from './style';
import { connect } from 'react-redux';
import fill from '../../actions/fillGrid';
import {move} from '../../actions/move';
import {down} from '../../actions/down';

const Test = ({stat}) => {
  return (
    <div style={rows}>
        {
            stat.map((square, i) => i === 4 ? <div key={i} style={box}>{"0"}</div> : <div key={i} style={box}>{square}</div>)
        }
    </div>
    )
}

const Board = ({data}) =>
{
  console.log('board', data)
  const dat = data.newField
  return (
    <div style={board}>
        {
           dat.map((row, i) => <Row key={i} stat={row}/> )
        }
    </div>
  )
}


const mapStateToProps = (state) => ({
  data: state.field
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  data: dispatch(move(ownProps.newField))
})


export default connect(mapStateToProps, mapDispatchToProps)(Board);