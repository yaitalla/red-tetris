import grid from '../grid';
import {BRAND_NEW, MOVE} from '../constants';

const INITIAL_STATE = {
    field: grid,
    shape: [],
    color: "",
    next: {}
}

const game = (state = INITIAL_STATE, action = {}) => {
    console.log(action.type.length > 10 ? "defaut action": action.type)
    switch(action.type) {
        case MOVE:
            return {
                ...state,
                field: action.field
            };
        case BRAND_NEW:
            return {
                ...state,
                field: action.field,
                shape: action.shape,
                color: action.color,
                next: action.next
            };
        case 'RAS':
            return state;
        default:
            return state;

    }
}


export default game;
