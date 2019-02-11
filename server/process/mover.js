const computeOffset = require('./colision');

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


const finish = (field, id) => {
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
const moveDown = (field, id) => {
    const grid = gridMaker(field);
    let i, j;
    const offsetDown = computeOffset(field, "down");
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                if (field[i + offsetDown-1][j] > 2 || field[i + offsetDown-1][j] == 1){
                    return {
                        field: finish(field, id),
                        grounded: true
                    }
                } else { grid[i+1][j] = 2; }
            }
        }
    }
    return {
        field: grid,
        grounded: false
    }
}

const moveLeft = (field, id) => {
    const grid = gridMaker(field);
    let i, j;
    const offsetDown = computeOffset(field, "left");
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                if (field[i][j - offsetDown-1] > 2 || field[i][j - offsetDown-1] == 1){
                    return {
                        field: finish(field, id),
                        grounded: true
                    }
                } else { grid[i][j-1] = 2; }
            }
        }
    }
    return {
        field: grid,
        grounded: false
    }
}

const moveRight = (field, id) => {
    const grid = gridMaker(field);
    let i, j;
    const offsetDown = computeOffset(field, "right");
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                if (field[i][j + offsetDown-1] > 2 || field[i][j + offsetDown-1] == 1){
                    return {
                        field: finish(field, id),
                        grounded: true
                    }
                } else { grid[i][j+1] = 2; }
            }
        }
    }
    return {
        field: grid,
        grounded: false
    }
}

const mover = (data) => {
    let ret = {};
    ret = data.key == 40 ? moveDown(data.field, data.id) : (
        data.key == 39 ? moveRight(data.field, data.id) : moveLeft(data.field, data.id)
    )
    return {
        type: 'MOVE',
        field: ret.field,
        grounded: ret.grounded
    }
}

module.exports = mover;