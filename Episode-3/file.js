// to use this file, you need to import it using fs

const fs = require("fs");

//  synchronous file read
fs.writeFileSync("welcome1.txt", "Welcome to Node.js World!");

// asynchronous file read

fs.writeFile("welcome2.txt", "Welcome to Node.js World!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});

fs.appendFile(
  "appendfile.txt",
  `${new Date().toLocaleString()} - Welcome to Node.js World!\n`,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully");
    }
  }
);

fs.appendFileSync(
  "appendfile1.txt",
  `${new Date().toLocaleString()} - \n Welcome to Node.js World! with appendFile sync example\n `
);

// to delete you can use unlink

fs.unlink("welcome1111.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File deleted successfully");
  }
});
