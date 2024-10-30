
const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Connected to server'); // This line logs a successful connection
    socket.emit('message', 'Hello from client');

    socket.on('message', (msg) => {
        console.log(msg); // Logs messages received from the server
    });
});

