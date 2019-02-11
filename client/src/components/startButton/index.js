import React from 'react';
import { flex, noBullet, btn} from './style';
import {fill} from '../../actions/fillGrid';
import { connect } from 'react-redux';
//import io from 'socket.io-client';
import { SOCKET, SHAPE_REQUEST, SERVER_IO_URL, SHAPE_SENT } from '../../constants';

//const socket = io(SERVER_IO_URL)



const starter = (field, next) => {
    SOCKET.emit(SHAPE_REQUEST, {field, next})
}

const Button = ({fill, field, id}) => {
    SOCKET.on(SHAPE_SENT, (data) => {
        fill(data)
    })
    return (
        <div style={flex}>
            <ul style={noBullet}>
            {id == null ? <button onClick={() => starter(field, null)} style={btn}> PLAY </button>
                : ''
            }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        field: state.field,
        id: state.currentID
    }
}


export default connect(mapStateToProps, { fill })(Button);