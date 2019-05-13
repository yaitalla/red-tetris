const params = require('./config/params')
const server = require('./config/initServer')

server(params.server).then( () => console.log('Tetris Server initialized') )