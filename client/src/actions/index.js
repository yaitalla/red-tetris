import { shapes } from '../constants';


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

export const first = () => (
  const rand1 = Math.floor(Math.random() * 7);
  const rand2 = Math.floor(Math.random() * 7);
  console.log(shapes)
  const randTetris1 = shapes[rand1];
  const randTetri21 = shapes[rand2];
  return {
    type: 'FIRST',
    randTetris1,
    randTetris2
  };
);

export const fall = ({data}) => ({
  type: 'FALL',
  data
})


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