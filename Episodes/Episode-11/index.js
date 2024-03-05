const express = require("express");
const dotenv = require("dotenv");
const users = require("./MOCK_DATA.json");
// Configure dotenv
dotenv.config();
const app = express();
// Use the PORT environment variable if it's available
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Hello to Rest Api Tutorial!`);
});

// lets create a hybrid api , if /users it should render html else it should render json if /api/users : this is done because client side my be anything not need to be a browser. this is a hybrid api

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

app.get("/api/users", (req, res) => {
  res.send(res.json(users));
});

// now we should dynamically get the data of the single user /:id

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.send(user);
});

//

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

// as you can see some of the have same route path yet we are writing code differently, so we can use express router to make it more modular and clean.

// lets make a route /api/workers/:id and use get ,post , put , patch , delete method to get the data of the single user /:id

app
  .route("/api/workers/:id")
  .get((req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  })
  .post((req, res) => {
    res.send("Post request");
  })
  .put((req, res) => {
    res.send("Put request");
  })
  .patch((req, res) => {
    res.send("Patch request");
  })
  .delete((req, res) => {
    res.send("Delete request");
  });
