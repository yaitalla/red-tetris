import grid from '../constants';


const INITIAL_STATE = {
    field: grid,
    shape: [],
    color: ""
}

const game = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DOWN':
            return null;
        case 'BRAND_NEW':
            return {
                ...state,
                shape: action.shape,
                color: action.color
            };
        default:
            return state;

    }
}


export default game;
