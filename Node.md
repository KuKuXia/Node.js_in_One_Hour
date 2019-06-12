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

## Node Module System

1. When we write a function, it’ll be added to the global scope. Global scope may cause the leak problem.(same name in different files)
2. But a variable is not in the global scope.
3.  In Node, every file is a module.
4. Node does not run a module directly, it wraps the module inside a function. 

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































