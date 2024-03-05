# Episode 11: **Building REST API's using Node and Express.js**

this file is a simple Express.js server that serves a REST API and a web page. Here's a summary of what it does:

1. **Imports and setup** : The file imports the necessary modules (`express` and `dotenv`), loads environment variables from a `.env` file using `dotenv`, and imports mock user data from a JSON file. It then creates an Express application and sets the port number.
2. **Root route (`/`)** : The server responds to GET requests at the root URL (`/`) with a welcome message.
3. **User list routes (`/users` and `/api/users`)** : The server has two routes for getting a list of users. If a client sends a GET request to `/users`, the server responds with an HTML page that displays the user data. If a client sends a GET request to `/api/users`, the server responds with the user data in JSON format.
4. **Single user route (`/api/users/:id`)** : The server has a route for getting data for a single user. If a client sends a GET request to `/api/users/:id` (where `:id` is the ID of a user), the server responds with the data for that user in JSON format. If there's no user with the given ID, the server responds with a 404 status code and a "User not found" message.
5. **Server start** : The server starts listening for requests on the specified port and logs a message to the console.
6. **Worker route (`/api/workers/:id`)** : The server has a route for performing different operations on a single worker. If a client sends a GET, POST, PUT, PATCH, or DELETE request to `/api/workers/:id` (where `:id` is the ID of a worker), the server responds with a message indicating the type of the request. For GET requests, it also tries to find and return the data for the worker with the given ID.

This file demonstrates several key concepts in Express.js, including routing, handling different HTTP methods, serving static files, and using middleware. It also shows how to use the `dotenv` module to load environment variables and how to import data from a JSON file.

```jsx
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
  console.log(`Server is running on: <http://localhost>:${port}`);
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
```

A hybrid API is an API that can serve different types of responses based on the client's needs or the endpoint that the client hits.

In the context of your code, the `/users` endpoint is a hybrid endpoint because it can serve both HTML and JSON responses:

- If a client sends a GET request to `/users`, the server responds with an HTML page that displays the user data. This is useful if the client is a web browser that needs to display the user data in a human-readable format.
- If a client sends a GET request to `/api/users`, the server responds with the user data in JSON format. This is useful if the client is another application that needs to process the user data programmatically.

This flexibility allows the same server to serve different types of clients, whether they're web browsers, mobile apps, desktop apps, or other servers. It's like a restaurant that can serve both dine-in customers and take-out customers. The food (data) is the same, but it's packaged differently depending on the customer's needs.
