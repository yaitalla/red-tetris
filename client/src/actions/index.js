import constants from '../constants';

export const launcher = () => {
  (dispatch, getState) => {
    dispatch(gameProcess());
    const move = (event) => {
      switch(event.keyCode) {
        case 37: //left
          event.preventDefault();
          dispatch(movePiece());
          break;
        case 39: //right
          event.preventDefault();
          dispatch(movePiece());
          break;
        case 40: //down
          event.preventDefault();
          dispatch(movePiece());
          break;
        default:
          break;
      }
    }
    const rotate = (event) => {
      switch(event.keyCode) {
        case 38:
          event.preventDefault();
          dispatch(rotatePiece());
          break;
        default:
          break;
      }
    }
    downfall(dispatch, Date.now(), getState);
    window.addEventListener('keydown', move);
		window.addEventListener('keydown', rotate);
  }
}

export const startGame = () => (
  (dispatch) => {
    const pressSpace = (event) => {
      if (event.keyCode === 32) {
        dispatch(launcher());
        window.removeEventListener('keyup', pressSpace);
      }
    }
    window.addEventListener('keyup', pressSpace)
  }
);

export const playerMove = move => ({
    type: 'PLAYER_MOVE',
    move
});

export const newRoom = room => ({
  type: 'CREATE_ROOM',
  room: {
    name,
    owner
  }
})