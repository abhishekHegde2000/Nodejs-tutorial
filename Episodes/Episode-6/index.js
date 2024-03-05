const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const urlObject = url.parse(req.url, true);
  console.log(urlObject);
  const { pathname, query, search, href } = urlObject;

  const fs = require("fs");

  if (pathname === "/favicon.ico" || pathname === "/highLightTitle.png") {
    res.end();
    return;
  }
  switch (pathname) {
    case "/":
      fs.appendFile(
        "log.txt",
        `request received at ${new Date().toISOString()} for ${pathname}\n`,
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
        `request received at ${new Date().toISOString()} for ${pathname}\n`,
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      res.end(`hi, ${query.name}!`);
      break;
    default:
      fs.appendFile(
        "log.txt",
        `request received at ${new Date().toISOString()} for ${pathname}\n`,
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port: http://localhost:3000");
});
