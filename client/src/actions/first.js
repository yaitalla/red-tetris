import constants  from '../constants';

const first = () => {
    const rand1 = Math.floor(Math.random() * 7);
    const rand2 = Math.floor(Math.random() * 7);
    const randTetris1 = constants.tetriminos[constants.shapes[rand1]].shape;
    const randTetris2 = constants.tetriminos[constants.shapes[rand2]].shape;
  
    return randTetris1
  };

  export default first;