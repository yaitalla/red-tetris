import constants  from '../constants';

const launcher = () => {
      const move = (event) => {
        switch(event.keyCode) {
          case 38:
            event.preventDefault();
            console.log(store.getState().currentPiece.data.Y);
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
            store.getState().currentPiece.Y+=10
            console.log('move down');
            break;
          default:
            break;
        }
      }
      window.addEventListener('keydown', move);
      return {
        type: 'LAUNCHER'
      }
  }

  export default launcher;