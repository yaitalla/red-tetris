import constants from '../constants';
const { tetriminos } = constants;

export const nextTetris = (state = {}, action) => {
    switch(action.type){
        case 'NEXT':
            return {
                shape: tetriminos[action.randTetris1.shape],
                X: 90,
                Y: 0
            };
        default:
            return state;
    }
}