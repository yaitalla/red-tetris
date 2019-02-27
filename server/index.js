const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const shaper = require('./process/shaper');
const mover = require('./process/mover');
const dropdown = require('./process/dropdown');
const rotateShape = require('./process/rotation');
const cors = require('cors');
const api = require('./routes/api');
//const db = require('./config/db');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors({"origin": "*"})); //cross origin ressource sharing
app.use(bodyParser.urlencoded({ extended: false })); //parse request bodies in a midlleware
app.use(bodyParser.json());
// app.use('/api', api);

/* How To run shell commands from Node.js
const proce = require('child_process');
const myFiles = proce.execSync('ls', {encoding: 'utf8'});
console.log(myFiles);
*/
var roomlist = [];
// io.sockets.in(room).emit('message', 'what is going on, party people?');
// this message will go to the clients in the room "foobar"
io.sockets.in('foobar').emit('message', 'anyone in this room yet?');

io.sockets.on('connection', (socket) => {
  console.log('user connected', socket.id)
  // socket.on('user conn', (socket) => {
  //   console.log('user connected', socket.id)
  // })
  socket.on('CREATE_ROOM', (room) => {
    roomlist.push(room)
    //console.log('room list', roomlist)
    socket.join(room);
    socket.emit('ROOM_SENT', {
      type: 'ADD_ROOM',
      rooms: roomlist
    })
  });
  socket.on('ENTER_ROOM', (data) => {
    socket.join(data)
  })
  socket.on('START_GAME', (data) => {
     socket.emit('START_SENT', shaper(data))
   })
  socket.on('SHAPE_REQUEST', (data) => {
    socket.emit('SHAPE_SENT', moreShapes(data))
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
