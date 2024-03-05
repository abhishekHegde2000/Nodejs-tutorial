# Episode 12: **Introduction to POSTMAN for REST API's**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/21748c7e-09fb-4d2d-b1f8-06b9ee47f39c/c8aa15bd-4dc3-4008-8d3b-a762eb7d588f/Untitled.png)

let's break down the flow of creating a POST API using Postman based on your `index.js` file.

1. **Postman Setup** : In Postman, you would set the HTTP method to POST and enter the URL of your endpoint, which would be something like `http://localhost:3000/api/users` (replace `3000` with your actual port number). In the "Body" tab, you would select "raw" and "JSON", and then enter the data for the new user in JSON format.
2. **Express Route** : In your `index.js` file, you have a POST route set up at `/api/users`. When a POST request is made to this URL, the callback function you provided is called.

```jsx
app.route("/api/users").post((req, res) => {
  // ...
});
```

1. **Request Body** : Inside the callback function, you access the body of the request with `req.body`. This is the data for the new user that you entered in Postman.

```jsx
const body = req.body;
```

1. **Add User to Array** : You then create a new user object with an ID and the data from the request body, and push this object into the `users` array.

```jsx
users.push({ id: users.length + 1, ...body });
```

1. **Write to File** : You use the `fs.writeFile` function to write the updated `users` array to the `MOCK_DATA.json` file. The `JSON.stringify` function is used to convert the array to a JSON string.

```jsx
fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
  // ...
});
```

1. **Response** : Finally, you send a response back to the client saying "User added successfully".

```jsx
res.send("User added successfully");
```

So, the flow is: Postman sends a POST request -> Express route handles the request -> New user is added to array -> Array is written to file -> Response is sent back to Postman.

This needs to be added as middleware. Otherwise, req.body won't function and will return undefined. This is because Express doesn't know how to parse req.body without it.
