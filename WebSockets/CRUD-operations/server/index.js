const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let CRUDdata = [];

io.on("connection", (socket) => {
  console.log("A user connected on socket.", socket.id);

  socket.on("data", (data) => {
    CRUDdata.push(data);
    io.emit("crudData", CRUDdata);
  });

  socket.on("editdata", (response) => {
    const index = CRUDdata.findIndex((d) => d.id === response.id);
    if (index !== -1) {
      CRUDdata[index] = { ...CRUDdata[index], ...response };
    }
    io.emit("crudData", CRUDdata); 
  });

  socket.on("delData", (index) => { 
    const currentindex = CRUDdata.findIndex((d) => d.id === index);
    if (currentindex !== -1) {
      CRUDdata.splice(currentindex, 1);
    }
    io.emit("crudData", CRUDdata); 
  });
});

httpServer.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});