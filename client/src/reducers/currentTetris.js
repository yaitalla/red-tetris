import constants from '../constants';
const { block, tetriminos } = constants;
const INITIAL_STATE = {
  
}
  
const currentPiece = (state = {}, action) => {
  //if (action.type.length < 7) {console.log('current reducer', action.type)}
  switch (action.type) {
    case 'FIRST':
      return {
        data: action.data,
      };
    case 'DOWN':
        return Object.assign({}, state, { Y: Y+30 });
    case 'LEFT':
        return Object.assign({}, state, { X: X-30 });
    case 'RIGHT':
        return Object.assign({}, state, { X: X+30 });
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