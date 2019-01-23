import constants from '../../constants';
const { gridHeight, gridWidth } = constants;

export const field = {
    backgroundColor: "cyan",
    width: "100%",
    height: "100%"
}

export const board = {
    background: '#fff',
    border: '1px solid #999',
    float: 'left',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '34px',
    height: '34px',
    marginRight: '-1px',
    marginTop: '-1px',
    padding: 0,
    textAlign: 'center',
    width: '34px',
}

export const flexDiv = {
    display: "flex",
    borderRadius: "15px",
    width: "100%",
    height: "100%",
    background: "linear-gradient(#e66465, #9198e5)"
}

export const game = {
    "backgroundColor": "#efefef",
    height: gridHeight,
    width: gridWidth,
    borderStyle: "solid"
}