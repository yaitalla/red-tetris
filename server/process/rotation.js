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
    return ret;
}

module.exports = rotate;