const INITIAL_STATE = {
    move: ''
  };
  
  const applyState = (state, action) => ({
    ...state,
    move: action.payload.move
  });
  
  function playerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'PLAYER_MOVE':
        return applyState(state, action);
      default:
        return state;
    }
  }
  
  export default playerReducer;