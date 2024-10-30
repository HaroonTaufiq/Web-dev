const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let playerScores = [];

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  socket.on("data", (score) => {
    playerScores.push({ ...score, id: socket.id });
  });

  const intervalId = setInterval(() => {
    socket.emit("scores", playerScores);
    console.log(playerScores)
    
  }, 5000);
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    clearInterval(intervalId);
  });
});

httpServer.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});
