const newGrid = (field) =>{
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


const rotate = (shape) => {
    let checkArray = 10
    const arr = shape
    const ret = [[],[],[],[]]
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            ret[i][j] = arr[4-j-1][i]
            if (ret[i][j]) {
                checkArray = j < checkArray ? j :
                                checkArray;
            }
        }
    }
    const update = new Array(checkArray).fill(0);
    for (let i=0; i<4; i++){
        ret[i] = ret[i].slice(checkArray).concat(update)
    }
    //console.log(ret)
    return ret;
}

const coordinate = (field) => {
    let x=15;
    let y=0;
    for (let i in field) {
        for(let j in field[i]) {
                if (field[i][j] == 2) {
                    x = x > j ? j : x;
                    y = y < i ? i : y;
                }
        }
    }
    return {x: parseInt(x), y: parseInt(y)}
}

const rotateShape = (data) => {
    const coord = coordinate(data.field);
    let ret = newGrid(data.field);
    const rot = {
        shape: rotate(data.shape.shape),
        id: data.shape.id
    }
    console.log(coord)
    console.log(rot.shape)
    // for (let i=coord.y; i<coord.y+4; i++) {
    //     for(let j=coord.x; j<coord.x+4; j++) {
    //         if (rot.shape[i-coord.y][j-coord.x] == 2) {
    //             ret[i][j+coord.y] = rot.shape[i-coord.y][j-coord.x]
    //         }
    //     }
    // }

    for (let i=1; i<5; i++) {
        for(let j=3; j<7; j++) {
            if (rot.shape[i-1][j-3] == 2) {
                console.log(i, j)
                ret[i][j+1] = rot.shape[i-1][j-3]
            }
        }
    }
    return {
        type: 'ROTATE',
        field: ret,
        shape: rot,
    }
}
module.exports = rotateShape;           