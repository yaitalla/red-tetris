import React from 'react';
import {board, rows, box} from './style';
import { connect } from 'react-redux';
import {move} from '../../actions/move';

const Row = ({stat}) => 
  <div style={rows}>
      {
          stat.map((square, i) => <div key={i} style={box}>{square}</div>)
      }
  </div>



const Board = ({data}) =>
{
 // console.log('board', data)
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
  data: dispatch(move())
})


export default connect(null, mapDispatchToProps)(Board);