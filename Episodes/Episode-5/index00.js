const http = require("http");

const server = http.createServer((req, res) => {
  console.log("new request received");
  res.end("Hello from Node.js");
});

server.listen(3000, () => {
  console.log("Server is running on port: http://localhost:3000");
});

// create a log file for every time the server is started

const fs = require("fs");
const { timeLog } = require("console");

const server1 = http.createServer((req, res) => {
  console.log("new request received");

  fs.appendFile(
    "log.txt",
    `request recieved at ${new Date().toISOString()}`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res.end("Hello from Node.js from server 1");
});

server1.listen(3001, () => {
  console.log("Server is running on port: http://localhost:3001");
});
