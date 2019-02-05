import {down} from './down';
import {right} from './right';
import {left} from './left';

export const move = field => {
   const handleDirection = (event) => {
        switch (event.keyCode) {
            case 37:
                event.preventDefault();
                return left(field);
                break;
            case 38:
                event.preventDefault();
                console.log('up arrow: rotate');
                break;
            case 39:
                event.preventDefault();
                return right(field);
                break;
            case 40:
                event.preventDefault();
    console.log(field)

                return down(field);
            default:
                return {
                    type: 'RAS',
                    newField: store.field
                    }
        }
   }
   window.addEventListener('keydown', handleDirection);
   return handleDirection
}
