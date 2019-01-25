import first from './first';
import brandNew from './brandNew';

const launch = () => {
    (dispatch, getState) => {
        
    }
}

const gameStart = () => {
    (dispatch) => {
        const checkKey = (event) => {
            if(event.keyCode === 32) {
                dispatch(launch());
                window.removeEventListener('keyup', checkKey);
            }
        }
        window.removeEventListener('keyup', checkKey);
    }
}