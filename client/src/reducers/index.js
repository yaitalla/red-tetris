import { combineReducers } from 'redux';
import start from './start';
import room from './rooms';
import current from './currentTetris';
import createShapes from './createShapes';

// PARFAIT !!

const rootReducer = combineReducers({
  start,
  current,
  //next
});


export default rootReducer;
