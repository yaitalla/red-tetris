import React from 'react';
import Row from './rows';
import {board} from './style';
import { connect } from 'react-redux';



const Board = ({data}) =>
    <div style={board}>
        {
          data.map((row, i) => <Row key={i} stat={row}/> )
        }
    </div>
  
  const mapStateToProps = (state) => ({
    data: state.start
  })

export default connect(mapStateToProps)(Board);