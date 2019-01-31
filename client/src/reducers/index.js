import grid from '../grid';
import io from 'socket.io-client';


const INITIAL_STATE = {
    field: grid,
    shape: [],
    color: "",
    socket: io('localhost:4000')
}

const game = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DOWN':
            return action.newField;
        case 'BRAND_NEW':
            console.log('reduc log', action)
            return {
                ...state,
                field: action.grid,
                shape: action.shape,
                color: action.color
            };
        default:
            return state;

    }
}


export default game;
