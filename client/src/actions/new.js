import constants  from '../constants';

const new = (current, next) => {
    const rand = Math.floor(Math.random() * 7);
    const randTetris = constants.shapes[rand1];
    return {
        type: 'NEW',
        current,
        next,
        randTetris
    }
}

export default new;