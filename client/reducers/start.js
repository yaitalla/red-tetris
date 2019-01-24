import constants from '../constants';
const { block, tetriminos, grid } = constants;

const checkLocation = (tetrimino) => {
    const { shape, X, Y } = tetrimino;
    const location = [];
    for (let i=0; i<shape.length; i++){
        for(let j=0; j<shape[i].length; j++){
            if (shape[i][j]){
                location.push({x: j+(X/block), y: i+(Y/block)})
            }
        }
    }
    return location;
}

const lineChecker = (grid, tetrimino) => {
    const location = checkLocation(tetrimino);
    const field = getField(grid, tetrimino, color);
    const lineFull = [];
    const lines = location.reduce((last, tmp) => {
        last[tmp.y] = last[tmp.y] ? last[tmp.y]+1 : 1;
        return last;
    }, []);
    for (line in lines){
        let checked = true;
        for(let i=0; i<10; i++){
            if(field[i][line] === 'empty'){
                checked = false;
            }
        }
        if (checked) { lineFull.push(line) }
    }
    return lineFull;
}

const getField = (grid, tetrimino, color) => {
    const field = grid.map((x) => [...x]);
    const location = checkLocation(tetrimino);
    for (let i=0; i<location.length; i++) {
        const {x, y} = location[i];
        field[x][y] = color;
    }
    return field;
}

const newRender = (grid, tetrimino, color) => {
    const rows = lineChecker(grid, tetrimino);
    const field = getField(grid, tetrimino, color);
    for (row in rows) {
        for(let i=0; i<10; i++){
            field[i][row] = 'empty';
        }
    }
    for(let row=rows[0]-1; row>-1; row--){
        for(let i=0; i<10; i++){
            field[i][row+rows.length] = field[i][row];
        }
    }
    return field;
}

const start = (state = grid, action) => {
    //if (action.type.length < 7) {console.log('start reducer',action.type)}
    switch(action.type) {
        case 'FIRST':
            return grid;
        case 'DOWN':
            return Object.assign({}, state, { Y: Y+30 });
        case 'LEFT':
            return Object.assign({}, state, { X: X-30 });
        case 'RIGHT':
            return Object.assign({}, state, { X: X+30 });
        case 'BRAND_NEW':
            return newRender(state, action.current);
        default:
            return state;
    }
}

export default start;