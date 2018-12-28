import { combineReducers } from 'redux';
import player from './player';
import room from './rooms';


const rootReducer = combineReducers({
  player,
  room
});


export default rootReducer;
