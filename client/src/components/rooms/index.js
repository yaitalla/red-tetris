import React from 'react';
import { flex, noBullet, btn, nonstyle} from './style';
import {addRoom} from '../../actions/addRoom';
import { connect } from 'react-redux';
import { START_GAME, SERVER_IO_URL, START_SENT } from '../../constants';

import socket from '../../socket';

const Roombutton = ({addRoom}) => {
    socket.once('ROOM_SENT', (data) => {
       // console.log('reçu')
      addRoom(data)
    })
    let input
    return (
        <div style={flex}>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                  //  console.log(input.value)
                    socket.emit('CREATE_ROOM', input.value)
                    input.value = ''
                }}
            >
                <input placeholder="enter room's name" style={nonstyle} ref={node => (input = node)} />
                <button style={btn} type="submit">Add room</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}


export default connect(mapStateToProps, {addRoom})(Roombutton);