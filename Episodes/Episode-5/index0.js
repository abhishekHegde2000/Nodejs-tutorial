// lets build a server

const http = require("http"); // this is a built in module for creating a server

const server0 = http.createServer(); // this takes a callback function called requestListener

//  you can recall server takes request and response as arguments

function requestListener(req, res) {
  res.write("Hello from Node.js");
  res.end();
}

server0.on("request", requestListener);

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js from server 1");
  res.end();
});

server0.listen(3001, () => {
  console.log(`Server is running on port: http://localhost:${3001}`);
});

server.listen(3000, () => {
  console.log(`Server is running on port: http://localhost:${3000}`);
});
// open your browser and go to localhost:3000
