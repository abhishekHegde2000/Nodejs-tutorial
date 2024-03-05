const express = require("express");
const dotenv = require("dotenv");
const users = require("./MOCK_DATA.json");

// Configure dotenv
dotenv.config();
const app = express();
// Use the PORT environment variable if it's available
const port = process.env.PORT || 3000;
const fs = require("fs");

app.use(express.urlencoded({ extended: false })); // act as a middleware to parse the body of the request. without this req.body return undefined. this body is being sent friom postman
//  create a middleware
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method} \n Request URL: ${req.url}`);
  // if i leave it like this it will hang the request and will not continue to the next middleware or route handler

  // if i return the response here it will not continue to the next middleware or route handler
  // return res.send("Request has been blocked by the middleware")

  // if i call the next() function it will continue to the next middleware or route handler
  console.log("Middleware is working fine");
  next();
});

app.get("/", (req, res) => {
  res.setHeader("x-running-on", "Node.js powered by express");
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

app
  .route("/api/users")
  .get((req, res) => {
    res.send(res.json(users));
  })
  .post((req, res) => {
    const body = req.body;
    console.log(`body : \n \t ${JSON.stringify(body)} \t \n \n`);

    users.push({ id: users.length + 1, ...body });

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        console.log(err);
      }
      res.send("User added successfully");
    });
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
