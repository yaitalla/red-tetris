export const newConnect = (socket, roomlist, userlist) => {
    socket.emit('NEW_CONNECT', {
        type: 'LOGIN_DATA',
        rooms: roomlist,
        users: userlist
      })
}

export const createRoom = (socket, roomlist) => {
    socket.emit('ROOM_SENT', roomlist)
}

export const roomChosen = (socket, room) => {
    socket.emit('ROOM_CHOSEN', {
        type: 'ROOM_CHOICE',
        actualRoom: {
          room,
        }
      })
}