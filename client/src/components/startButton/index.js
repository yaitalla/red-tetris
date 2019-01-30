import React from 'react';
import { flex, noBullet, btn} from './style';
import io from 'socket.io-client';
import fill from '../../actions/fillGrid';
import { connect } from 'react-redux';


const handleClick = () => {
   // console.log('clicked', store.socket)
    const socket = store.socket;
    socket.emit('SHAPE_REQUEST', {
        field: store.field
    });
    socket.on('RECEIVE_REQUEST', function(data){
        fill(data, store.field);
    });
    // const checkPayload = data => {
    //     console.log(data);
    // };
  }

const Button = () => {
    return (
        <div style={flex}>
            <ul style={noBullet}>
        <button onClick={handleClick} style={btn}> PLAY </button>
            </ul>
        </div>
    )
}


export default Button;