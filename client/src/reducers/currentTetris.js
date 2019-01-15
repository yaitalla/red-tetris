import constants from '../constants';
const { block, tetriminos } = constants;
  
  
const current = (state = {}, action) => {
switch (action.type) {
    case 'FIRST':
      return {
        shape: tetriminos[action.randomShape],
        X: 90,
        Y: 0
      };
      case 'NEW':
        return Object.assign({}, action.nextTetris, { X: 90, Y: 0 });
      case 'ROTATE':
         return Object.assign({}, state, {shape: action.rotate});
      case 'RIGHT':
        return Object.assign({}, state, {X: state.X + block});
      case 'LEFT':
        return Object.assign({}, state, {X: state.X - block});
      case 'DOWN':
        return Object.assign({}, state, {Y: state.Y + block});
     
    default:
      return state;
  }
}

export default current;