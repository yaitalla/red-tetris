export const down = field => {
    const ret = [];
    for (let i=0; i<20; i++) {
        ret.push([]);
    }
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
            ret[i].push('');
        }
    }
    const newF = (field, time) => {
        for (let i=0; i<20; i++) {
            for(let j=0; j<10; j++) {
                if (store.field[i][j] === '0'){
                    //    console.log('trouvé en:',i, j )
                        ret[i+1][j] = '0';
                }
            }
        }
       // console.log('ret down', ret)
        return ret
    }
   const newField =  newF(store.field, Date.now())
    return {
        type: 'DOWN',
        newField
    }
  }
