import io from 'socket.io-client';

export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const BRAND_NEW = 'BRAND_NEW';
export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const SERVER_IO_URL = 'localhost:4000';
export const SHAPE_REQUEST = 'SHAPE_REQUEST';
export const SHAPE_SENT = 'SHAPE_SENT';
export const SOCKET = io('localhost:4000');
export const DOWN_REQUEST = 'DOWN_REQUEST';
export const SERVE_DOWN = 'SERVE_DOWN';
export const LEFT_REQUEST = 'LEFT_REQUEST';
export const SERVE_LEFT = 'SERVE_LEFT';
export const RIGHT_REQUEST = 'RIGHT_REQUEST';
export const SERVE_RIGHT = 'SERVE_RIGHT';
export const DROPDOWN = 'DROPDOWN';
export const GAME_OVER = 'GAME_OVER';