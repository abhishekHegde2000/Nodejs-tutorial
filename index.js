const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

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
const User = mongoose.model("user", userSchema);

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

app.get("/users", async (req, res) => {
  const AllUsers = await User.find();
  console.log(AllUsers);

  const List = AllUsers.map(
    (user) => `
            <li>
                <h2>${user.first_name} ${user.last_name}</h2>
                <p>Email: ${user.email}</p>
                <p>Job Title: ${user.job_title}</p>
                <p>Gender: ${user.Gender}</p>
            </li>
        `
  ).join("");

  const html = `<ul>${List}</ul>`;
  res.send(html);
});

app
  .route("/api/users")
  .get(async (req, res) => {
    const AllUsers = await User.find();

    res.status(200).json(AllUsers);
  })
  .post(async (req, res) => {
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
    const result = await User.create({
      first_name,
      last_name,
      Gender,
      email,
      job_title,
    });

    return res.status(201).json({ message: "User added successfully", result });
  });

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send(user);
  })
  .put(async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        Gender: "female",
        email: "123@abhi",
      });
      res.send(user);
    } catch (err) {
      console.log(err);
    }
  })
  .delete(async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      console.log("user deleted", user);
      return res.status(204).send("User deleted");
    } catch (err) {
      console.log(err);
    }
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
