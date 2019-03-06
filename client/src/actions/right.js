
const computeOffset = (data) => {
    let offset = 0;
    let x = -1, y = -1;
    for (let i=0; i<22; i++) {
        for(let j=0; j<12; j++) {
            if (data[i][j] == 2 && y > j){
                y = j;
                offset++;
            }
        }
    }
    return offset; //== 1 ? 2: offset;
}

const gridMaker = (field) =>{
    const grid = []
    for (let i=0; i<22; i++) { //game height: 20 blocs
        grid.push([]);
    }
    for (let i=0; i<22; i++) {
        for(let j=0; j<12; j++) { //game width 10 blocs
            if (i==0 || j==0 || i==21 || j==11){
                grid[i].push(1);
            }
            else if (field[i][j] > 2) {
                grid[i].push(field[i][j]);
            }
            else {
                grid[i].push(0);
            }
        }
    }
    return grid;
}

const touchDown = (field, id) => {
    let i, j;
    for ( i=0; i<22; i++) {
        for( j=0; j<12; j++) {
            if (field[i][j] == 2){
                field[i][j] = id+3;
            }
        }
    }
    return field;
}

const moveRight = (field, shapes, index, nbr) => {
    const grid = gridMaker(field);
    let i, j;
    const offset = computeOffset(field);
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                if (field[i][j+1] > 2 || field[i][j+1] == 1){
                    return {
                        type: 'REFRESH',
                        field: field,
                        nbr: nbr+1
                    }
                } else {
                    grid[i][j+1] = 2;
                }
            }
        }
    }
    shapes[index].leftCorner.x++
    return {
        type: 'RIGHT',
        field: grid,
        moving: true,
        shapes: shapes
    }
}

export const right = (field, nb, shapes, index) => {
    return moveRight(field, shapes, index, nb)
}