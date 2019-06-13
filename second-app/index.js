const Person = require("./person");
const Logger = require("./logger");

const jack = new Person("Jack", 20);
jack.greeting();

const logger = new Logger();
logger.on("message", data => console.log("Called Listener: ", data));
logger.log("Hello World!");
logger.log("Hi");
logger.log("Hello"); 
