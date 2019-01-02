import { combineReducers } from 'redux';
import player from './player';
import room from './rooms';
import current from './currentTetris';
import createShapes from './createShapes';


const rootReducer = combineReducers({
  player,
  room,
  current,
  createShapes
});


export default rootReducer;
