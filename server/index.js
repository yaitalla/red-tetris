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
var users = [];
// io.sockets.in(room).emit('message', 'what is going on, party people?');
// this message will go to the clients in the room "foobar"
io.sockets.in('foobar').emit('message', 'anyone in this room yet?');

io.sockets.on('connection', (socket) => {
  console.log('user connected', socket.id)
  if (users.indexOf(socket.id) > -1){
    users.push(socket.id)
  }
  socket.emit('ROOM_SENT', { //clients can see rooms at connection
    type: 'ADD_ROOM',
      rooms: roomlist,
  })

  socket.emit('USR_LOGIN', { //add new user to list
      type: 'USER_LOGIN',
      id: socket.id,
      userlist: users
  })

  socket.on('CREATE_ROOM', (room) => {
    roomlist.push(room)
    socket.emit('ROOM_SENT', { //add new room to list
      type: 'ADD_ROOM',
      rooms: roomlist
    })
  });
  
  socket.on('ENTER_ROOM', (data) => { //enter room
    socket.emit('ROOM_CHOSEN', {
      type: 'ROOM_CHOSEN',
      actualRoom: data
    })
    socket.join(data)
  })

  socket.on('START_GAME', (data) => { //start the game
    console.log(data)
    io.in(data.room).emit('START_SENT', shaper(data))//by sending shapes
     //socket.emit('START_SENT', shaper(data))            //only in this room
  })
  
  socket.on('SHAPE_REQUEST', (data) => { //clients need more shapes
    //socket.emit('SHAPE_SENT', moreShapes(data))
  })

  socket.on('disconnect', () => {
    console.log(socket.id, 'disconnected')
    socket.emit('USER_LOGOUT', socket.id)
  })
})


app.get('/', (req, res) => {
  res.send('first step')
})

server.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});
