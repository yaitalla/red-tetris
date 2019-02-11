const computeOffset = (data, way) => {
    let offset = 0;
    let x = -1, y = -1;
        for (let i=0; i<22; i++) {
            for(let j=0; j<12; j++) {
                if (data[i][j] == 2){
                    switch(way){
                        case "down":
                            if (x != i) {
                                x = i;
                                offset++;
                            }
                            break;
                        case "left":
                            if (y > j) {
                                y = j;
                                offset++;
                            }
                            break;
                        case "left":
                            if (y < j) {
                                y = j;
                                offset++;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    return offset;
}

module.exports = computeOffset;