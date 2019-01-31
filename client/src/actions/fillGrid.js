
const fill = () => {
    const socket = store.socket;
    socket.emit('SHAPE_REQUEST', {
        field: store.field
    });
    socket.on('RECEIVE_REQUEST', function(data){
        let shape = data;
        let ret = store.field;
        console.log('shape & ret', shape, ret)
        for (let i=0; i<4; i++) {
            for(let j=3; j<7; j++) {
                ret[i][j] = shape.shape[i][j-3]
            }
        }
        console.log('ret filler',ret)
        return {
            type: 'BRAND_NEW',
            grid: ret,
            shape: shape.shape,
            color: shape.color,
        }
    });
}

export default fill;