import axios from 'axios';
import io from 'socket.io-client';

const changedGrid = (grid, shape, color) => {
    let tmp = grid;

}

const fillIt = (shape, color, grid) => ({
    type: 'BRAND_NEW',
    grid: grid,
    shape: shape,
    color: color
})
const api = axios.create({baseURL:"http://localhost:4000"});

const fill = () => {
    const socket = io('localhost:4000');
    socket.emit('SHAPE_REQUEST', {
        field: 'test grid'
    });
    socket.on('RECEIVE_REQUEST', function(data){
        checkPayload(data);
    });
    const checkPayload = data => {
        console.log(data);
    };
    
    
    // return api.get("/api/game/play").then((data) => {
    // console.log('log fil', data.data)
    // return fillIt(data.data.shape, data.data.color)
    //}
//).catch(err => console.log(err));
}

export default fill;