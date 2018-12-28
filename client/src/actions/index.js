export const playerMove = move => ({
    type: 'PLAYER_MOVE',
    move
});

export const newRoom = room => ({
  type: 'CREATE_ROOM',
  room: {
    name,
    owner
  }
})