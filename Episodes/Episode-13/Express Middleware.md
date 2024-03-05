# Episode 13: **Express Middleware**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/21748c7e-09fb-4d2d-b1f8-06b9ee47f39c/a6e9ea08-683f-4913-a2ce-d85746d815d4/Untitled.png)

Middleware in Express.js works like a series of checkpoints in a production line. Each checkpoint (middleware function) has a specific task and passes control to the next one if everything is okay.

Imagine you're at an airport. The ticket check is a middleware function, ensuring you have a valid ticket. The security check is another middleware function, making sure you're not carrying anything dangerous. Finally, the boarding gate check, another middleware function, ensures you're at the right gate and it's the correct time for you to board.

In Express.js, this might look like:

```jsx
const express = require("express");
const app = express();

// Ticket Check Middleware
app.use((req, res, next) => {
  console.log("Ticket Check Middleware");
  next();
});

// Security Check Middleware
app.use((req, res, next) => {
  console.log("Security Check Middleware");
  next();
});

// Boarding Gate Check Middleware
app.use((req, res, next) => {
  console.log("Boarding Gate Check Middleware");
  next();
});

app.listen(3000, () => console.log("Server is running..."));
```

Each `app.use()` call adds a middleware function to the Express.js application. They're executed in order, and each one can either end the request-response cycle or pass control to the next middleware function, much like the checkpoints at an airport.

Example 2:

**Analogy: Restaurant Staff**

Imagine a restaurant with various staff members who handle tasks before a customer's order reaches the kitchen. These staff members act as middleware in Express.js.

1. **Greeter (Request Validation):**
   - The greeter checks if the customer has a reservation (valid request) and greets them. Similarly, middleware can validate the request (e.g., checking for required headers or data format).
2. **Cloakroom (Authentication):**
   - The customer checks their coat (authentication token). Middleware can verify user credentials using tokens or sessions.
3. **Menu Presenter (Data Parsing):**
   - The waiter provides the menu (response data). Middleware can parse incoming data from a request body (e.g., JSON parsing).
4. **Order Taker (Request Modification):**
   - The waiter takes the order (modifies the request). Middleware can manipulate request data (e.g., adding timestamps).

**Code Example:**

```jsx
const express = require("express");
const app = express();

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

// Middleware to validate request body (assuming a required field 'name')
app.use((req, res, next) => {
  if (req.method === "POST" && !req.body.name) {
    return res.status(400).send("Missing required field: name");
  }
  next();
});

// Route handler to handle a GET request
app.get("/users", (req, res) => {
  res.send("List of users");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

**Explanation:**

1. The first middleware logs all incoming requests, acting like the greeter who acknowledges every customer.
2. The second middleware checks for a required field (`name`) in the request body for POST requests, similar to the waiter verifying a reservation. It sends an error response (like informing the customer they need a reservation) if the field is missing.
3. The `next()` function in both middleware allows the request to continue to the next middleware or the actual route handler (like the waiter taking the order after checking the reservation).
4. Finally, the `/users` route handler receives requests that have passed through the middleware checks and sends a response.

**Key Points:**

- Middleware functions are executed in the order they are defined in the app.
- You can use `next()` to pass control to the next middleware or route handler.
- Middleware can perform various tasks like logging, authentication, data parsing, and request modification.

This analogy and code example should give you a clearer understanding of how middleware works in Express.js to manage requests before they reach your route handlers, providing a more modular and organized way to handle server-side logic.

Example 3:

Middleware in Express.js is like a series of checkpoints that a request goes through before it reaches its final destination (the route handler). Each checkpoint can perform some operation on the request or response, or decide whether the request should continue to the next checkpoint.

Here's a real-world analogy: Imagine you're at an airport. Before you can board your flight (reach your route handler), you have to go through several checkpoints:

1. **Check-in (first middleware)** : This is where you get your boarding pass and check your luggage. In Express.js, this could be a middleware that checks if the client sent all the required data in the request.

```jsx
app.use((req, res, next) => {
  if (!req.body.name || !req.body.email) {
    res.status(400).send("Missing name or email");
  } else {
    next();
  }
});
```

1. **Security (second middleware)** : This is where you and your carry-on items are screened for prohibited items. In Express.js, this could be a middleware that checks if the client is authenticated.

```jsx
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
});
```

1. **Boarding gate (third middleware)** : This is where your boarding pass is checked one last time before you board the plane. In Express.js, this could be a middleware that checks if the client has permission to access the requested resource.

```jsx
app.use((req, res, next) => {
  if (!userHasPermission(req.user, req.path)) {
    res.status(403).send("Forbidden");
  } else {
    next();
  }
});
```

In each of these examples, the middleware function calls `next()` to pass control to the next middleware function. If there's a problem (e.g., missing data, not authenticated, no permission), the middleware function sends a response and does not call `next()`, so the request does not proceed to the next middleware function or the route handler.
