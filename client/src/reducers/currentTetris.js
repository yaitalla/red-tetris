import constants from '../constants';
const { block, tetriminos } = constants;
  
  
function current(state = {}, action) {
switch (action.type) {
    case 'FIRST':
      return {
        shape: tetriminos[action.randTetris].shape,
        X: 90,
        Y: 0,
        color:tetriminos[action.randTetris].color,
        name: action.randTetris
      };
      case 'NEXT':
        return Object.assign({}, action.next, { X: 90, Y: 0 });
      case 'RIGHT':
        return Object.assign({}, state, {X: state.X + block});
      case 'LEFT':
        return Object.assign({}, state, {X: state.X - block});
      case 'DOWN':
        return Object.assign({}, state, {Y: state.Y + block});
      case 'ROTATE':
        return Object.assign({}, state, {shape: action.rotate});
    default:
      return state;
  }
}

export default current;