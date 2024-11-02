
const EventEmitter = require("events");  // class

class Logger extends EventEmitter{
    log(message){
        console.log(message)
    
        // introducing listener
    this.emit("messageLogged", { id: 1, url : "http://"})          // noising sth has happened
    }
}
 


module.exports = Logger;