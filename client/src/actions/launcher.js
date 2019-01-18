import constants  from '../constants';

const launcher = () => {
    (dispatch, getState) => {
      const move = (event) => {
        switch(event.keyCode) {
          case 38:
            event.preventDefault();
            console.log('rotate');
            break;
          case 37: //left
            event.preventDefault();
            console.log('move left');
            break;
          case 39: //right
            event.preventDefault();
            console.log('move right');
            break;
          case 40: //down
            event.preventDefault();
            console.log('move down');
            break;
          default:
            break;
        }
      }
      window.addEventListener('keydown', move);
    }
  }

  export default launcher;