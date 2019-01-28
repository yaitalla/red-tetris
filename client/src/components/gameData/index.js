import React from 'react';
import {board} from './style';
import { connect } from 'react-redux';


const dataBoard = ({data}) =>
{
  console.log('dataBoard', data)
  return ( 
      <div style={board}>
        {
          data
        }
      </div>
  )
}


  const mapStateToProps = (state) => ({
    data: state.shape
  })


export default connect(mapStateToProps)(dataBoard);