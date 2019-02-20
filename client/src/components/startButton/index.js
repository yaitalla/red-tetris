import React from 'react';
import { flex, noBullet, btn, nonstyle} from './style';
import {fill} from '../../actions/fillGrid';
import { connect } from 'react-redux';
import { SHAPE_REQUEST, SERVER_IO_URL, SHAPE_SENT } from '../../constants';
// import io from 'socket.io-client';
// const socket =  io('localhost:4000');

import socket from '../../socket';

const starter = (field, next) => {
    socket.emit(SHAPE_REQUEST, {field, next})
}

//<button onClick={() => starter(field, null, socket)} style={btn}>PLAY</button>

const Button = ({fill, field, id}) => {
    socket.once(SHAPE_SENT, (data) => {
      console.log('shape from server')
      fill(data)
    })
    return (
        <div style={flex}>
            <ul style={noBullet}>
            {id == null ? <button onClick={() => starter(field, null, socket)} style={btn}> PLAY </button>
                : <div style={nonstyle}>Play with arrow keys: ◄ ▲ ► ▼</div>
            }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        field: state.field,
        id: state.currentID,
//        socket: state.socket
    }
}


export default connect(mapStateToProps, { fill })(Button);