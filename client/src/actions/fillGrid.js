import axios from 'axios';
import io from 'socket.io-client';

const changedGrid = (grid, shape, color) => {
    let tmp = grid;

}

const fillIt = (shape, color, grid) => ({
    type: 'BRAND_NEW',
    grid: grid,
    shape: shape,
    color: color,
})
//const api = axios.create({baseURL:"http://localhost:4000"});

const fill = (shape, field) => {
    
    let ret = field;
    for (let i=0; i<4; i++) {
        //console.log(ret[i], shape.shape[i])
        for(let j=3; j<7; j++) {
            ret[i][j] = shape.shape[i][j-3]
        }
    }
    console.log(ret)
    fillIt(shape.shape, shape.color, ret);
    
    
    // return api.get("/api/game/play").then((data) => {
    // console.log('log fil', data.data)
    // return fillIt(data.data.shape, data.data.color)
    //}
//).catch(err => console.log(err));
}

export default fill;