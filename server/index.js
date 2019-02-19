const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const shaper = require('./process/shaper');
const mover = require('./process/mover');
const rotateShape = require('./process/rotation');
const cors = require('cors');
const api = require('./routes/api');
//const db = require('./config/db');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors({"origin": "*"})); //cross origin ressource sharing
app.use(bodyParser.urlencoded({ extended: false })); //parse request bodies in a midlleware
app.use(bodyParser.json());
app.use('/api', api);

/* How To run shell commands from Node.js
const proce = require('child_process');
const myFiles = proce.execSync('ls', {encoding: 'utf8'});
console.log(myFiles);
*/

io.on('connection', (socket) => {
  console.log('user connected', socket.id)
  socket.on('SHAPE_REQUEST', (data) => {
   // console.log('SHAPE_REQUEST', data)
    socket.emit('SHAPE_SENT', shaper(data))
  })
  socket.on('DOWN_REQUEST', (data) => {
    io.emit('SERVE_DOWN', mover(data))
  })
  socket.on('LEFT_REQUEST', (data) => {
    //console.log(data)
    socket.emit('SERVE_LEFT', mover(data))
   })
  socket.on('RIGHT_REQUEST', (data) => {
    io.emit('SERVE_RIGHT', mover(data))
  })
  socket.on('ROTATE_REQUEST', (data) => {
    socket.emit('SERVE_ROTATE', rotateShape(data))
  })
  socket.on('disconnect', () => {
    console.log(socket.id, 'disconnected')
  })
})


app.get('/', (req, res) => {
  res.send('first step')
})

server.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});
