import io from 'socket.io-client';

export const MOVE = 'MOVE';
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const BRAND_NEW = 'BRAND_NEW';
export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const SERVER_IO_URL = 'localhost:4000';
export const SHAPE_REQUEST = 'SHAPE_REQUEST';
export const SHAPE_SENT = 'SHAPE_SENT';
export const SOCKET = io('localhost:4000');
export const MOVE_REQUEST = 'MOVE_REQUEST';
export const MOVE_SENT = 'MOVE_SENT';