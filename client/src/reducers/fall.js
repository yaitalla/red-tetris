const INITIAL_STATE = {
    X: 150,
    Y: 50
  };
  
  const applyState = (state, action) => ({
    ...state,
    X: action.payload.X,
    Y: action.payload.Y
  });
  
  function fall(state = INITIAL_STATE, action) {
    console.log(action.type)
    switch (action.type) {
      case 'FALL':
        return applyState(state, action);
      default:
        return state;
    }
  }
  
  export default fall;