const INITIAL_STATE = {
    name: '',
    owner: ''
  };
  
  const applyState = (state, action) => ({
    ...state,
    name: action.payload.name,
    owner: action.payload.owner
  });
  
  function roomReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'CREATE_ROOM':
        return applyState(state, action);
      default:
        return state;
    }
  }
  
  export default roomReducer;