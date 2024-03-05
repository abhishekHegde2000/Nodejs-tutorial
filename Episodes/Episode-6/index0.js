const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // using switch statement to handle different req.url and log the request in log.txt

  const fs = require("fs");
  switch (req.url) {
    case "/favicon.ico":
      res.end();
      break;

    case "/highLightTitle.png":
      res.end();
      break;

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

    default:
      {
        fs.appendFile(
          "log.txt",
          `request received at ${new Date().toISOString()} for ${req.url}\n`,
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
      res.end("Page not found");
  }
  // use url proprties to extract urlname and query parameters and log them in url.txt
  const urlObject = url.parse(req.url, true);

  // Extract the query parameters
  const { query } = urlObject;

  // Extract the name and id parameters
  const { name, id } = query;

  console.log(`Name: ${name}, ID: ${id}`);

  if (name && id) {
    fs.appendFile(
      "url.txt",
      `Name: ${name}, ID: ${id}, request received at ${new Date().toISOString()} for ${
        req.url
      }\n`,
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }
});

server.listen(3000, () => {
  console.log("Server is running on port: http://localhost:3000");
});
