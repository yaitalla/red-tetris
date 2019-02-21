import grid from '../grid';
import io from 'socket.io-client';
import {BRAND_NEW, GAME_OVER, ROTATE, DOWN,
    RIGHT, LEFT, DROPDOWN} from '../constants';

const INITIAL_STATE = {
    field: grid,
    shape: {},
    colors: ['#fff6b6','#f4cfb2', '#ffcccc', '#d9c2f0', '#ffd232', '#b5e8f7','#d18162'],
    next: {},
    currentID: null,
    grounded: false,
    gameOver: false,
    moving: false,
    //socket: io('localhost:4000')
}

const game = (state = INITIAL_STATE, action = {}) => {
    // console.log(action.type.length > 10 ? "defaut action": action.type)
    switch(action.type) {
        case DROPDOWN:
            return {
                ...state,
                field: action.field,
                grounded: action.grounded,
                moving: action.moving,
                shape: action.shape
            };
        case DOWN:
            return {
                ...state,
                field: action.field,
                grounded: action.grounded,
                moving: action.moving,
                shape: action.shape
            };
        case ROTATE:
            return {
                ...state,
                field: action.field,
                shape: action.shape
            };
        case LEFT:
            return {
                ...state,
                field: action.field,
                grounded: action.grounded,
                moving: action.moving,
                shape: action.shape
            };
        case RIGHT:
            return {
                ...state,
                field: action.field,
                grounded: action.grounded,
                moving: action.moving,
                shape: action.shape
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
        case GAME_OVER:
            return {
                ...state,
                currentID: null,
                gameOver: true
            };
        default:
            return state;

    }
}


export default game;
