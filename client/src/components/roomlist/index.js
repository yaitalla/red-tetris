import React from 'react';
import {board, center, mapper} from './style';
import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import socket from '../../socket';
const componentDidMount = (props) => {
    // console.log('roomlist props: ', props);
  };
  const componentDidUpdate = (props) => {
    // console.log('roomlist updated props: ', props);
  };
  const methods = {
    componentDidMount,
    componentDidUpdate
  };
  
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
    //console.log(room.length)
    return ( 
        <div style={board}>
          <h2 style={center}>Availble rooms</h2>
          <div style={center}>
          {room.length == 0 ? "no room yet"
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

export default connect(mapStateToProps)(lifecycle(methods)(Roomlist));