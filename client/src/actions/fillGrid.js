import io from 'socket.io-client';

const fill = (ownpropfield) => {
    const socket = store.socket;
    socket.emit('SHAPE_REQUEST', {
        field: store.field
    });
    const test = () => socket.on('RECEIVE_REQUEST', function(data){
        let shape = data;
        let ret = store.field;
        for (let i=0; i<4; i++) {
            for(let j=3; j<7; j++) {
                ret[i][j] = shape.shape[i][j-3]
            }
        }
       // console.log('ret filler',ret)

        return {
            type: 'BRAND_NEW',
            grid: ret,
            shape: shape.shape,
            color: shape.color,
        }
    });
    console.log(test())
    return test
}

export default fill;