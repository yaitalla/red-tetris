export const move = (data) => {
    return (dispatch) => dispatch(data)
}

/*
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
                 console.log('down')

                return down(field);
            default:
                return field
        }
   }
   window.addEventListener('keydown', handleDirection);
   return (dispatch) => dispatch(handleDirection)
}
*/