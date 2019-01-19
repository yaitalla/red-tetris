import constants from '../constants';
const { block, tetriminos } = constants;

  
const current = (state = {}, action) => {
  if (action.type.length < 7) {console.log('current reducer', action.type)}
  switch (action.type) {
    case 'FIRST':
      return {
        shape: action.randTetris1.shape,
        X: 90,
        Y: 90,
        color: action.randTetris1.color
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