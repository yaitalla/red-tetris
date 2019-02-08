import React from 'react';
import { flex, noBullet, btn} from './style';
import {fill} from '../../actions/fillGrid';
import { connect } from 'react-redux';
//import io from 'socket.io-client';
import { SOCKET, SHAPE_REQUEST, SERVER_IO_URL, SHAPE_SENT } from '../../constants';

//const socket = io(SERVER_IO_URL)



const starter = (field, colors) => {
    SOCKET.emit(SHAPE_REQUEST, {field})

}


const Button = ({fill, field}) => {
    SOCKET.on(SHAPE_SENT, (data) => {
        fill(data)
    })
    return (
        <div style={flex}>
            <ul style={noBullet}>
        <button onClick={() => starter(field)} style={btn}> PLAY </button>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        field: state.field,
    }
}


export default connect(mapStateToProps, { fill })(Button);