import constants  from '../constants';

const newPiece = (current, next) => {
    const rand1 = Math.floor(Math.random() * 7);
    const randTetris = constants.shapes[rand1];
    return {
        type: 'NEW',
        current,
        next,
        randTetris
    }
}

export default newPiece;