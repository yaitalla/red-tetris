import axios from 'axios';

const fillIt = (shape, color) => ({
    type: BRAND_NEW,
    shape: shape,
    color: color
})
const api = axios.create({baseURL:"http://localhost:4000"});

const fill = () => {
    
    return api.get("/api/game/play").then((data) => {
    console.log('log fil', data)
    dispatch => dispatch(fillIt(data.data.shape, data.data.color))
    }
).catch(err => console.log(err));
}

export default fill;