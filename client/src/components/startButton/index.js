import React from 'react';
import { flex, noBullet, btn, nonstyle} from './style';
import {fill} from '../../actions/fillGrid';
import { connect } from 'react-redux';
import { SHAPE_REQUEST, SERVER_IO_URL, SHAPE_SENT } from '../../constants';

//import {socket} from '../game/board';


const starter = (field, next, socket) => {
    socket.emit(SHAPE_REQUEST, {field, next})
}

const Button = ({fill, field, id, socket}) => {
    socket.on(SHAPE_SENT, (data) => {
        fill(data)
    })
    return (
        <div style={flex}>
            <ul style={noBullet}>
            {id == null ? <button onClick={() => starter(field, null, socket)} style={btn}> PLAY </button>
                : <div style={nonstyle} ></div>
            }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        field: state.field,
        id: state.currentID,
        socket: state.socket
    }
}


export default connect(mapStateToProps, { fill })(Button);