const Logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventsEmitter = require("events");
const http = require("http");

var pathObj = path.parse(__filename);
console.log(pathObj);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("Total Memory: " + totalMemory);
console.log("Free Memory: " + freeMemory);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const files = fs.readdirSync("./");
console.log(files);

const logger = new Logger();

// Register a listener
logger.on("messageLogged", arg => {
  console.log("Listener called", arg);
});

logger.log("message");

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write("Hello world!");
        res.end()
    }

    else if (req.url == '/api/course') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log("Listen on port 3000...");

// function sayHello(name) {
//   console.log("Hello " + name);
// }

// sayHello("KuKuXia");
// console.log(logger.log("China"));
// global.console.log(module);