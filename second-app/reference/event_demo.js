const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on("event", () => console.log("Event Fired!"));

// Init event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
