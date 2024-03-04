// lets use express js

const express = require("express");
const app = express();

app.get("/about", (req, res) => {
  // lets log pathname and query parameters in log.txt
  const fs = require("fs");

  if (req.url === "/favicon.ico" || req.url === "/highLightTitle.png") {
    res.end();
    return;
  }
  res.end(`Hello, from ${req.path.split().pop()}!`);

  fs.appendFile(
    "log.txt",
    `url = ${req?.url} \n
body = ${req?.body} \n
query = ${req?.query} \n
params = ${req?.params} \n
path = ${req?.path} \n
method = ${req?.method} \n`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Server is running on port: http://localhost:3000");
});
