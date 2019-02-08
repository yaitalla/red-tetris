import grid from '../grid';
import {BRAND_NEW, MOVE} from '../constants';

const INITIAL_STATE = {
    field: grid,
    shape: [],
    colors: ['#fff6b6','#f4cfb2', '#ffcccc', '#d9c2f0', '#ffd232', '#b5e8f7','#d18162'],
    next: {},
    currentID: null,
    grounded: false,
    time: ''
}

const game = (state = INITIAL_STATE, action = {}) => {
  //  console.log(action.type.length > 10 ? "defaut action": action.type)
    switch(action.type) {
        case MOVE:
            return {
                ...state,
                field: action.field,
                grounded: action.grounded
            };
        case BRAND_NEW:
            return {
                ...state,
                field: action.field,
                shape: action.shape,
                next: action.next,
                currentID: action.currentID,
                grounded: false
            };
        case 'TEST':
            return {
                ...state,
                time: action.time
            };
        default:
            return state;

    }
}


export default game;
