var url = "http://mylogger.io/log";
const EventsEmitter = require("events");

console.log(__filename);
console.log(__dirname);

class Logger extends EventsEmitter {
  log(message) {
    // Send an HTTP request
    console.log("Hi " + message);
    // Raise an event
    this.emit("messageLogged", {
      id: 1,
      url: "http://www.google.com"
    }); // Making a noise, producing something
  }
}

module.exports = Logger;
