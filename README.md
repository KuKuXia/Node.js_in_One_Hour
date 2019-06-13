# Node.js

---

[TOC]

## Introduction

1. **Node.js is a runtime environment for executing JavaScript code.** Traditionally JavaScript code need a run time environment to execute in a browser.
2. Node include a JavaScript engine(chrome v8) + plus additional modules.
3. Node is Not a programming language.
4. Node is Not a framework.

## Features

1. Great for prototyping and agile development

2. Superfast and highly scalable 

3. JavaScript everywhere

4. Cleaner and more consistent codebase

5. Large ecosystem of open-source libs

6. Highly scalable, data-intensive and real-time apps. -> **Non blocking or ASYNCHRONOUS**

7. Node applications are asynchronous by default. -> Node is ideal for I/O-intensive apps.

8. Do not use Node for CPU-intensive apps.

   

## Best Types of Projects for Node

1. Rest API& Micro-service
2. Real Time Services(Chat, Live Updates)
3. CRUD Apps - Blogs, Shopping Carts, Social Networks
4. Tool & Utilities

## NPM( Node Package Manager)

1. Install 3rd party packages (frameworks, libraries, tools, etc)
2. Packages get stored in the “node_modules” folder
3. All dependencies are listed in a “packages.json” file
4. NPM scripts can be create to run  certain tasks such as run a server

````bash
npm init  # Generates a package.json file
npm install # Install all the dependences in a module
npm install express # install a package locally
npm install -D -g nodemon # installs a package globally, -D means development dependence
````



## Node Module System

1. Node core Modules (path, fs, http, etc)
2. 3rd party modules/packages installed via NPM
3. Custom modules(files)
4. When we write a function, it’ll be added to the global scope. Global scope may cause the leak problem.(same name in different files)
5. But a variable is not in the global scope.
6. In Node, every file is a module.
7. Node does not run a module directly, it wraps the module inside a function. 

```js
// Module Wrapper Function
(function (exports, require, module, __filename, __dirname){ 
});
```



### Export object in a module

```js
var url = "http://mylogger.io/log";
function log(message) {
    // Send an HTTP request
    console.log("Hi "+message);
}

module.exports.log = log; // export a object
module.exports = log;   // export a function
```

### Import object in a module

```js
const logger = require("./logger");

console.log(logger.log("China"));
```

## Modules

```js
const logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");
```

## RESTful Service

1. REST: Representational State Transfer

### HTTP Methods

	1. GET /api/customers or /api/customers: getting data
 	2. POST /api/customers : posting data
 	3. PUT /api/customers/1 : Updating data
 	4. DELETE /api/customers/1 : delete data

### Express Module

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}.`)); // Using system environment variable to determine the port.

```

Install nodemon to automatically rerun the node.js files

```bash
npm i -g nodemon # install the nodemon module globally
nodemon index.js
```

### Handing the GET Request

```js
app.get("/", (req, res) => {
  res.send("Hello Node.js world!");
});
```



### Handling the POST Request

Using [Joi](https://www.npmjs.com/package/@hapi/joi) module. 

```bash
 npm install --save @hapi/joi
```

### Handling the PUT Request

```js
app.put("/api/courses/:id", (req, res) => {
  // Look up the course
  // If not existing, return 404
  const course = courses.find(c => c.id == parseInt(req.params.id));
  // 404
  if (!course) res.status(404).send("The course with current id is not found.");

  // Validate
  // If invalid, return 400 - Bad request
  const { error } = validateCourse(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // Update course
  // Return the updated course
  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}
```



 ### Handling the DELETE Request

```js
app.delete("/api/courses/:id", (req, res) => {
  // Look up the course
  // Not existing, return 404
  const course = courses.find(c => c.id == parseInt(req.params.id));
  // 404
  if (!course)
    return res.status(404).send("The course with current id is not found.");

  // Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // Return the same course
  res.send(course);
});
```

# Express

 ## Introduction

1. Express is a fast, unopinionated and minimalist web framework for Node.js.
2. Express is a “server-side” or “back-end” framework.
3. Makes building web applications with Node.js MUCH easier.
4. Used for both server rendered apps as well as API/Micro-services.
5. Extremely light, fast and free.
6. Full control of request and response.
7. By far the most popular Node framework.
8. Great to use with client side frameworks as it’s all JavaScript.























