import constants  from '../constants';

const first = () => {
    const getX = () => {
      return 60;
    }
    const getY = () => {
      return 60;
    }
    const rand1 = Math.floor(Math.random() * 7);
    const data = {
      shape: constants.shapes[rand1],
      color: constants.tetriminos[constants.shapes[rand1]].color,
      X: getX(),
      Y: getY()
    }
    console.log(data)
    return {
      type: 'FIRST',
      data
    }
  };

  export default first;