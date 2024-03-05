# Epsidoe 2: **Modules in NodeJS**

in big companies codes are reduced to small modules with specific uses.

then we will use that modules in different parts.

simple example:

Sure, here's a basic example of how to use `require` and `module.exports` in Node.js.

Let's say you have two files: `greet.js` and `app.js`.

In `greet.js`, you define a function that you want to make available to other files:

```jsx
// greet.js

function greet(name) {
  console.log("Hello, " + name + "!");
}

// Export the greet function
module.exports = greet;
```

In `app.js`, you can use `require` to import the `greet` function from `greet.js`:

```jsx
// app.js

// Import the greet function from greet.js
var greet = require("./greet");

// Use the imported function
greet("World"); // Outputs: Hello, World!
```

In this example, `module.exports` in `greet.js` is used to specify what should be exported from the file. Then, in `app.js`, `require('./greet')` is used to import what was exported from `greet.js`. The `./` in `require('./greet')` specifies that `greet.js` is in the same directory as `app.js`.

### Multiple exports needs to sent in js object:

Sure, here's an example of how to export multiple items from a module in Node.js.

Let's say you have a file named `mathFunctions.js` where you define two functions: `add` and `multiply`.

```jsx
// mathFunctions.js

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// Export the functions
module.exports = {
  add,
  multiply,
};
```

In this file, `module.exports` is an object that has two properties: `add` and `multiply`. Each property is a function.

Now, you can import these functions in another file using `require`. Here's how you can do it in a file named `app.js`:

```jsx
// app.js

// Import the functions from mathFunctions.js
var mathFunctions = require("./mathFunctions");

// Use the imported functions
console.log(mathFunctions.add(1, 2)); // Outputs: 3
console.log(mathFunctions.multiply(3, 4)); // Outputs: 12
```

In `app.js`, `require('./mathFunctions')` returns the object that was exported from `mathFunctions.js`. You can then use the properties of this object as functions.
