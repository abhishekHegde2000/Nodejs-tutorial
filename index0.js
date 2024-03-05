const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false })); // act as a middleware to parse the body of the request. without this req.body return undefined. this body is being sent friom postman

const port = process.env.PORT || 3000;

// now lets use mongoDb
// first letc create a schema
const userSchema = new mongoose.Schema({
  // first name require , email unique
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// lets create a model
const User = mongoose.model("User", userSchema);

mongoose
  .connect("mongodb://localhost:27017/mongo-tutorial")
  .then(() => {
    // Get the default connection
    const db = mongoose.connection;

    console.log("Connected to db:", db.name);
  })
  .catch((err) => {
    console.error("Error connecting to db:", err);
  });

app.route("/").get((req, res) => {
  res.setHeader("x-running-on", "Node.js powered by express");
  res.send(`Hello to Rest Api Tutorial!`);
});

app.get("/users", (req, res) => {
  const userList = users
    .map(
      (user) => `
            <li>
                <h2>${user.first_name} ${user.last_name}</h2>
                <p>Email: ${user.email}</p>
                <p>Gender: ${user.gender}</p>
                <p>Job Title: ${user.job_title}</p>
                <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            </li>
        `
    )
    .join("");
  const html = `<ul>${userList}</ul>`;
  res.send(html);
});

app
  .route("/api/users")
  .get((req, res) => {
    if (!users) {
      return res.status(404).send("No user found");
    }
    res.send(users);
  })
  .post((req, res) => {
    const { first_name, last_name, Gender, email, job_title } = req.body;

    if (!first_name) {
      return res.status(400).send("First name is required");
    }
    if (!last_name) {
      return res.status(400).send("Last name is required");
    }
    if (!email) {
      return res.status(400).send("Email is required");
    }
    if (!job_title) {
      return res.status(400).send("Job title is required");
    }
    if (!Gender) {
      return res.status(400).send("Gender is Required");
    }

    users.push({ id: users.length + 1, ...req.body });
    return res.status(201).send(users);
  });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send(user);
  })
  .put((req, res) => {
    let user = users.find((user) => user.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { first_name, last_name, Gender, email, job_title } = req.body;

    user.first_name = first_name;
    user.last_name = last_name;
    user.Gender = Gender;
    user.email = email;
    user.job_title = job_title;

    res.send(user);
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
