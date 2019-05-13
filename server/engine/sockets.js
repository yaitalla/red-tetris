const debug = require('debug');

const loginfo = debug('tetris:log');
let   userlist = [];
let   roomlist = [];

const socketsEngine = io => {
    io.on('connection', (socket) => {
      loginfo('connection')
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
      //here     
      // console.log("User disconnected: " + socket.id)
    })
  }

  module.exports = socketsEngine;