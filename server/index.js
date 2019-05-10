const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
// const api = require('./routes/api');
//const db = require('./config/db');
const debug = require('debug');
const startGame = require('./process/startGame');
const randomShapes = require('./process/shaper');
const lineMalus = require('./process/malus');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors({"origin": "*"})); //cross origin ressource sharing
app.use(bodyParser.urlencoded({ extended: false })); //parse request bodies in a midlleware
app.use(bodyParser.json());
// app.use('/api', api);
const logerror = debug('tetris:error')
  , loginfo = debug('tetris:log')

let userlist = [];
let roomlist = [];

// io.sockets.in('foobar').emit('message', 'anyone in this room yet?');

io.on('connection', (socket) => {
    console.log('connection')
    if (userlist.indexOf(socket.id) == -1){
      userlist.push(socket.id)
    }
    socket.emit('NEW_CONNECT', {
      type: 'LOGIN_DATA',
      rooms: roomlist,
      users: userlist
    })
    io.to(socket.id).emit('USER_ID', {
      type: 'USER_ID',
      id: socket.id,
      room: ""
    });
    socket.on('CREATE_ROOM', (room) => {
      roomlist.push({
        name: room,
        owner: socket.id,
        users: []
      })
      socket.emit('ROOM_SENT', roomlist)
    });
    socket.on('FALL', (room) => {
      setTimeout(() => {
        // for (let i in room.users) {
        //       console.log(room.users)
        //         socket.broadcast.to(room.users[i]).emit('FALL');
        // }
        //io.in(room.name).emit('FALL')
       // console.log(room.name)
        socket.emit('FALL')      
      }, 400)
    })
    socket.on('ENTER_ROOM', (data) => { //enter room
      let ret;
      for (let i in roomlist) {
        if (roomlist[i].name == data) {
          ret = roomlist[i]
          roomlist[i].users.push(socket.id)
        }
      }
      socket.join(data)
      
      socket.emit('ROOM_CHOSEN', {
        type: 'ROOM_CHOICE',
        actualRoom: {
          ...ret,
        }
      })
    })
    socket.on('LAUNCH', (room) => {
      io.in(room.name).emit('LAUNCH_GAME', startGame())
    })
    socket.on('PAUSE', (room) => {
      io.in(room.name).emit('PAUSE_GAME', {
        type: 'PAUSE_GAME'
      })
    })

    socket.on('MALUS', (data) => {
      for (let i in data.room.users) {
          if (data.room.users[i] != data.user) {
            socket.broadcast.to(data.room.users[i]).emit('MALUS');
        }
      }
    })
    socket.on('MALUSED', (data) => {
      socket.emit('MALUSED', {
        type: 'MALUSED',
        grid: lineMalus(data)
      })
    })

    socket.on('RESUME', (room) => {
      io.in(room.name).emit('RESUME', {
        type: 'RESUME',
      })
    })
    socket.on('SHAPE_REQ', data => {
      const newShapes = randomShapes(data.shapes)
      io.in(data.room.name).emit('SHAPES_SENT' , newShapes)
    })
   // loginfo("Socket connected: " + socket.id)
    
    // socket.on('action', (action) => {
    //   if(action.type === 'server/ping'){
    //     socket.emit('action', {type: 'pong'})
    //   }
    // })
    socket.on('disconnect', (action) => {
      userlist.splice(userlist.indexOf(socket.id), 1)// remove user from list
    //   const chekRooms = (room) => {         //check if the user
    //     return room.owner === socket.id     //was a room admin
    //   }
    //  while (roomlist.find(chekRooms)) {     //remove his rooms
    //    roomlist.splice(roomlist.indexOf(roomlist.find(chekRooms)), 1)
    //  }
      console.log("User disconnected: " + socket.id)
    })
  })


app.get('/', (req, res) => {
  res.send('first step')
})

server.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});
