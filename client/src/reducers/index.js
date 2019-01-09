import { combineReducers } from 'redux';
import fall from './fall';
import room from './rooms';
import current from './currentTetris';
import createShapes from './createShapes';


const rootReducer = combineReducers({
  fall,
  room,
  current,
  createShapes
});


export default rootReducer;
