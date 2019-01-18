import constants from '../constants';
const { block, tetriminos } = constants;
  
  
const current = (state = {}, action) => {
  console.log('currentReducer',action.type)
  switch (action.type) {
    case 'FIRST':
      console.log(action.randTetris1.shape, action.randTetris1.color)
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