import constants from '../constants';
const { block, tetriminos } = constants;

  
const currentPiece = (state = {}, action) => {
  if (action.type.length < 7) {console.log('current reducer', action.type)}
  switch (action.type) {
    case 'FIRST':
      return {
        shape: action.randTetris.shape,
        X: 90,
        Y: -70,
        color: action.randTetris.color
      };
      case 'NEXT':
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

export default currentPiece;