const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(content);
      }
    );
  } else if (req.url == "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(content);
      }
    );
  } else if (req.url == "/api/users") {
    const users = [
      { name: "Bob Smith", age: 40 },
      { name: "John Doe", age: 30 }
    ];
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify(users));
  } else {
    res.statusCode = 400;
    res.end("Page not found.");
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
