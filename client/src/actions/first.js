import constants  from '../constants';

const first = () => {
    const getX = () => {
      return 60;
    }
    const getY = () => {
      return 60;
    }
    const rand1 = Math.floor(Math.random() * 7);
    const randTetris = {
      shape: constants.shapes[rand1],
      color: constants.tetriminos[constants.shapes[rand1]].color,
      X: getX(),
      Y: getY()
    }
    return {
      type: 'FIRST',
      randTetris
    }
  };

  export default first;