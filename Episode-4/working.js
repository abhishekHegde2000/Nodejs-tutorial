// how does nodejs work?

// Node.js is a runtime environment for executing JavaScript code. It's ideal for building highly-scalable, data-intensive, and real-time back-end services that power our client applications. It's not a programming language, but a runtime environment that allows us to run JavaScript on the server.

const fs = require("fs");

// synchronous file read - blocking code

console.log("Before file read");
const data = fs.readFileSync("contact.txt", "utf-8");
console.log(data);
console.log("After file read");

// asynchronous file read - non-blocking code

console.log("Before file read - async");
fs.readFile("contact.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("After file read - async");

const os = require("os");

console.log(os.cpus().length); // 8
