const socketData = (data) => {
    let shape = data;
    let ret = store.field;
    for (let i=0; i<4; i++) {
        for(let j=3; j<7; j++) {
            ret[i][j] = shape.shape[i][j-3]
        }
    }
    //console.log('ici', ret)
    return {
        type: 'BRAND_NEW',
        grid: ret,
        shape: shape.shape,
        color: shape.color
    }
}

const handlingData = (dispatch) => (data) => {
    //console.log('ici', data)
    return dispatch(socketData(data))
}

const fill = (socket, ownProps) => {
    //console.log('ownProps', ownProps)
        socket.emit('SHAPE_REQUEST', {
            field: store.field
        });
        socket.on('RECEIVE_REQUEST', handlingData(dispatch))
}
export default fill;

/*
const fill = (socket) => {
        socket.emit('SHAPE_REQUEST', {
            field: store.field
        });
        let ret = store.field;
        socket.on('RECEIVE_REQUEST', function(data){
            let shape = data;
           // console.log('fill ret', ret)
            for (let i=0; i<4; i++) {
                for(let j=3; j<7; j++) {
                    ret[i][j] = shape.shape[i][j-3]
                }
            }
            return dispatch(fillnew(ret, shape));       
        }
}

const fill = (socket) => {
    socket.emit('SHAPE_REQUEST', {
        field: store.field
    });
    let ret = store.field;
    socket.on('RECEIVE_REQUEST', function(data){
        let shape = data;
        console.log('fill ret', ret)
        for (let i=0; i<4; i++) {
            for(let j=3; j<7; j++) {
                ret[i][j] = shape.shape[i][j-3]
            }
        }
        return {
            type: 'BRAND_NEW',
            grid: ret,
            shape: shape.shape,
            color: shape.color,
        }
    });
    console.log(ret)
}*/
