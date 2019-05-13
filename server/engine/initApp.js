const debug = require('debug');

const   logerror = debug('tetris:error'),
        loginfo = debug('tetris:log');

const initApp = (app, params, cb) => {
    const {host, port} = params
    const handler = (req, res) => {
    const file = req.url === '/bundle.js' ?
        '/../../client/build/bundle.js'
        : '/../../client/dist/index.html'
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

module.exports = initApp;