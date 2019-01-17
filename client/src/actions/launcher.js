import constants  from '../constants';
// ... c'est pas beau ici ... peut mieux faire !
const launcher = () => {
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

  export default launcher;
