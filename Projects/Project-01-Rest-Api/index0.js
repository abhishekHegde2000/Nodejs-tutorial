const express = require("express");
const dotenv = require("dotenv");
const users = require("./MOCK_DATA.json");

// Configure dotenv
dotenv.config();

const app = express();

// Use the PORT environment variable if it's available
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).json(users);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
