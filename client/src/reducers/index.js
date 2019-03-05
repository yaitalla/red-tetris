import grid from '../grid';
import io from 'socket.io-client';
import {ADD_SHAPE, ROOM_CHOSEN, REFRESH, GAME_OVER, ROTATE, DOWN,
    ADD_ROOM, USER_LOGIN, USER_LOGOUT, RIGHT, LEFT, DROPDOWN, START_GAME} from '../constants';

const INITIAL_STATE = {
    currentUser: "",
    users: [],
    rooms: [],
    actualRoom: "",
    field: grid,
    shapes: [],
    ghostSize: 0,
    colors: ['#fff6b6','#f4cfb2', '#ffcccc', '#d9c2f0', '#ffd232', '#b5e8f7','#d18162'],
    next: {},
    currentID: null,
    grounded: false,
    gameOver: false,
    total: 0,
    nb: 0
}

const game = (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case ROOM_CHOSEN:
            return {
                ...state,
                actualRoom: action.actualRoom
            };
        case REFRESH:
            return {
                ...state,
                field: action.field,
                nb: action.nb
            };
        case ADD_ROOM:
            return {
                ...state,
                rooms: action.rooms,
            };
        case USER_LOGIN:
            return {
                ...state,
                currentUser: action.id,
                users: action.userlist
            };
        case USER_LOGOUT:
            return {
                ...state,
                currentUser: action.id,
                users: action.userlist
            };
        case ADD_SHAPE:
            return {
                ...state,
                field: action.field,
                shapes: action.shapes,
                next: action.next,
                currentID: action.currentID,
                total: action.total
            };
        case DROPDOWN:
            return {
                ...state,
                field: action.field,
                grounded: action.grounded,
                moving: action.moving,
                shapes: action.shapes
            };
        case DOWN:
            return {
                ...state,
                field: action.field,
                grounded: action.grounded,
                moving: action.moving,
                shapes: action.shapes
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
                shapes: action.shapes
            };
        case RIGHT:
            return {
                ...state,
                field: action.field,
                grounded: action.grounded,
                moving: action.moving,
                shapes: action.shapes
            };
        case START_GAME:
            return {
                ...state,
                field: action.field,
                shapes: action.shapes,
                next: action.next,
                currentID: action.currentID,
                total: action.total
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
