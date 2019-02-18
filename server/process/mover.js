const computeOffset = require('./colision');
const rotate = require('./rotation');

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


const moveLeft = (field, id, move) => {
     //console.log('left',field)
     const grid = gridMaker(field);
    let i, j;
    const offsetDown = computeOffset(field, "left");
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
               // console.log('trouvé')
                if (field[i][j-1] > 2 || field[i][j-1] == 1){
                    //console.log(offsetDown)
                    return {
                        type: 'LEFT',
                        field: field,
                    }
                } else {
                    // console.log('trouvé')
                    grid[i][j-1] = 2;
                }
            }
        }
    }
    return {
        type: 'LEFT',
        field: grid,
        moving: true
    }
}

const moveRight = (field, id, move) => {
    const grid = gridMaker(field);
    // console.log('right',grid)
    let i, j;
    const offsetDown = computeOffset(field, "right");
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                if (field[i][j + offsetDown-1] > 2 || field[i][j + offsetDown-1] == 1){
                    return {
                        type: 'RIGHT',
                        field: field,
                    }
                } else { grid[i][j+1] = 2; }
            }
        }
    }
    return {
        type: 'RIGHT',
        field: grid,
        moving: true
    }
}
const moveDown = (field, id, move) => {
    const grid = gridMaker(field);
    let i, j;
    let offsetDown = computeOffset(field, "down");
    offsetDown = offsetDown == 1 ? 2 : offsetDown;
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                if (field[i + offsetDown-1][j] > 2 || field[i + offsetDown-1][j] == 1){
                    return {
                        type: 'DROPDOWN',
                        field: finish(field, id),
                        grounded: true,
                        moving: true
                    }
                } else { grid[i+1][j] = 2; }
            }
        }
    }
    //console.log(grid)
    return {
        type: 'DROPDOWN',
        field: grid,
        grounded: false,
        moving: true
    }
}
const mover = (data) => {
    return (
        data.key == 40 ? moveDown(data.field, data.id, data.move) :
            data.key == 39 ? moveRight(data.field, data.id, data.move) :
                 moveLeft(data.field, data.id, data.move)    
    )
}

module.exports = mover;