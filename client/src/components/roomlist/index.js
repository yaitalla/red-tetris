import React from 'react';
import {board, center, mapper} from './style';
import { connect } from 'react-redux';

import socket from '../../socket';

const starter = (room) => {
    socket.emit('ENTER_ROOM', room)
    //console.log(room)
}

const RoomMapper = (room) => {
   return ( <div style={mapper}>
        {room}
        <button onClick={() => starter(room)}>enter</button>
    </div>)
}

const Roomlist = ({room}) => {
    return ( 
        <div style={board}>
          <h2 style={center}>Availble rooms</h2>
          <div style={center}>
          {room.length == 0 ? "no rooms yet"
            :   room.map((room, i) => <div key={i}>{RoomMapper(room)}</div> )
          }
          </div>
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        room: state.rooms,
    }
}

export default connect(mapStateToProps)(Roomlist);