const fs = require('fs'),
      debug = require('debug'),
      db = require('./db'),
      loginfo = debug('tetris:log'),
      initApp = require('../engine/initApp'),
      socketsEngine = require('../engine/sockets');


const create = (params) => {
    const promise = new Promise((resolve, reject) => {
        const app = require('http').createServer()
        initApp(app, params, () => {
            const io = require('socket.io')(app)
            const stop = (cb) => {
                io.close()
                app.close(() => {
                    app.unref()
                })
                loginfo('Engine stopped')
                cb()
            }
            socketsEngine(io)
            resolve({stop})
        })
    })
    return promise
}

module.exports = create