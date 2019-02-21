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


const moveLeft = (field, id, move, shape) => {
     //console.log('left',field)
     const grid = gridMaker(field);
    let i, j;
    const offsetDown = computeOffset(field, "left");
    console.log('left offset', offsetDown)
    //console.log(offsetDown)
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
               // console.log('trouvé')
                if (field[i][j-1] > 2 || field[i][j-1] == 1){
                    //console.log(offsetDown)
                    return {
                        type: 'LEFT',
                        field: field,
                        shape: shape
                    }
                } else {
                    // console.log('trouvé')
                    grid[i][j-1] = 2;
                }
            }
        }
    }
    console.log(shape.leftCorner)
    shape.leftCorner.x--
    console.log(shape.leftCorner)
    return {
        type: 'LEFT',
        field: grid,
        moving: true,
        shape: shape
    }
}

const moveRight = (field, id, move, shape) => {
    const grid = gridMaker(field);
    // console.log('right',grid)
    let i, j;
    const offsetDown = computeOffset(field, "right");
    console.log('right offset', offsetDown)
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                if (field[i][j + offsetDown-1] > 2 || field[i][j + offsetDown-1] == 1){
                    return {
                        type: 'RIGHT',
                        field: field,
                        shape: shape
                    }
                } else { grid[i][j+1] = 2; }
            }
        }
    }
    console.log(shape.leftCorner)
    shape.leftCorner.x++
    console.log(shape.leftCorner)
    return {
        type: 'RIGHT',
        field: grid,
        moving: true,
        shape: shape
    }
}
const moveDown = (field, id, move, shape) => {
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
                        shape: shape
                        
                    }
                } else { grid[i+1][j] = 2; }
            }
        }
    }
    //console.log(grid)
    console.log(shape.leftCorner)
    shape.leftCorner.y++
    console.log(shape.leftCorner)
    return {
        type: 'DROPDOWN',
        field: grid,
        grounded: false,
        moving: true,
        shape: shape
    }
}
const mover = (data) => {
    return (
        data.key == 40 ? moveDown(data.field, data.id, data.move, data.shape) :
            data.key == 39 ? moveRight(data.field, data.id, data.move, data.shape) :
                 moveLeft(data.field, data.id, data.move, data.shape)    
    )
}

module.exports = mover;