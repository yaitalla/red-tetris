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

const newGame = (grid, tetrimino, color) => {
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
  //  console.log(field)
    return field;
}

/*
    A VERIFIER:
    Je pense que tu ne devrais pas faire de calcul dans le reducer ..
    retourne juste les data dont tu as besoin et fais tes calculs dans ton component,
    sinon ta value va mettre un temps de dingue pour s'écrire dans ton store
*/

const start = (state = grid, action) => {
    switch(action.type) {
        case 'NEW':
            console.log('NEW')
            return newGame(state, action.current);
        case 'FIRST':
            console.log('FIRST')
            return grid;
        default:
            console.log('DEFAULT')
            return grid;
    }
}

export default start;
