import constants from '../constants';
const { block, tetriminos } = constants;
  
  
const current = (state = {}, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'FIRST':
      return {
        shape: tetriminos[action.randTetris1],
        X: 90,
        Y: 90,
        color: tetriminos[action.randTetris1]
      };
      case 'NEW':
        return [
          ...state,
          { X: 90, Y: 0 }
        ];
      case 'ROTATE':
         return [ ...state, {shape: action.rotate}];
    default:
      return state;
  }
}

export default current;