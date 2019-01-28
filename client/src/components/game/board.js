import React from 'react';
import Row from './rows';
import {board} from './style';
import { connect } from 'react-redux';
import fill from '../../actions/fillGrid';


const Board = ({data}) =>
{
  fill();
  return (
    <div style={board}>
        {
           data.map((row, i) => <Row key={i} stat={row}/> )
        }
    </div>
  )
}


  const mapStateToProps = (state) => ({
    data: state.field
  })

  const mapDispatchToProps = dispatch => ({
    shape: fill().shape,
    color: fill().color
  })


export default connect(mapStateToProps, mapDispatchToProps)(Board);