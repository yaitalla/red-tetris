import io from 'socket.io-client';

const socket = io('localhost:4000')


const configureSocket = dispatch => {
    socket.on('SHAPE_REQUEST', (data) => {
        dispatch({type: "NEW", data})
    })
}

export default configureSocket;