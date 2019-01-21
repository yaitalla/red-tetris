import { combineReducers } from 'redux';
import start from './start';
import currentPiece from './currentTetris';
//import nextPiece from './nextTetris';


const rootReducer = combineReducers({
  start,
  currentPiece,
});


export default rootReducer;
