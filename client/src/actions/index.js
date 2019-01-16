import constants  from '../constants';

/*
Tes REDUCERS sont nickels, bien découpés ... Pourquoi ne pas faire la mme chose ici ?
il faut créer un fichier actionName.js pour chaque reducerName.js !
*/

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

export const first = () => {
  const rand1 = Math.floor(Math.random() * 7);
  const rand2 = Math.floor(Math.random() * 7);
  const randTetris1 = constants.tetriminos[constants.shapes[rand1]].shape;
  const randTetris2 = constants.tetriminos[constants.shapes[rand2]].shape;
  console.log('now', constants.tetriminos[constants.shapes[rand1]])

  return randTetris1
  // return {
  //   type: 'FIRST',
  //   payload: {
  //     randTetris1,
  //     randTetris2
  //   }
  //};
};

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
