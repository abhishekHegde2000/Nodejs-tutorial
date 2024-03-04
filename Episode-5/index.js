const http = require("http");

// const server = http.createServer((req, res) => {
//   //   create a log file containing on which req.url the request was received
//   const fs = require("fs");
//   fs.appendFile(
//     "log.txt",
//     `request received at ${new Date().toISOString()} for ${req.url}\n`,
//     (err) => {
//       if (err) {
//         console.log(err);
//       }
//     }
//   );
//   console.log("new request received");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port: http://localhost:3000");
// });

const server = http.createServer((req, res) => {
  const fs = require("fs");

  // write a switch statement to handle different req.url and log the request in log.txt
  switch (req.url) {
    case "/":
      fs.appendFile(
        "log.txt",
        `request received at ${new Date().toISOString()} for ${req.url}\n`,
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      res.end("Hello from Node.js");
      break;
    case "/about":
      fs.appendFile(
        "log.txt",
        `request received at ${new Date().toISOString()} for ${req.url}\n`,
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      res.end("About us");
      break;

    //   can i get the url parameters here? for example if i want to go to /user, console log should be hello ${user} and it should be dynamic
    default:
      fs.appendFile(
        "log.txt",
        `request received at ${new Date().toISOString()} for ${req.url}\n`,
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      res.end("404 Page not found");
  }

  // lets create a blocking (synchronous) code that logs the request in logsync.txt
  fs.appendFileSync(
    "logsync.txt",
    `request received at ${new Date().toISOString()} for ${req.url}\n`
  );
});

server.listen(3000, () => {
  console.log("Server is running on port: http://localhost:3000");
});
