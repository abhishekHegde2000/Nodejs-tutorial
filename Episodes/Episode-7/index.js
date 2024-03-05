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

  fs.appendFile(
    "log.txt",
    `request received at ${JSON.stringify(
      query
    )}\n for ${pathname}\n for ${search}\n for ${href}\n`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  const name = query?.name || pathname?.split("/").pop() || "Unknown";
  res.end(`Hi, ${name}!`);
});

server.listen(3000, () => {
  console.log("Server is running on port: http://localhost:3000");
});
