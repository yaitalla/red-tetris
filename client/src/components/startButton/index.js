import React from 'react';
import { flex, noBullet, btn} from './style';
import {fill} from '../../actions/fillGrid';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import io from 'socket.io-client';
//import {socket} from '../../index'

const socket = io('localhost:4000')



const starter = () => {
    socket.emit('SHAPE_REQUEST', store.field)
}


const Button = ({ fill}) => {
    socket.on('SHAPE_SENT', (data) => {
        // dispatch({type: "NEW", data})
        fill(data)
    })
    return (
        <div style={flex}>
            <ul style={noBullet}>
        <button onClick={() => starter()} style={btn}> PLAY </button>
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => ({
})



export default connect(mapStateToProps, {fill})(Button);