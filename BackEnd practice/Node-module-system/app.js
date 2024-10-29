// ----------------------------------
// path 
var path = require('path')

var pathobj = path.parse(__filename)

console.log(pathobj)

// ----------------------------------
// OS
const os = require('os');

var freememory = os.freemem()

console.log(freememory)

// ----------------------------------
// Fs
const fs = require('fs');

fs.readdir('./', function(err, files){
    if (err) console.log(error)
    else console.log(files)
})

// ----------------------------------
// Events

const EventEmitter = require("events");  // class

const Logger = require('./log')
const log = new Logger()

// adding listener
log.on("messageLogged", (eventArg) => {
    console.log("Event is heard", eventArg)
})

log.log("message")

// ----------------------------------
// Http
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello World");
        res.end();
    }
})

server.listen(3000);
console.log("Listening on port 3000") 