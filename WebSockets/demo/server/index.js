const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://127.0.0.1:5500"
    }
});

io.on('connection', (socket) => {
    console.log('A user connected'); // This line logs a successful connection

    socket.on('message', (msg) => {
        console.log(msg); // Logs messages received from the client
    });

    socket.emit('message', 'Hello from server');
});


httpServer.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});
