import constants  from '../constants';

const first = () => {
    const getX = () => {
      return 120;
    }
    const getY = (time) => {
      const now = Date.now();
      
      const y = store.getState().currentPiece.Y ? store.getState().currentPiece.Y : 60;
      console.log('ici',y)
      if(time - now >= 300) {
        return y+30
      }
      return y;
    }
    const rand1 = Math.floor(Math.random() * 7);
    const data = {
      shape: constants.shapes[rand1],
      color: constants.tetriminos[constants.shapes[rand1]].color,
      X: getX(),
      Y: getY(Date.now())
    }
    console.log(data)
    return {
      type: 'FIRST',
      data
    }
  };

  export default first;