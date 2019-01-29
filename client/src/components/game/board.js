import React from 'react';
import Row from './rows';
import {board} from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fill from '../../actions/fillGrid';


const Board = ({data}) =>
{
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

  const mapDispatchToProps = dispatch => {
    return {
      shape: bindActionCreators(fill, dispatch)
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Board);