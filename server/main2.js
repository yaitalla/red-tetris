import params  from '../../params'
import * as server from './index'
server.create(params.server).then( () => console.log('Tetris Server') )

const params = {
    server:{
       host: '0.0.0.0'
     , port: 3004
     , get url(){ return 'http://' + this.host + ':' + this.port } 
    },
  }
  
  
  import fs  from 'fs'
  import debug from 'debug'
  import startGame from './process/startGame'
  import randomShapes from './process/shaper';
  import lineMalus from './process/malus';
  
  let userlist = [];
  let roomlist = [];
  
  const logerror = debug('tetris:error')
    , loginfo = debug('tetris:log')
  
  const initApp = (app, params, cb) => {
    const {host, port} = params
    const handler = (req, res) => {
      const file = req.url === '/bundle.js' ? '/../../build/bundle.js' : '/../../index.html'
      fs.readFile(__dirname + file, (err, data) => {
        if (err) {
          logerror(err)
          res.writeHead(500)
          return res.end('Error loading index.html')
        }
        res.writeHead(200)
        res.end(data)
      })
    }
    app.on('request', handler)
    app.listen({host, port}, () =>{
      loginfo(`tetris listen on ${params.url}`)
      cb()
    })
  }
  const sendFall = io => {
    loginfo(io.sockets.sockets)
  }
  const initEngine = io => {
    io.on('connection', function(socket){
      
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
        console.log("User disconnected: " + socket.id)
    })
  }
  
  export function create(params){
    const promise = new Promise( (resolve, reject) => {
      const app = require('http').createServer()
      initApp(app, params, () =>{
        const io = require('socket.io')(app)
        const stop = (cb) => {
          io.close()
          app.close( () => {
            app.unref()
          })
          loginfo(`Engine stopped.`)
          cb()
        }
  
        initEngine(io)
        sendFall(io)
        resolve({stop})
      })
    })
    return promise
  }
    