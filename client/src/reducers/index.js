import { combineReducers } from 'redux';
import start from './start';
import current from './currentTetris';


const rootReducer = combineReducers({
  start,
  current,
  //next
});


export default rootReducer;
