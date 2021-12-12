const { Server } = require('socket.io')

const io = new Server({
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log('connected')
  console.log(socket)
})

io.listen(3000)
