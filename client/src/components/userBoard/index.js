import React from 'react';
import {board, center} from './style';
import { connect } from 'react-redux';

const UserBoard = () => {
    return ( 
        <div style={board}>
          <h2 style={center}>connected users</h2>
          <div style={center}>
          {
                "no users"
          }
          </div>
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        field: state.field,
        id: state.currentID,
    }
}

export default UserBoard;