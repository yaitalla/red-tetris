const socketData = (data) => {
    //console.log(data)
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

const handlingData = () => (data) => {
    //console.log('ici', data)
    return (socketData(data))
}

export const fill = (socket) => {
        socket.emit('SHAPE_REQUEST', {
        });
        socket.on('SEND_SHAPE',function(data){
            console.log('callback data', data)
            handlingData(data)
        });
    return {type: "BRAND_NEW"}
}


// Helper to emit a redux action to our websocket server
const fillAction = (actionCreator) => {
  return (...args) => {
    // This return the action object which gets sent to our backend
    // server via the socket connection
    const result = actionCreator.apply(this, args)
    socket.emit(result.key, {
      ...result.payload,
      type: result.type
    })
    return result
  }
}

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
