import grid from '../grid';


const INITIAL_STATE = {
    field: grid,
    shape: [],
    color: "",
}

const game = (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case 'DOWN':
            console.log('reduc log: action=',action)
            return action.newField;
        case 'BRAND_NEW':
            console.log('reduc log: action=', action )
            return {
                field: action.grid,
                shape: action.shape,
                color: action.color,
                socket: store.socket
            };
        case 'NEW':
            console.log('reduc log: action=',action)
            return state;
        default:
            return state;

    }
}


export default game;
