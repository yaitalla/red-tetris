import React from 'react';
import Row from './rows';
import {board, rows, box} from './style';
import { connect } from 'react-redux';
import fill from '../../actions/fillGrid';
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
  const dat = data.newField
  //console.log(dat)
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
  data: dispatch(down(ownProps.newField))
})


export default connect(mapStateToProps, mapDispatchToProps)(Board);