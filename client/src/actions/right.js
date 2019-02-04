export const right = field => {
    const movedShape = [];
    for (let i=0; i<20; i++) {
        movedShape.push([]);
    }
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
            movedShape[i].push('');
        }
    }
    const newF = (field, time) => {
        for (let i=0; i<20; i++) {
            for(let j=0; j<10; j++) {
                if (store.field[i][j] === '0'){
                    console.log('0 trouvé')
                        movedShape[i][j] = '';
                }
                else if (store.field[i][j] === '1'){
                    movedShape[i][j+1] = '1';
                }
            }
        }
        return movedShape
    }
    const newField =  newF(store.field, Date.now())
    const action = {
        type: 'RIGHT',
        newField
    }
    console.log(action)
    return {
        type: 'RIGHT',
        newField
    }
  }
