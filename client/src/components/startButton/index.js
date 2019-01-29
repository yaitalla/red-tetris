import React from 'react';
import { flex, noBullet, btn} from './style';
import io from 'socket.io-client';
import fill from '../../actions/fillGrid';


const handleClick = () => {
    console.log('clicked')
    // const socket = io('localhost:4000');
    // socket.emit('WIN_SIGNAL', {
    // signal: 'win'
    // });
    // //console.log('log socket', socket.connected, socket.disconnected)
    // socket.on('RECEIVE_SIGNAL', function(data){
    //     addMessage(data);
    // });
    // const addMessage = data => {
    //     console.log(data);
    // };
  }

const Button = () => {
    return (
        <div style={flex}>
            <ul style={noBullet}>
    <button onClick={fill/*(store.getState().field)*/} style={btn}> PLAY </button>
            </ul>
        </div>
    )
}


export default Button;