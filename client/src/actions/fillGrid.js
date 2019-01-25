const fillIt = (shape, color) => ({
    type: BRAND_NEW,
    shape: shape,
    color: color
})

const fill = (data) => {
    console.log('log fil', data.shape)
    
    dispatch => {
        dispatch(fillIt(data.shape, data.color))
    }
}

export default fill;