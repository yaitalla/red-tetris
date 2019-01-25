import { combineReducers } from 'redux';
import start from './start';
import currentPiece from './currentTetris';


const rootReducer = combineReducers({
  start,
  currentPiece,
});


export default rootReducer;
